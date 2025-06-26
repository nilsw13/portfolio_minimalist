import { Dot, ExternalLink, ExternalLinkIcon, Github,  Link2Icon, Mail } from "lucide-react"
import Link from "next/link"

export default function OpenSourceSection() {


    const repos = [
        {
            id: 0,
            title : "spring-replicate-client",
            description: "Client web pour consommer l'API Replicate avec Spring Boot. Disponible sur Maven Central.",
            stack : "Java",
            link: "https://github.com/nilsw13/spring-boot-replicate"
            
        },

        {
            id: 1, 
            title : "saas-starter-kit",
            description : "Starter kit de création de SAAS avec choix de multiples frameworks frontend et backend Spring Boot.",
            stack : "Java", 
            status: "En développement",
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

                                                <span className="text-gray-600 text-sm">{repo.description}</span>

                                                <div className="flex gap-8 items-center">

                                                        <div className="flex items-center gap-1">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                            <span className="text-gray-400">{repo.stack}</span>
                                                            </div>
                                                        {repo.status && <div className="text-xs inline-flex items-center justify-center border border-gray-400 font-semibold rounded-xl px-2.5 py-0.5">{repo.status}</div>}
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