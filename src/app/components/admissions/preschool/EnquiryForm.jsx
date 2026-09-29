"use client";

import { useId, useState } from "react";
import { ChevronDown, Loader2 } from "lucide-react";
import styles from "./EnquiryForm.module.css";
import { AGE_OPTIONS, FORM_ID, LOCATION_OPTIONS } from "./data";

// Same endpoint as the site's Contact page. Set NEXT_PUBLIC_FUTURE100_API to route
// Future 100 enquiries elsewhere.
const ENQUIRY_API =
  process.env.NEXT_PUBLIC_FUTURE_100_API || "https://riseschool.in/preschoolAdmission.php";
   //process.env.NEXT_PUBLIC_FUTURE_100_API || "http://localhost/riseschool_website/preschoolAdmission.php";


const EMPTY = {
  childName: "",
  childAge: "",
  parentName: "",
  parentMobile: "",
  parentEmail: "",
  location: "",
};

const MOBILE_PATTERN = /^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values) {
  const errors = {};
  if (!values.childName.trim()) errors.childName = "Enter your child’s name.";
  if (!values.childAge) errors.childAge = "Select your child’s age group.";
  if (!values.parentName.trim()) errors.parentName = "Enter your name.";
  if (!MOBILE_PATTERN.test(values.parentMobile.trim()))
    errors.parentMobile = "Enter a 10-digit Indian mobile number.";
  if (!EMAIL_PATTERN.test(values.parentEmail.trim())) errors.parentEmail = "Enter a valid email address.";
  if (!values.location) errors.location = "Select where you live.";
  return errors;
}

export default function EnquiryForm() {
  const uid = useId();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const fieldId = (name) => `${uid}-${name}`;

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    setStatus({ type: "", text: "" });

    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(ENQUIRY_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // fields understood by the existing contact endpoint
          name: values.parentName.trim(),
          email: values.parentEmail.trim(),
          phone: values.parentMobile.trim(),
          message: `Future 100 – Book your visit. Child: ${values.childName.trim()} (${values.childAge}). Location: ${values.location}.`,
          consent: true,
          // structured fields for a dedicated handler
          source: "future-100-landing",
          ...values,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false) {
        throw new Error(data.message || "We couldn’t send your request.");
      }
      setValues(EMPTY);
      setStatus({
        type: "success",
        text: "Thank you! Our admissions team will contact you to schedule your visit.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        text: `${err.message || "We couldn’t send your request."} Please try again or call +91 86570 15231.`,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const textField = (name, label, props = {}) => (
    <div className={styles.field}>
      <label htmlFor={fieldId(name)}>{label}</label>
      <input
        id={fieldId(name)}
        name={name}
        value={values[name]}
        onChange={onChange}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `${fieldId(name)}-err` : undefined}
        required
        {...props}
      />
      {errors[name] && (
        <p id={`${fieldId(name)}-err`} className={styles.error}>
          {errors[name]}
        </p>
      )}
    </div>
  );

  const selectField = (name, label, options, placeholder) => (
    <div className={styles.field}>
      <label htmlFor={fieldId(name)}>{label}</label>
      <div className={styles.selectWrap}>
        <select
          id={fieldId(name)}
          name={name}
          value={values[name]}
          onChange={onChange}
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${fieldId(name)}-err` : undefined}
          required
          data-empty={values[name] === "" ? "true" : "false"}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className={styles.chevron} size={18} aria-hidden="true" />
      </div>
      {errors[name] && (
        <p id={`${fieldId(name)}-err`} className={styles.error}>
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form id={FORM_ID} className={styles.form} onSubmit={onSubmit} noValidate aria-labelledby={`${uid}-title`}>
      <h2 id={`${uid}-title`} className={styles.title}>
        Book your visit
      </h2>

      <div className={styles.grid}>
        {textField("childName", "Child name", { autoComplete: "off" })}
        {selectField("childAge", "Child age", AGE_OPTIONS, "Select age group")}
        {textField("parentName", "Parent name", { autoComplete: "name" })}
        {textField("parentMobile", "Parent mobile", {
          type: "tel",
          inputMode: "tel",
          autoComplete: "tel",
          maxLength: 16,
        })}
        {textField("parentEmail", "Parent Email", { type: "email", autoComplete: "email" })}
        {selectField("location", "Residential location", LOCATION_OPTIONS, "Select location")}
      </div>

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className={styles.spin} size={16} aria-hidden="true" /> Sending…
          </>
        ) : (
          "Submit"
        )}
      </button>

      <p className={styles.consent}>By submitting, you agree to be contacted by the RISE admissions team.</p>

      <div aria-live="polite" role="status">
        {status.text && (
          <p className={status.type === "success" ? styles.success : styles.failure}>{status.text}</p>
        )}
      </div>
    </form>
  );
}
