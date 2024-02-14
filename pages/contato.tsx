/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'Sobre mim',
        description: `Olá, me chamo Sabrina Mesquita de São Luís, Maranhão, Brasil.
        Apesar de ser formada na área da saúde, me apaixonei pela progamação. Sou desenvolvedora front-end e estou me aperfeiçoando em ReactJs e NodeJs.
        Possuo cursos de certificações: HTML Avançado, Css Avançado, Javascript Developer, React Developer.`,
        keywords: 'react js, contato, sabrina mesquita, next js blog, fron-end',
        author: 'Sabrina Mesquita'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <a href="https://webexpe.com/" target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                        <img src="/images/YT Logo.png" alt="webexpe.com" className="rounded-lg overflow-hidden" />
                    </a>
                    <Text title className='mb-5 mt-10 dark: text-purple-500'>
                    Olá, me chamo Sabrina Mesquita 
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                        Desenvolvi um blog pessoal para compartilhar minhas idéias e pensamentos.
                    </Text>

                    <Text p className='text-lg'>
                    Meu blog pessoal é uma expressão digital da minha paixão por compartilhar ideias, experiências e conhecimentos. Desenvolvido com Next.js e React, ele oferece uma experiência dinâmica e envolvente para os visitantes. <br /><br />
                        
                    </Text>

                    

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Filosfias
                            </Text>
                            <List type={ListType.disc}>
                                <li>Pouco código</li>
                                <li>SEO-friendly</li>
                                
                                
                                <li>Mais rápido que qualquer outro CMS</li>
                            </List>
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                Tecnologias
                            </Text>
                            <List type={ListType.disc}>
                            <li>React.js</li>
                            <li>Next.js</li>
                                <li>Node.js</li>
                                <li>NPM</li>
                                
                            </List>
                        </div>
                    </div>
                    <Seperator />
                    
                    
                    <Text p className='text-lg'>
                        Criado por <LinkTo href="https://www.linkedin.com/in/sabrina-mesquita-8a39a6205/" external className="font-semibold">Sabrina Mesquita</LinkTo>   com  ♥
                    </Text>
                    <a href="https://www.buymeacoffee.com/sabriinaguq?new=1" target="_blank" rel="noopener noreferrer">
                        <img src="/images/bmc.png" className="ml-0" alt="compre um café" />
                    </a>
                    <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                        <Text p className="!text-lg leading-relaxed mb-0">
                            Para qualquer dúvida ou entrar em contato, mande uma mensagem para <u>sabriinagui.t@gmail.com</u>.
                            
                        </Text>
                    </div>
               
            </section>
        </PageLayout>
    )
}

export default AboutUs