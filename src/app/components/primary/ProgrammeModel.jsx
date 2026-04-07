import { dinNext } from "@/app/fonts"
import styles from './programme.module.css';

const data = [
    {
        title: "Who We Are",
        text: "Exploring identity, values, and relationships",
    },
    {
        title: "Where We Are in Place and Time",
        text: "Discovering ideas, creativity, and communication",
    },
    {
        title: "How the World Works",
        text: "Investigating scientific and technological systems",
    },
    {
        title: "How We Organize Ourselves",
        text: "Examining communities, leadership, and responsibilities",
    },
    {
        title: "Sharing the Planet",
        text: "Reflecting on sustainability and global citizenship",
    },
]

export const ProgrammeModel = () => {
    return (
        <section className="mt-12">
            <h2 className={`text-[64px] lxs:text-[64px] sm:text-[72px] md:text-[82px] lg:text-[96px] font-bold uppercase ${dinNext.className} leading-[1] text-center`}>
                <span className="text-[#831719]">PROGRAMME</span> MODEL
            </h2>
            <p className={`text-[#1b1b1b] text-[17px] px-4 text-center max-w-5xl mx-auto transform -translate-y-0 mt-2 mb-4 `}>
                Primary Years Programme is an inquiry-based and concept-driven, structured around six transdisciplinary themes
                that connect learning across subjects and real-life contexts:
            </p>
            <div className="flex w-full flex-col lg:flex-row">
                {/* <div className=" min-w-[48%] relative "> */}
                <div className={`${styles.imageWrapper}`}>
                    <img className={`${styles.model_img} ${styles.img1}`} width="100%" src="/images/primary/01.svg" alt="" />
                    <img className={`${styles.model_img} ${styles.img5}`} width="100%" src="/images/primary/02.svg" alt="" />
                    <img className={`${styles.model_img} ${styles.img4}`} width="100%" src="/images/primary/03.svg" alt="" />
                    <img className={`${styles.model_img} ${styles.img3}`} width="100%" src="/images/primary/04.svg" alt="" />
                    <img className={`${styles.model_img} ${styles.img2}`} width="100%" src="/images/primary/05.svg" alt="" />
                    <img className={`${styles.model_img} ${styles.img6}`} width="100%" src="/images/primary/07.svg" alt="" />
                </div>
                <div className=" w-full lg:w-[52%] px-4 lg:px-0 flex flex-col items-center lg:items-start">

                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="">
                                    <div className="text-center justify-content-center">
                                        <ol className={`${styles.olcards} fade-lr`}>
                                            {data.map((item, index) => (
                                                <li key={index} style={{ "--cardColor": "#8a141ce6" }}>
                                                    <div className={styles.content}>
                                                        <div className={`${styles.title} text-uppercase`}>
                                                            {item.title}
                                                        </div>
                                                        <div className={styles.text}>{item.text}</div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <p className="text-[#1b1b1b] text-[17px] px-2 text-center max-w-5xl mx-auto transform -translate-y-0 mt-8 mb-4">
                Each unit of inquiry integrates multiple disciplines and encourages students to ask,<strong className="text-[#831719]">“Why?” , “How?”,</strong> and <strong className="text-[#831719]">“What if?”</strong>,

                helping them connect learning to the real world.</p>
        </section>
    )
}