import { Github, Linkedin, MailIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function ContactSection() {

    const t = useTranslations()

        const contacts = [
            {
                id: 0,
                icon: <MailIcon className="w-4 h-4"/>,
                title : "nilswentingpro@gmail.com",
                link: "mailto:nilswentingpro@gmail.com"
            },

            {
                id: 1,
                icon : <Linkedin className="w-4 h-4"/>,
                title : "LinkedIn",
                link : "https://linkedin.com/in/nils-wenting-332348281"
            }, 

            {
                id: 2, 
                icon : <Github className="w-4 h-4"/>,
                title : "GitHub",
                link: "https://github.com/nilsw13"
            }
        ]

    return (
        <section id="contact" className="w-full bg-gray-50 py-20">


                <div className="max-w-5xl mx-auto px-4">


                    <h2 className="text-2xl md:text-3xl mb-12">Contact</h2>

                        <div className="max-w-xl text-gray-600 leading-relaxed text-lg mb-8">{t("contact_section.description")} </div>


                        <div className="flex flex-col  md:flew-wrap gap-20 lg:flex-row">
                                {contacts.map((m)=> (
                                        <Link target="_blank"  rel="noopener noreferrer" href={m.link} key={m.id}  className={`${m.id === 0 ? "border border-gray-400/20 rounded-md  inline-flex  bg-white px-4 py-2 text-gray-900 shadow-sm font-semibold" : "border-none hover:bg-gray-100 rounded-md py-2 px-4 transition-colors text-gray-600 font-medium"} flex cursor-pointer items-center  justify-center gap-2`}>
                                                <span>{m.icon}</span>
                                                <span>{m.title}</span>

                                        </Link>

                                        
                                ))}
                        </div>
                </div>


        </section>
    )
}