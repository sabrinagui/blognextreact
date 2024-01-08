/** These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";

const Article = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar>
            {/* Replace the below content with your content */}
            <Text>
                <h1>Mudança de carreira: Da saúde para a tecnologia</h1>
            </Text>
            <Image src="/public/images/avatar.png" alt="alt text" caption="img caption" className="mb-5" />
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
                <p>Oi pessoal! Estou super animado(a) em contar para vocês sobre uma reviravolta incrível na minha vida: a mudança de carreira que fiz recentemente. Deixei para trás a área da saúde, mais precisamente a enfermagem, para me jogar de cabeça no universo fascinante da tecnologia.</p>

                <p>Posso dizer que a decisão não foi das mais fáceis, afinal, trabalhar na saúde é uma vocação nobre. No entanto, com o tempo, percebi que meu coração batia mais forte por desafios tecnológicos, por aprender sobre as últimas novidades e por me envolver em algo que realmente me instigasse.</p>

                <p>Minha experiência na saúde me trouxe lições valiosas, como empatia, resolução de problemas e trabalho em equipe. E o melhor? Essas habilidades são super úteis no mundo da tecnologia, onde a colaboração e entender as necessidades do usuário são o pulo do gato.</p>

                <p>Agora, estou começando uma nova fase, explorando o incrível universo da tecnologia com a mesma paixão que dediquei à enfermagem. Quero encarar desafios inovadores, aprender linguagens de programação novas e fazer parte de soluções que realmente fazem a diferença na vida das pessoas.</p>

                <p>Vou compartilhar com vocês tudo sobre essa jornada de autodescoberta e reinvenção profissional. Estou super empolgado(a) para dividir meus aprendizados, desafios e sucessos enquanto sigo por esse novo caminho tecnológico. Bora juntos explorar todas as possibilidades que essa mudança de carreira oferece!</p>

                <p>Fiquem ligados que vem muito mais por aí! Valeu por fazerem parte dessa nova fase comigo! <a href="" target="_blank" rel="noopener noreferrer"><u><i></i></u></a></p>
            </div>
            {/* Replace the above content with your content */}
        </PageLayout>
    );
}

export default Article;
