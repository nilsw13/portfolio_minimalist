import {   ExternalLinkIcon, Github } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function OpenSourceSection() {

    const t = useTranslations()


    const repos = [
        {
            id: 0,
            title : "spring-replicate-client",
            description: "open_source_section.projects_list.replicate_client_descr",
            stack : "Java",
            link: "https://github.com/nilsw13/spring-boot-replicate"
            
        },

        {
            id: 1, 
            title : "saas-starter-kit",
            description : "open_source_section.projects_list.saas_starter_descr",
            stack : "Java", 
            status: "open_source_section.projects_list.status",
            link : "https://github.com/nilsw13/starter-kit-cli"
        }

    ]

    return (
        <section id="open-source" className="w-full bg-white py-20 ">

                <div className="max-w-5xl mx-auto px-4 ">

                    <h2 className="text-2xl md:text-3xl mb-12">Open Source</h2>


                        <div className="flex flex-col gap-6 ">
                            {repos.map((repo)=> (
                                <div key={repo.id}  className="w-full rounded-md bg-white border border-gray-400/20 p-6 space-y-2 ">
                                        <div className="flex items-start justify-between">

                                            <div className="flex flex-col gap-4">
                                                
                                                <div className="flex items-center gap-2">
                                                    <Github className="w-4 h-4"/>
                                                    <span className="font-medium tracking-tight text-lg text-gray-900">{repo.title}</span>
                                                </div>

                                                <span className="text-gray-600 text-sm">{t(repo.description)}</span>

                                                <div className="flex gap-8 items-center">

                                                        <div className="flex items-center gap-1">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                            <span className="text-gray-400">{repo.stack}</span>
                                                            </div>
                                                        {repo.status && <div className="text-xs inline-flex items-center justify-center border border-gray-400 font-semibold rounded-xl px-2.5 py-0.5">{t(repo.status)}</div>}
                                                </div>


                                                
                                            </div>


                                            <Link href={repo.link} rel="noopener noreferrer" target="_blank" >
                                                <ExternalLinkIcon className="w-4 h-4 text-gray-600 hover:text-gray-800 transition-colors"/>
                                            </Link>



                                        </div>

                                </div>
                            ))}
                        </div>

                </div>

        </section>
    )
}