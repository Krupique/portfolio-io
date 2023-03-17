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
        var hero_span = `Eu sou <span class="typed" data-typed-items="Henrique Krupck, Analista de Dados, Engenheiro de Machine Learning, Cientista de DaDos"></span>`;
        $('#hero_h1').html(hero_span);
        $('#hero_p1').text("Analista de Dados, Engenheiro de Machine Learning, Cientista de Dados");


        /*************** ABOUT ***************/
        $('#about_p1').text('Cientista da computação comprometido em entregar valor e gerar insights por meio dos dados.');
        $('#about_p2').text('Tenho mais de dois anos de experiência profissional em projetos de end-to-end, oferecendo soluções de Inteligência Artificial para o setor da Indústria 4.0. Atualmente faço parte do time de Dados da 𝘼𝙢𝙚𝙧𝙞𝙘𝙖𝙣𝙖𝙨 𝙎𝘼, a maior empresa de e-commerce e varejo do Brasil.');


        /*************** SERVICES ***************/
        var services_div1_html = `<div id="services_div1" class="swiper-slide"><div class="services-block"><i class="fa-solid fa-briefcase fa-3x icon-color"></i><span>BUSINESS ANALYTICS</span><p id="services_p1" class="separator">A habilidade principal para se tornar um resolvedor de problemas é entender sobre o negócio da empresa, compreendendo as dores e necessidades dos gestores. Este é o meu principal objetivo e todos os meus projetos são orientados à resolução do problema de negócio utilizando conhecimento analítico e as ferramentas de tecnologia como meio.</p></div></div>`;
        var services_div2_html = `<div id="services_div2" class="swiper-slide"><div class="services-block"><i class="fa-solid fa-d fa-3x icon-color"></i><i class="fa-solid fa-pepper-hot fa-3x icon-color"></i><i class="fa-brands fa-docker fa-3x icon-color"></i></i><span>DJANGO, FLASK E DOCKER</span><p id="services_p2" class="separator">Principais frameworks Python para desenvolvimento de aplicações web. Possuo experiência com um projeto Freelance utilizando Flask e projetos desenvolvidos com Django. Docker é uma plataforma que permite a criação de ambientes virtuais isolados, muito utilizado atualmente.</p></div></div>`;
        var services_div3_html = `<div id="services_div3" class="swiper-slide"><div class="services-block"><i class="fab fa-python fa-3x icon-color"></i><i class="fas fa-c fa-3x icon-color"></i><span>PYTHON, C E C++</span><p id="services_p3" class="separator">Conhecimento avançado em Python com mais de quatro anos de experiência com a linguagem para resolução dos mais variados assuntos. Com projetos que vão desde visão computacional, criação de websites até projetos envolvendo big data, machine learning e análise de dados. Possuo projetos utilizando C e C++ para projetos que demandam mais performance computacional.</p></div></div>`;
        var services_div4_html = `<div id="services_div4" class="swiper-slide"><div class="services-block"><i class="fa-solid fa-database fa-3x icon-color"></i><span>PL/SQL</span><p id="services_p4" class="separator">Mais de dois anos de experiência profissional utilizando linguagem SQL para criação de procedures e views, consultas avançadas a partir de diversas fontes de dados, gravação de registros gerados por máquinas industriais e também para criação, alteração e deleção de tabelas e registros.</p></div></div>`;
        var services_div5_html = `<div id="services_div5" class="swiper-slide"><div class="services-block"><i class="fa-solid fa-cloud fa-3x icon-color"></i><i class="fa-brands fa-aws fa-3x icon-color"></i><span>COMPUTAÇÃO EM NUVEM</span><p id="services_p5" class="separator">Vivência com deploy de sistemas em ambientes nuvem utilizando Azure. Possuo projetos integrando os modelos de Machine Learning com Websites ou interação dos modelos via consumo de API hospedadas em ambientes Cloud como AWS, GCP e o próprio Azure.</p></div></div>`;
        var services_div6_html = `<div id="services_div6" class="swiper-slide"><div class="services-block"><i class="fas fa-feather-alt  fa-3x icon-color"></i><i class="far fa-star  fa-3x icon-color"></i><span>SPARK, HADOOP E AWS BIG DATA</span><p id="services_p6" class="separator">Focado em aprimorar as minhas habilidades para resolução de problemas que envolvem Big Data. Para isso, tenho projetos utilizando Hadoop, Spark e a utilização destas tecnologias em ambientes Cloud, principalmente AWS, com os serviços S3, SageMaker e EMR.</p></div></div>`;
        var services_div7_html = `<div id="services_div7" class="swiper-slide"><div class="services-block"><i class="fa-solid fa-chart-column fa-3x icon-color"></i><span>POWER BI E TABLEAU</span><p id="services_p7" class="separator">A maneira mais fácil de transmitir os insights obtidos são por meio dos dashboards interativos. Por isso também me especializei nas ferramentas e em técnicas que me possibilitam realizar uma apresentação dos resultados de maneira simples, visual e de fácil entendimento para o meu público.</p></div></div>`;
        var services_div8_html = `<div id="services_div8" class="swiper-slide"><div class="services-block"><i class="fa-solid fa-screwdriver-wrench fa-3x icon-color"></i><span>OUTRAS FERRAMENTAS</span><p id="services_p8" class="separator">Tenho vivência profissional e academica com outras ferramentas e linguagens, tais como: R, HTML 5, Css 3, JavaScript, .NET CORE, C#, Entity Framework e Java. E a utilização de Python para programação Back-end com Flask e Django.</p></div></div>`;
        var services_text = '<div class="container"><div class="services-slider swiper" data-aos="fade-up" data-aos-delay="100"><div class="swiper-wrapper">' + services_div1_html + services_div2_html + services_div3_html + services_div4_html + services_div5_html + services_div6_html + services_div7_html + services_div8_html + '</div><div class="swiper-pagination"></div></div></div>';
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


        $('#courses_2_h4').text('Data Engineering with Hadoop and Spark');
        $('#courses_2_h5').text('October 2022');
        $('#courses_2_em').text('DSA - Data Science Academy');
        $('#courses_2_p1').text('Course 3/3 of Data Science Academy Data Scientist Training');
        $('#courses_2_p2').text('This is a course focused on Data Engineering. Storing Big Data is a challenge, given its characteristics: data generated at high speed, high volume and great variety. This course teaches how to create a Hadoop cluster, how to configure a Hadoop cluster, how to apply mapping/reduction techniques on data. In addition, it also shows how to create a Data Hub with Hadoop and HBase and apply ETL to load Hadoop data. Topics involved: Hadoop, Cluster, ETL, Machine Learning, Spark, Amazon EMR, Data Mining.');
        $('#courses_2_a').text('Ir até o curso');


        $('#courses_3_h4').text('Microsoft Power BI for Data Science, Version 2.0');
        $('#courses_3_h5').text('September 2022');
        $('#courses_3_em').text('DSA - Data Science Academy');
        $('#courses_3_p1').text('The course covers content related to Power BI in a very comprehensive way. It brings the construction of several interactive dashboards, connection and extraction of data from Relational and Non-Relational Databases, integration with Python and R programming languages. In addition, it brings an overview of the Microsoft Power Platform, with projects using Power BI Online, Power Apps, Power Automate and Power Virtual Agents.');
        courses_3_ul = "<li>Introduction to Power BI</li><li>Modeling, Relationship and DAX</li><li>Cleaning, Transforming, Time Series, Aggregation and Filters</li><li>Interactive Charts, Maps and Dashboards</li><li>Fundamental statistics</li><li>R language and Python</li><li>Power Automate, Power Virtual Agents and Power Apps</li>";
        $('#courses_3_ul').html(courses_3_ul);
        $('#courses_3_a').text('Ir até o curso');


        $('#courses_4_h4').text('Deploying Machine Learning Models');
        $('#courses_4_h5').text('July 2022');
        $('#courses_4_em').text('DSA - Data Science Academy');
        $('#courses_4_p1').text('Course 3/4 of the Data Science Academy Machine Learning Engineer Training');
        $('#courses_4_p2').text('This course is dedicated to Deploying Machine Learning models. The course covers AWS Cloud Environment, Google Cloud Platform and Azure and how to use AWS SageMaker to create an API for ML models. The deployment will be done with different tools for local or cloud consumption, such as TensorFlow, MLFlow, KubeFlow, MLeap, Spark MLLib and Scikit-Learn. Plus Keras, PyTorch and MxNet with Gluon, as well as Databricks, Docker and Streamlit. Flask and Django will also be covered in this course.');
        courses_4_ul = "<li>AWS, GCP, and Azure</li><li>AWS SageMaker</li><li>TensorFlow, MLFlow, KubeFlow</li><li>MLeap, Spark MLLib, Scikit-Learning</li><li>Keras, Pytorch, MXNet with Gluon</li><li>Databricks, Docker and Streamlit</li><li>Flask and Django</li>";
        $('#courses_4_ul').html(courses_4_ul);
        $('#courses_4_a').text('Ir até o curso');


        $('#courses_5_h4').text('Business Analytics with R and Python');
        $('#courses_5_h5').text('July 2022');
        $('#courses_5_em').text('DSA - Data Science Academy');
        $('#courses_5_p1').text('Data Science Academy Data Scientist Training Course 5/6');
        $('#courses_5_p2').text('Business knowledge is one of the main skills of the Data Scientist. The objective of this course is to apply analytical techniques in business areas such as Marketing, Finance and HR, collecting data, defining metrics, creating models and extracting insights that generate value for companies and support decision-making.');
        courses_5_ul = "<li>Predictive analytics</li><li>Marketing Analytics</li><li>HR Analytics</li><li>Financial Analytics</li><li>Social Network Analytics</li>";
        $('#courses_5_ul').html(courses_5_ul);
        $('#courses_5_a').text('Ir até o curso');


        $('#courses_6_h4').text('Profession Data Analyst');
        $('#courses_6_h5').text('July 2022');
        $('#courses_6_em').text('EBAC - British School of the Creative Arts');
        $('#courses_6_p1').text('Online course by the British School of Creative Arts and Technology teaching platform. The course covers everything from basics in Python to advanced topics in Machine Learning, Working in the Cloud, Big Data and Data Lake on AWS.');
        courses_6_ul = "<li>Data Analysis</li><li>Machine Learning</li><li>SQL Language</li><li>Visualize Data</li><li>Work with Big Data</li><li>Team Work with Git and Github</li>";
        $('#courses_6_ul').html(courses_6_ul);
        $('#courses_6_a').text('Ir até o curso');
        
        
        $('#courses_7_h4').text('Soft Skills - Developing behavioral skills');
        $('#courses_7_h5').text('June 2022');
        $('#courses_7_em').text('DSA - Data Science Academy');
        $('#courses_7_p1').text('Although technical knowledge is essential for anyone working with technology, behavioral skills can determine professional success. The course covers topics such as: Assertive Communication, Teamwork, Ownership & Accountability, Creativity, Agile Methodologies (SCRUM), Diversity and Multidisciplinary Teams.');
        $('#courses_7_p2').text('Course available only for those who purchased any other paid course on the platform.');
        $('#courses_7_a').text('Ir até o curso');


        $('#courses_8_h4').text('Statistical Analysis and Predictive Modeling of Time Series');
        $('#courses_8_h5').text('June 2022');
        $('#courses_8_em').text('DSA - Data Science Academy');
        $('#courses_8_p1').text('This course aimed to present and exemplify in detail all the main concepts of Time Series. In addition, the main predictive modeling algorithms for this topic were covered, such as: ARIMA models, deep neural networks, libraries developed by the Facebook and Amazon team, and much more.');
        $('#courses_8_p2').text('Course available only for those who purchased any other paid course on the platform.');
        courses_8_ul = '<li>Basic Concepts</li><li>Checking Stationarity</li><li>Smoothing</li><li>ARMA, ARIMA, SARIMA templates</li><li>Facebook Prophet</li><li>Deep Learning with LSTM</li><li>Deep Learning with DeepAR</li>';
        $('#courses_8_ul').html(courses_8_ul);
        $('#courses_8_a').text('Ir até o curso');


        $('#courses_9_h4').text('Data Visualization and Dashboard Design');
        $('#courses_9_h5').text('June 2022');
        $('#courses_9_em').text('DSA - Data Science Academy');
        $('#courses_9_p1').text('Data Science Academy Data Scientist Training Course 6/6');
        $('#courses_9_p2').text('Data Science Academy Data Scientist Training Course. This is a course that teaches students to tell a story from data, using presentation techniques, design, dashboards and visualization strategies in various tools. Telling the story behind data is a skill that can be learned and practiced.');
        courses_9_ul = '<li>Presentation Techniques</li><li>Design Thinking</li><li>Visual organization</li><li>Dashboard and Charts</li><li>View Tools</li>';
        $('#courses_9_ul').html(courses_9_ul);
        $('#courses_9_a').text('Ir até o curso');


        $('#courses_10_h4').text('1st Business Games Tournament - INOVA');
        $('#courses_10_h5').text('April 2022');
        $('#courses_10_em').text('Inova Prudente');
        $('#courses_10_p1').text("With the aim of encouraging the learning of business concepts, in addition to generating connections between participants, the Mayor's Office of Presidente Prudente, through the Inova Foundation, launched for the first time in the region, an edition of a Business Games Tournament.");
        $('#courses_10_p2').text('The objective of the competition was to allow participants to simulate the management of a company in a highly competitive and interactive environment, making different business decisions based on news, reports and management charts.');
        $('#courses_10_a').text('Ir até o curso');


        $('#courses_11_h4').text('Big Data Real-Time Analytics with Python and Spark');
        $('#courses_11_h5').text('April 2022');
        $('#courses_11_em').text('DSA - Data Science Academy');
        $('#courses_11_p1').text('Course 2/6 of the Data Science Academy Data Scientist Training');
        $('#courses_11_p2').text('The objective of this course is to bring data analysis techniques, in batch and in real time, with two of the main tools used by Data Scientists: Python Language and Apache Spark.');
        courses_11_ul = '<li>Introduction to Apache Spark</li><li>Spark SQL</li><li>Spark pair RDD, Accumulators and Broadcast</li><li>Introduction to Spark Streaming</li><li>Machine Learning algorithms using MLlib: Naive Bayes, Decision Tree, Random Forest, Regression, K-Means</li><li>Creation of Recommendation Systems</li>';
        $('#courses_11_ul').html(courses_11_ul);
        $('#courses_11_a').text('Ir até o curso');


        $('#courses_12_h4').text('Data Scientist Training with Python and R [2022]');
        $('#courses_12_h5').text('February 2022');
        $('#courses_12_em').text('Udemy');
        $('#courses_12_p1').text('Complete course on Data Science. Creating predictive models with Deep Learning, RNNs and Time Series. Concepts of text mining, graphs, project management, NoSQL database, basic and advanced statistics and much more.');
        courses_12_ul = '<li>Introduction to Python and R languages</li><li>Cleaning, treatment and Exploratory Analysis of Data</li><li>Graphics, Visualization and Dashboards</li><li>Statistics I and II</li><li>Linear Regression, Classification, Time Series</li><li>Neural Networks and Deep Learning</li><li>Graph Theory</li><li>SQL and NoSQL</li><li>Introduction to Spark with Databricks</li>';
        $('#courses_12_ul').html(courses_12_ul);
        $('#courses_12_a').text('Ir até o curso');


        $('#courses_13_h4').text('Machine Learning');
        $('#courses_13_h5').text('March 2022');
        $('#courses_13_em').text('DSA - Data Science Academy');
        $('#courses_13_p1').text('Data Science Academy Data Scientist Training Course 4/6');
        $('#courses_13_p2').text('The objective of this course is to bring the construction of Machine Learning models. In addition to studying machine learning theory, it is covered in practice how algorithms work in different projects.');
        courses_13_ul = '<li>Features Engineering with Categorical Variables in Practice</li><li>Algorithms: KNN, Naive Bayes, Linear Regression, Logistic Regression, XGB, SVM, Decision Trees</li><li>Dimensionality Reduction with PCA</li><li>Natural Language Processing</li><li>TensorFlow and PyTorch for Deep Learning</li><li>Deploying a Machine Learning model</li>';
        $('#courses_13_ul').html(courses_13_ul);
        $('#courses_13_a').text('Ir até o curso');


        $('#courses_14_h4').text('TensorFlow: Machine Learning and Deep Learning with Python');
        $('#courses_14_h5').text('February 2022');
        $('#courses_14_em').text('Udemy');
        $('#courses_14_p1').text('Learn in theory and practice how to build artificial neural networks to solve real everyday problems.');
        courses_14_ul = '<li>Basic Syntax</li><li>Regression and Classification</li><li>Artificial, Convolutional and Recurrent Neural Networks</li><li>Autoencoders</li><li>Generative Adversarial Networks (GANs) </li>';
        $('#courses_14_ul').html(courses_14_ul);
        $('#courses_14_a').text('Ir até o curso');


        $('#courses_15_h4').text('Tensorflow 2.0: A Complete About the New Tensorflow');
        $('#courses_15_h5').text('December 2021');
        $('#courses_15_em').text('Udemy');
        $('#courses_15_p1').text('A guide to the main features of Tensorflow 2.x. Implementations of Artificial Neural Networks, CNNs, Recurrent Neural Networks and other projects.');
        courses_15_ul = '<li>Introduction to Tensorflow</li><li>Artificial, Convolutional and Recurrent Neural Networks</li><li>Transfer Learning and Fine Tuning</li><li>Reinforcement Learning</li><li> Tensorflow Lite</li>';
        $('#courses_15_ul').html(courses_15_ul);
        $('#courses_15_a').text('Ir até o curso');
        
        
        $('#courses_16_h4').text('Face and Object Recognition with Python and Dlib');
        $('#courses_16_h5').text('November 2021');
        $('#courses_16_em').text('Udemy');
        $('#courses_16_p1').text('The course teaches how to detect faces using haarcascade, HOG and convolutional neural networks (CNN) techniques.');
        courses_16_ul = '<li>Face detection with Haarcascade</li><li>OpenCV</li><li>HOG, KNN, Yalesface and SVM algorithms</li><li>Dlib library</li><li>Hog x CNN </li>';
        $('#courses_16_ul').html(courses_16_ul);
        $('#courses_16_a').text('Ir até o curso');
        
                
        $('#courses_17_h4').text('Python Fundamentals for Data Analysis');
        $('#courses_17_h5').text('February 2021');
        $('#courses_17_em').text('DSA - Data Science Academy');
        $('#courses_17_p1').text('This course covers the basic concepts and fundamentals of the Python programming language. In addition, the course covers the main Python libraries for data analysis and Data Science projects.');
        courses_17_ul = '<li>Introduction to Python</li><li>Main packages for analysis: Pandas, Numpy, Matplotlib, among others.</li><li>Object Orientation</li><li>Introduction to Tensorflow</li ><li>Introduction to Machine Learning</li><li>Introduction to Deep Learning</li><li>Web Scraping</li>';
        $('#courses_17_ul').html(courses_17_ul);
        $('#courses_17_a').text('Ir até o curso');


        $('#courses_18_h4').text('Big Data Fundamentals 2.0');
        $('#courses_18_h5').text('February 2020');
        $('#courses_18_em').text('DSA - Data Science Academy');
        $('#courses_18_p1').text('The Big Data Fundamentals course theoretically addresses several concepts about Big Data, how it is used in the corporate environment and how it is impacting the world today.');
        $('#courses_18_a').text('Ir até o curso');


        $('#courses_19_h4').text('Git and contributions to Open Source projects Udemy');
        $('#courses_19_h5').text('June 2019');
        $('#courses_19_em').text('Udemy');
        $('#courses_19_p1').text('Course that covers from the most basic concepts to the most advanced about version control, tools like Git and GitHub, and how to contribute to Open Source projects.');
        $('#courses_19_a').text('Ir até o curso');


        $('#courses_20_h4').text('Complete web 2.0 development course 2018 Python and Django');
        $('#courses_20_h5').text('April 2019');
        $('#courses_20_em').text('Udemy');
        $('#courses_20_p1').text('The course addresses theoretical concepts about the Web, from the moment a user types the URL into the browser until the moment the site/system loads in the browser. The course brings several practical projects using the programming languages');
        courses_20_ul = '<li>Computer Network Theory</li><li>HTML and CSS </li><li>Javascript</li><li>Python and Django</li>';
        $('#courses_20_ul').html(courses_20_ul);
        $('#courses_20_a').text('Ir até o curso');

        /*************** CONTACT ***************/
        $('#contact_address').text('Address');
        $('#contact_phone').text('Phone');


        /*************** OTHERS ***************/
        screen_effects();



    });
});