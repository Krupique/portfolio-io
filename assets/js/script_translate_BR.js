$(document).ready(function(){

    flagLanguage = 'BR'
    var btnBR = $('#flagBR');
    
    $(btnBR).on('click', function(e){
    
        /*************** HEADER ***************/
        $('#header_about').text('Sobre');
        $('#header_portfolio').text('Portfólio');
        $('#header_blog').text('Blog');
        $('#header_resume').text('Resumo');
        $('#header_contact').text('Contato');


        /*************** HERO ***************/
        /* Pensar se vale a pena focar nisso*/
        var hero_span = `Eu sou <span class="typed" data-typed-items="Henrique Krupck, Cientista de Dados, Especialista em IA, Engenheiro de Machine Learning"></span>`;
        $('#hero_h1').html(hero_span);
        $('#hero_p1').text("Cientista de Dados, Especialista em IA, Engenheiro de Machine Learning");


        /*************** ABOUT ***************/
        $('#about_p1').text('Cientista da computação comprometido em gerar valor e insights por meio dos dados.');
        $('#about_p2').text('Com mais de 4 anos de experiência profissional, sendo dois anos na indústria 4.0 e outros atuando no setor de varejo e e-commerce, tenho foco na solução de problemas. Atualmente, faço parte da equipe de Pricing da Americanas, o maior varejista do Brasil.');


        /*************** SERVICES ***************/
        var services_div1_html = `<div id="services_div1" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/python_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/tensorflow_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/pytorch_logo.png" width="20%"></i><span>AI TOOLS AND FRAMEWORKS</span><p id="services_p3" class=" separator">Seis anos de experiência com Python e com construção de modelos de AI e Machine Learning com Scikit Learn, Tensorflow, Pytorch e outras.</p></div></div>`;
        var services_div2_html = `<div id="services_div2" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/gcp_logo.png" width="25%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/gcp_bigquery_logo.png" width="23%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/gcp_cloud_ml_logo.jpg" width="23%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/gcp_cloud_functions_logo.jpg" width="23%"></i><span>GOOGLE CLOUD COMPUTING</span><p id="services_p5" class="separator">Two years of experience utilizing GCP services such as BigQuery, Cloud Storage, Cloud Functions, Vertex AI, and Google Machine Learning to analyze, model, and execute company projects.</p></div></div>`;
        var services_div3_html = `<div id="services_div3" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/aws_logo.png" width="24%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/aws_lambda_logo.jpg" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/aws_s3_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/aws_ec2_logo.png" width="20%"></i><span>AMAZON WEB SERVICES</span><p id="services_p5" class="separator">Um ano de experiência fazendo deploy de modelos de Machine Learning utilizando os serviços da AWS.</p></div></div>`;
        var services_div4_html = `<div id="services_div4" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/databricks_logo.png" width="22%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/snowflake_logo.png" width="23%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/apache_spark_logo.png" width="27%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/airflow_logo.png" width="20%"></i><span>DATA ENGINEERING TOOLS</span><p id="services_p2" class="separator">Dois anos de experiência com ferramentas de engenharia de dados para ingestão, organização e gerenciamento do fluxo de dados utilizando Airflow, Databricks, Snowflake e Spark.</p></div></div>`;
        var services_div5_html = `<div id="services_div5" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/excel_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/power_bi.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/looker_studio_logo.png" width="15%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/tableau_logo.png" width="20%"></i><span>BUSINESS ANALYTICS</span><p id="services_p1" class="separator">Expericência com ferramentas de análise para comunicar e apresentar os resultados para times técnicos e não técnicos.</p></div></div>`;
        var services_div6_html = `<div id="services_div6" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/rust_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/cpp_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/java_logo.png" width="18%"></i><span>OTHER LANGUAGES</span><p id="services_p5" class="separator">Amplo conhecimento em outras linguagens de programação com propósitos diversos e com foco em desempenho como C, C++, Rust e Java.</p></div></div>`;
        var services_text = '<div class="container"><div class="services-slider swiper" data-aos="fade-up" data-aos-delay="100"><div class="swiper-wrapper">' + services_div1_html + services_div2_html + services_div3_html + services_div4_html + services_div5_html + services_div6_html + '</div><div class="swiper-pagination"></div></div></div>';
        $('#services').html(services_text);

        /*************** PORTFOLIO ***************/
        $('#portfolio_h2').text('PORTFÓLIO');
        
        /*************** BLOG ***************/
        /*************** RESUME ***************/
        $('#resume_title').text("RESUMO");
        $('#resume_p1').text("Por dois anos fiz parte de uma empresa que presta serviços de Indústria 4.0 para indústrias do setor de embalagens. Eu atuei no desenvolvimento de um SAP, com participação em todas as etapas do projeto, desde a fase inicial - 𝗰𝗼𝗹𝗲𝘁𝗮 𝗱𝗲 𝗿𝗲𝗾𝘂𝗶𝘀𝗶𝘁𝗼𝘀, até a publicação final do sistema web. Utilizei as seguintes tecnologias: HTML, CSS e JavaScript para Front-end; 𝗖#, 𝗔𝗦𝗣.𝗡𝗘𝗧 e 𝗘𝗻𝘁𝗶𝘁𝘆 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸 para Back-end; 𝗦𝗤𝗟 para banco de dados. Linguagem de baixo nível para desenvolvimento de APIs para integração do sistema web com máquinas industriais; 𝗔𝘇𝘂𝗿𝗲 e 𝗚𝗶𝘁 para controle de versão e publicação do site em serviços cloud. 📈");
        $('#resume_p2').text("Valorizo a qualidade do desenvolvimento aplicando conceitos de boas práticas de programação e gestão de projetos. Tenho experiência com programação orientada à objetos (𝗣𝗢𝗢) e aplicação de metodologias ágeis, utilizando 𝗞𝗮𝗻𝗯𝗮𝗻 para organizar as atividades e 𝗦𝗖𝗥𝗨𝗠 para desenvolvimento de projetos.");
        $('#resume_p3').text("Atualmente sou 𝗗𝗮𝘁𝗮 𝗔𝗻𝗮𝗹𝘆𝘀𝘁 na 𝘼𝙢𝙚𝙧𝙞𝙘𝙖𝙣𝙖𝙨 𝙎𝘼 e faço parte do time de Regionalização, cuja as responsabilidades estão na definição das regiões utilizadas nos cálculos de frete, logística de entrega e busca. O nosso objetivo é a constante busca pela melhoria dos prazos de entrega, utilizando modelos e ferramentas de georreferenciamento na clusterização da demanda e otimização dos serviços.");
        $('#resume_p4').text("Como pessoa, sempre me esforço para dar o meu melhor no que estiver fazendo. Acredito que oferecer soluções antes de reclamar ou criticar é um passo importante para mudar o mundo a sua volta e fazer a diferença.");
        $('#resume_p5').text("Apaixonado por aventuras em cima de duas rodas, aficionado por Chopin e tocá-lo no piano, bodybuilder e cozinheiro nas horas vagas.");
    

        /*************** EDUCATION ***************/
        $('#education').text("Formação");
        $('#education_h1').text("BACHAREL EM CIÊNCIA DA COMPUTAÇÃO");
        $('#education_em').text("Universidade do Oeste Paulista, Presidente Prudente, SP");
        $('#education_p1').text("Durante a faculdade eu participei de maratonas de programação, Hackathons e diversos eventos na área de computação.");
        $('#education_p2').text("Meu projeto de graduação foi focado na área de Visão Computacional, no qual eu apliquei o uso de Inteligência Artificial para identificar e monitorar indivíduos por meio de vídeo e identificar movimentos que pudessem significar um possível ato criminoso.");
        var link_article = '<em><a target="_blank" id="education_a1" href="assets/docs/ArtigoFinal.pdf">Uso de Deep Learning aplicado no reconhecimento de ações humanas a partir de vídeos em alta resolução visando identificar movimentos suspeitos</a></em>';
        $('#education_p3').html("Você pode ler meu artigo científico aqui: " + link_article);
        $('#education_l1').text("Participação e várias maratonas de programação SBC;");
        $('#education_l2').text("Participação em eventos promovidos pela faculdade como Palestras, Minicursos, Hackathons, etc..;");
        $('#education_l3').text("Colaboração em diversas ações voluntárias durante minha vida acadêmica.");

        /*************** EXPERIENCE ***************/
        $('#professional_1').text("Experiência Profissional");
        $('#professional_1_h5 ').text("2022 - o momento");
        $('#professional_1_p1').text("Atualmente atuo como Analista de Dados no grupo Americanas S.A. O grupo Americanas S.A. é o resultado da fusão entre as Lojas Americanas e a B2W. É dona das maiores marcas da Internet (Americanas.com, Submarino, Shoptime e SouBarato), com uma operação de marketplace, logística e fintech unidas a mais de 1700 mil lojas físicas em todo Brasil.");
        $('#professional_1_p2').text("Faço parte do time de Regionalização, cuja as responsabilidades estão na definição das regiões utilizadas nos cálculos de frete, logística de entrega e busca. O nosso objetivo é a constante busca pela melhoria dos prazos de entrega, utilizando modelos e ferramentas de georreferenciamento na clusterização de nossa demanda e otimização de nossos serviços.");

        $('#professional_2_em ').text("Unilotus Distribuidora de Alimentos Ltda.");
        $('#professional_2_p1 ').text("Fiz um projeto ETL para organizar os dados recebidos em um arquivo completamente desestruturado.");
        $('#professional_2_p2 ').text("Meu cliente costumava levar cerca de 5 horas por dia para classificar o arquivo pouco legível que recebia de seu fornecedor.");
        $('#professional_2_p3 ').text("Com o aplicativo desenvolvido, esse tempo caiu para menos de 1 minuto. A aplicação consiste em um sistema web desenvolvido em Python e Flask que recebe o arquivo .txt ou .xml, e após as transformações, retorna ao usuário um arquivo excel com os dados organizados com as colunas escolhidas pelo usuário.");

        $('#professional_3_em').text("Play Sistemas Inteligentes Ltda.");
        $('#professional_3_p1').text("Na Play Sistemas atuei em todas as etapas do projeto (end-to-end), desde a fase inicial - levantamento de requisitos, até a publicação final do sistema web. Utilizei as seguintes tecnologias: HTML, CSS3 e JavaScript para desenvolvimento Front-end; C#, ASP.NET, Entity Framework para desenvolvimento Back-end; PL/SQL para manipulação de banco de dados; Desenvolvimento de API para integração do sistema da empresa com máquinas industriais utilizando programação de baixo nível; Microsoft Azure para controle de versão e publicação do site em serviços de nuvem.");
        $('#professional_3_p2').text("Tive contato com otimização e algoritmos genéticos, migração de banco de dados e vários outros tópicos de computação avançada. No entanto, a maior lição que tive e que levo como lição foi: “Seja um especialista no negócio da empresa e um resolvedor de problemas”, e de fato, essas são qualidades essenciais para um profissional de TI.");


        /*************** COURSES ***************/
        $('#courses').text('Cursos');
        $('#courses_1_h4').text('ANÁLISE DE DADOS COM LINGUAGEM PYTHON');
        $('#courses_1_h5').text('(Em andamento)');
        $('#courses_1_em').text('DSA - Data Science Academy');
        $('#courses_1_p1').text('Curso 3/3 da Formação Analista de Dados da Data Science Academy');
        $('#courses_1_p2').text('Durante o treinamento os alunos vão adquirir habilidades fundamentais de um Analista de Dados: como tratar valores ausentes, como limpar e processar dados, como realizar análise estatística descritiva, como aplicar binarização e encoding de variáveis categóricas, engenharia de atributos e muito mais.');
        $('#courses_1_a').text('Ir até o curso');


        $('#courses_2_h4').text('ENGENHARIA DE DADOS COM HADOOP E SPARK');
        $('#courses_2_h5').text('Outubro 2022');
        $('#courses_2_em').text('DSA - Data Science Academy');
        $('#courses_2_p1').text('Curso 3/6 da Formação Cientista de Dados da Data Science Academy');
        $('#courses_2_p2').text('Este é um curso focado na Engenharia de Dados. Armazenar Big Data é um desafio, dadas as suas características: dados gerados em alta velocidade, alto volume e grande variedade. Este curso ensina como criar um cluster Hadoop, como configurar um cluster Hadoop, como aplicar técnicas de mapeamento/redução nos dados. Além disso, ainda mostra como criar um Data Hub com Hadoop e HBase e aplicar ETL para carregar dados Hadoop. Tópicos envolvidos: Hadoop, Cluster, ETL, Machine Learning, Spark, Amazon EMR, Data Mining.');
        $('#courses_2_a').text('Ir até o curso');


        $('#courses_3_h4').text('MICROSOFT POWER BI PARA DATA SCIENCE, VERSÃO 2.0');
        $('#courses_3_h5').text('Setembro  2022');
        $('#courses_3_em').text('DSA - Data Science Academy');
        $('#courses_3_p1').text('O curso aborda de maneira bastante abrangente conteúdos relacionados ao Power BI. Traz a construção de diversos dashboards interativos, conexão e extração dos dados a partir de Banco de Dados Relacionais e Não Relacionais, integração com linguagens de programação Python e R. Além disso, traz uma visão geral sobre a Plataforma Microsoft Power, com projetos utilizando Power BI Online, Power Apps, Power Automate e Power Virtual Agents.');
        courses_3_ul = "<li>Introdução ao Power BI</li><li>Modelagem, Relacionamento e DAX</li><li>Limpeza, Transformação, Séries Temporais, Agregação e Filtros</li><li>Gráficos, Mapas e Dashboards interativosli><li>Estatística fundamental</li><li>Linguagem R e Python</li><li>Power Automate, Power Virtual Agents e Power Apps</li>";
        $('#courses_3_ul').html(courses_3_ul);
        $('#courses_3_a').text('Ir até o curso');


        $('#courses_4_h4').text('DEPLOY DE MODELOS DE MACHINE LEARNING');
        $('#courses_4_h5').text('Julho 2022');
        $('#courses_4_em').text('DSA - Data Science Academy');
        $('#courses_4_p1').text('Curso 3/4 da Formação Engenheiro de Machine Learning da Data Science Academy');
        $('#courses_4_p2').text('Este curso é dedicado ao Deploy de modelos de Machine Learning. O curso aborda Ambiente em Nuvem AWS, Google Cloud Platform e Azure e como utilizar a usar o AWS SageMaker para criar uma API para modelos de ML. O deploy será feito com diferentes ferramentas para consumo local ou em nuvem, tais como TensorFlow, MLFlow, KubeFlow, MLeap, Spark MLLib e Scikit-Learn. E ainda Keras, PyTorch e o MxNet com Gluon, além de Databricks, Docker e Streamlit. Flask e Django também serão abordados neste curso.');
        courses_4_ul = "<li>AWS, GCP e Azure</li><li>AWS SageMaker</li><li>TensorFlow, MLFlow, KubeFlow</li><li>MLeap, Spark MLLib, Scikit-Learning</li><li>Keras, Pytorch, MXNet com Gluon</li><li>Databricks, Docker e Streamlit</li><li>Flask e Django</li>";
        $('#courses_4_ul').html(courses_4_ul);
        $('#courses_4_a').text('Ir até o curso');

        
        $('#courses_5_h4').text('BUSINESS ANALYTICS COM R E PYTHON');
        $('#courses_5_h5').text('Julho 2022');
        $('#courses_5_em').text('DSA - Data Science Academy');
        $('#courses_5_p1').text('Curso 5/6 da Formação Cientista de Dados da Data Science Academy');
        $('#courses_5_p2').text('Conhecimento de negócio é uma das habilidades principais do Cientista de Dados. O objetivo deste curso é aplicar técnicas analíticas em áreas de negócio como Marketing, Finanças e RH, coletando dados, definindo métricas, criando modelos e extraindo insights que gerem valor para as empresas e suportem as tomadas de decisões.');
        courses_5_ul = "<li>Análise preditiva</li><li>Marketing Analytics</li><li>RH Analytics</li><li>Financial Analytics</li><li>Social Network Analytics</li>";
        $('#courses_5_ul').html(courses_5_ul);
        $('#courses_5_a').text('Go to the course');


        $('#courses_6_h4').text('PROFISSÃO ANALISTA DE DADOS');
        $('#courses_6_h5').text('Julho 2022');
        $('#courses_6_em').text('EBAC - Escola Britânica de Artes Criativas');
        $('#courses_6_p1').text('Curso Online pela plataforma de ensino Escola Britânica de Artes Criativas e Tecnologia. O curso aborda desde o básico em Python, até tópicos avançados de Machine Learning, Trabalho em ambiente Nuvem, Big Data e Data Lake no AWS.');
        courses_6_ul = "<li>Análise de Dados</li><li>Machine Learning</li><li>Linguagem SQL</li><li>Visualizar Dados</li><li>Trabalhar com Big Data</li><li>Trabalhar em Equipe com Git e Github</li>";
        $('#courses_6_ul').html(courses_6_ul);
        $('#courses_6_a').text('Ir até o curso');
        
        $('#courses_7_h4').text('SOFT SKILLS - DESENVOLVENDO HABILIDADES COMPORTAMENTAIS');
        $('#courses_7_h5').text('Junho  2022');
        $('#courses_7_em').text('DSA - Data Science Academy');
        $('#courses_7_p1').text('Embora o conhecimento técnico seja fundamental para quem trabalha com tecnologia, habilidades comportamentais podem determinar o sucesso profissional. O curso aborda tópicos como: Comunicação Assertiva, Trabalho em Equipe, Ownership & Accountability, Criatividade, Metodologias Ágeis (SCRUM), Diversidade e Times Multidisciplinares.');
        $('#courses_7_p2').text('Curso disponível somente para quem adquiriu qualquer outro curso pago da plataforma.');
        $('#courses_7_a').text('Ir até o curso');


        $('#courses_8_h4').text('ANÁLISE ESTATÍSTICA E MODELAGEM PREDITIVA DE SÉRIES TEMPORAIS');
        $('#courses_8_h5').text('Junho 2022');
        $('#courses_8_em').text('DSA - Data Science Academy');
        $('#courses_8_p1').text('Este curso teve por objetivo apresentar e exemplificar de uma maneira detalhada todos os principais conceitos de Séries Temporais. Além disso, foram abordados os principais algoritmos de modelagem preditiva para esste tópico, tais como: modelos ARIMA, redes neurais profundas, bibliotecas desenvolvidas pela equipe do Facebook e da Amazon e muito mais.');
        $('#courses_8_p2').text('Curso disponível somente para quem adquiriu qualquer outro curso pago da plataforma.');
        courses_8_ul = '<li>Conceitos Básicos</li><li>Verificando Estacionariedade</li><li>Smoothing</li><li>Modelos ARMA, ARIMA, SARIMA</li><li>Facebook Prophet</li><li>Deep Learning com LSTM</li><li>Deep Learning com DeepAR</li>';
        $('#courses_8_ul').html(courses_8_ul);
        $('#courses_8_a').text('Ir até o curso');


        $('#courses_9_h4').text('VISUALIZAÇÃO DE DADOS E DESIGN DE DASHBOARDS');
        $('#courses_9_h5').text('Junho 2022');
        $('#courses_9_em').text('DSA - Data Science Academy');
        $('#courses_9_p1').text('Curso 6/6 da Formação Cientista de Dados da Data Science Academy');
        $('#courses_9_p2').text('Curso da Formação Cientista de Dados da Data Science Academy. Este é um curso que ensina o aluno a contar uma história a partir dos dados, usando técnicas de apresentação, design, dashboards e estratégias de visualização em diversas ferramentas. Contar a história por trás dos dados é uma habilidade que pode ser aprendida e praticada.');
        courses_9_ul = '<li>Técnicas de Apresentação</li><li>Design Thinking</li><li>Organização visual</li><li>Dashboard e Gráficos</li><li>Ferramentas de Visualização</li>';
        $('#courses_9_ul').html(courses_9_ul);
        $('#courses_9_a').text('Ir até o curso');


        $('#courses_10_h4').text('1º TORNEIO DE JOGOS EMPRESARIAIS - INOVA');
        $('#courses_10_h5').text('Abril 2022');
        $('#courses_10_em').text('Inova Prudente');
        $('#courses_10_p1').text("Com o objetivo de estimular o aprendizado de conceitos empresariais, além de gerar conexões entre os participantes, a Prefeitura de Presidente Prudente, através da Fundação Inova, lançou pela primeira vez na região, uma edição de um Torneio de Jogos Empresariais.");
        $('#courses_10_p2').text('O objetivo da competição foi permitir que os participantes simulem a gestão de uma empresa em um ambiente altamente competitivo e interativo, tomando diversas decisões do negócio com base em notícias, relatórios e gráficos gerenciais.');
        $('#courses_10_a').text('Ir até o curso');


        $('#courses_11_h4').text('BIG DATA REAL-TIME ANALYTICS COM PYTHON E SPARK');
        $('#courses_11_h5').text('Abril 2022');
        $('#courses_11_em').text('DSA - Data Science Academy');
        $('#courses_11_p1').text('Curso 2/6 da Formação Cientista de Dados da Data Science Academy');
        $('#courses_11_p2').text('O objetivo deste curso é trazer técnicas de análise de dados, em batch e em tempo real, com duas das principais ferramentas usadas por Cientistas de Dados: Linguagem Python e Apache Spark.');
        courses_11_ul = '<li>Introdução ao Apache Spark</li><li>Spark SQL</li><li>Spark pair RDD, Acumuladores e Broadcast</li><li>Introdução ao Spark Streaming</li><li>Algoritmos de Machine Learning utilizando MLlib: Naive Bayes, Decision Tree, Random Forest, Regressão, K-Means</li><li>Criação de sistemas de Recomendação</li>';
        $('#courses_11_ul').html(courses_11_ul);
        $('#courses_11_a').text('Ir até o curso');


        $('#courses_12_h4').text('FORMAÇÃO CIENTISTA DE DADOS COM PYTHON E R [2022]');
        $('#courses_12_h5').text('Fevereiro 2022');
        $('#courses_12_em').text('Udemy');
        $('#courses_12_p1').text('Curso completo sobre Data Science. Criando modelos preditivos com Deep Learning, RNNs e Series temporais. Conceitos de mineração de textos, grafos, gestão de projetos, banco de dados NoSQL, estatística básica e avançada e muito mais.');
        courses_12_ul = '<li>Introdução as linguagens Python e R</li><li>Limpeza, tratamento e Análise Exploratória dos Dados</li><li>Gráficos, Visualização e Dashboards</li><li>Estatística I e II</li><li>Regressão Linear, Classificação, Séries Temporais</li><li>Redes Neurais e Deep Learning</li><li>Teoria dos Grafos</li><li>SQL e NoSQL</li><li>Introdução ao Spark com Databricks</li>';
        $('#courses_12_ul').html(courses_12_ul);
        $('#courses_12_a').text('Ir até o curso');


        $('#courses_13_h4').text('MACHINE LEARNING');
        $('#courses_13_h5').text('Março 2022');
        $('#courses_13_em').text('DSA - Data Science Academy');
        $('#courses_13_p1').text('Curso 4/6 da Formação Cientista de Dados da Data Science Academy');
        $('#courses_13_p2').text('O objetivo deste curso é trazer a construção de modelos de Machine Learning. Além de estudar a teoria de aprendizagem de máquina, é abordado na prática como os algoritmos funcionam de diversos projetos.');
        courses_13_ul = '<li>Features Engineering com Variáveis Categóricas na Prática</li><li>Algoritmos: KNN, Naive Bayes, Regressão Linear, Regressão Logística, XGB, SVM, Decision Trees</li><li>Redução de Dimensionalidade com PCA</li><li>Processamento de Linguagem Natural</li><li>TensorFlow e PyTorch para Deep Learning</li><li>Deploy de um modelo de Machine Learning</li>';
        $('#courses_13_ul').html(courses_13_ul);
        $('#courses_13_a').text('Ir até o curso');


        $('#courses_14_h4').text('TENSORFLOW: MACHINE LEARNING E DEEP LEARNING COM PYTHON');
        $('#courses_14_h5').text('Fevereiro 2022');
        $('#courses_14_em').text('Udemy');
        $('#courses_14_p1').text('Aprenda na teoria e na prática como construir redes neurais artificiais para resolver problemas reais do dia.');
        courses_14_ul = '<li>Sintaxe Básica</li><li>Regressão e Classificação</li><li>Redes Neurais Artificiais, Convolucionais e Recorrentes</li><li>Autoencoders</li><li>Redes Adversariais Generativas (GANs)</li>';
        $('#courses_14_ul').html(courses_14_ul);
        $('#courses_14_a').text('Ir até o curso');


        $('#courses_15_h4').text('TENSORFLOW 2.0: UM COMPLETO SOBRE O NOVO TENSORFLOW');
        $('#courses_15_h5').text('Dezembro 2021');
        $('#courses_15_em').text('Udemy');
        $('#courses_15_p1').text('Um guia sobre as principais funcionalidades do Tensorflow 2.x. Implementações de Redes Neurais Artificiais, CNNs, Redes Neurais Recorrentes e outros projetos.');
        courses_15_ul = '<li>Introdução ao Tensorflow</li><li>Redes Neurais Artificiais, Convolucionais e Recorrentes</li><li>Transferência de Aprendizado e Fine Tunning</li><li>Aprendizado por Reforço</li><li>Tensorflow Lite</li>';
        $('#courses_15_ul').html(courses_15_ul);
        $('#courses_15_a').text('Ir até o curso');
        
        
        $('#courses_16_h4').text('RECONHECIMENTO DE FACES E DE OBJETOS COM PYTHON E DLIB');
        $('#courses_16_h5').text('Novembro  2021');
        $('#courses_16_em').text('Udemy');
        $('#courses_16_p1').text('O curso ensina a detectar faces utilizando as técnicas de haarcascade, HOG e redes neurais convolucionais (CNN).');
        courses_16_ul = '<li>Detecção de faces com Haarcascade</li><li>OpenCV</li><li>Algoritmos HOG, KNN, Yalesface e SVM</li><li>Bibliteca Dlib</li><li>Hog x CNN</li>';
        $('#courses_16_ul').html(courses_16_ul);
        $('#courses_16_a').text('Ir até o curso');
        
                
        $('#courses_17_h4').text('PYTHON FUNDAMENTOS PARA ANÁLISE DE DADOS');
        $('#courses_17_h5').text('Fevereiro 2021');
        $('#courses_17_em').text('DSA - Data Science Academy');
        $('#courses_17_p1').text('Este curso contempla os conceitos básicos e fundamentos da linguagem de programação Python. Além disso, o curso aborda as principais bibliotecas Python para análise de dados e projetos de Data Science.');
        courses_17_ul = '<li>Introdução ao Python</li><li>Principais pacotes para análises: Pandas, Numpy, Matplotlib, dentre outros.</li><li>Orientação a Objetos</li><li>Introdução ao Tensorflow</li><li>Introdução a Machine Learning</li><li>Introdução a Deep Learning</li><li>Web Scraping</li>';
        $('#courses_17_ul').html(courses_17_ul);
        $('#courses_17_a').text('Ir até o curso');


        $('#courses_18_h4').text('BIG DATA FUNDAMENTOS 2.0');
        $('#courses_18_h5').text('Fevereiro 2020');
        $('#courses_18_em').text('DSA - Data Science Academy');
        $('#courses_18_p1').text('No curso de Big Data Fundamentos é abordado de maneira teórica diversos conceitos sobre o Big Data,como ele é utilizado no ambiente corporativo e como está impactando o mundo atual.');
        $('#courses_18_a').text('Ir até o curso');


        $('#courses_19_h4').text('GIT E CONTRIBUIÇÕES PARA PROJETOS OPEN SOURCE UDEMY');
        $('#courses_19_h5').text('Junho 2019');
        $('#courses_19_em').text('Udemy');
        $('#courses_19_p1').text('Curso que abrange desde os conceitos mais básicos até os mais avançados sobre controle de versão, ferramentas como Git e GitHub, e como contribuir com projetos Open Source.');
        $('#courses_19_a').text('Ir até o curso');


        $('#courses_20_h4').text('CURSO DESENVOLVIMENTO WEB 2.0 COMPLETO 2018 PYTHON E DJANGO');
        $('#courses_20_h5').text('Abril 2019');
        $('#courses_20_em').text('Udemy');
        $('#courses_20_p1').text('O curso aborda conceitos teóricos sobre Web, desde o momento em que um usuário digita a URL no navegado até o momento em que o site/sistema carrga no browser. O curso traz diversos projetos práticos utilizando as linguagens de programação.');
        courses_20_ul = '<li>Teoria sobre Redes de Computadores</li><li>HTML e CSS </li><li>Javascript</li><li>Python e Django</li>';
        $('#courses_20_ul').html(courses_20_ul);
        $('#courses_20_a').text('Ir até o curso');

        $('#courses_21_h4').text('SQL PARA DATA SCIENCE');
        $('#courses_21_h5').text('Maio 2023');
        $('#courses_21_em').text('DSA - Data Science Academy');
        $('#courses_21_p1').text('Curso 3/3 da Formação Analista de Dados da Data Science Academy');
        $('#courses_21_p2').text('Curso que abrange desde o mais básico até níveis avançados de SQL focado na resolução de problemas de ciência de dados.');
        $('#courses_21_a').text('Ir até o curso');

        /*************** CONTACT ***************/
        $('#contact_address').text('Endere;o');
        $('#contact_phone').text('Telefone');


        /*************** OTHERS ***************/
        screen_effects();



    });
});