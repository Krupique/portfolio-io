$(document).ready(function(){

    flagLanguage = 'USA';
    var btnUSA = $('#flagUSA');
    
    $(btnUSA).on('click', function(e){

        /*************** HEADER ***************/
        $('#header_about').text('About');
        $('#header_portfolio').text('Portfolio');
        $('#header_blog').text('Blog');
        $('#header_resume').text('Summary');
        $('#header_contact').text('Contact');


        /*************** HERO ***************/
        /* Pensar se vale a pena focar nisso*/
        var hero_span = `I'm <span class="typed" data-typed-items="Henrique Krupck, Data Scientist, AI Specialist, Machine Learning Engineer"></span>`;
        $('#hero_h1').html(hero_span);
        $('#hero_p1').text("Data Scientist, AI Specialist, Machine Learning Engineer");


        /*************** ABOUT ***************/
        $('#about_p1').text('Computer Scientist committed to generating value and insights through data.');
        $('#about_p2').text('With more than 4 years of professional experience, including two years in the 4.0 industry and others in the retail and e-commerce sectors, I focus on problem-solving. Currently, I am part of the Pricing team at Americanas, the largest retailer in Brazil.');


        /*************** SERVICES ***************/
        var services_div1_html = `<div id="services_div1" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/python_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/tensorflow_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/pytorch_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/gpt.png" width="23%"></i><span>AI TOOLS AND FRAMEWORKS</span><p id="services_p3" class=" separator">Four years of experience with Python and building AI and Machine Learning models with Scikit Learn, Tensorflow, Pytorch and others.</p></div></div>`;
        var services_div2_html = `<div id="services_div2" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/gcp_logo.png" width="25%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/gcp_bigquery_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/gcp_cloud_ml_logo.jpg" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/gcp_cloud_functions_logo.jpg" width="20%"></i><span>GOOGLE CLOUD COMPUTING</span><p id="services_p5" class="separator">Two years using GCP services such as BigQuery, Cloud Functions, Vertex AI, and Google Machine Learning to execute company projects.</p></div></div>`;
        var services_div3_html = `<div id="services_div3" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/aws_logo.png" width="24%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/aws_lambda_logo.jpg" width="17%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/aws_s3_logo.png" width="17%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/aws_ec2_logo.png" width="17%"></i><span>AMAZON WEB SERVICES</span><p id="services_p5" class="separator">One year of experience deploying machine learning models using AWS services.</p></div></div>`;
        var services_div4_html = `<div id="services_div4" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/kubernetes.png" width="19%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/docker.png" width="21%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/apache_spark_logo.png" width="25%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/airflow_logo.png" width="17%"></i><span>DATA ENGINEERING TOOLS</span><p id="services_p2" class="separator">Two years of experience with data engineering tools for data ingestion, organization, and management of data flow using Airflow, Docker, Kubernetes and Spark.</p></div></div>`;
        var services_div5_html = `<div id="services_div5" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/excel_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/power_bi.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/looker_studio_logo.png" width="15%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/tableau_logo.png" width="20%"></i><span>BUSINESS ANALYTICS</span><p id="services_p1" class="separator">Experience with analysis and visualization tools to communicate and present results to both technical and non-technical teams.</p></div></div>`;
        var services_div6_html = `<div id="services_div6" class="swiper-slide"><div class="services-block"><i style="margin-right: 2%;"><img src="assets/img/icons/rust_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/cpp_logo.png" width="20%"></i><i style="margin-right: 2%;"><img src="assets/img/icons/java_logo.png" width="18%"></i><span>OTHER LANGUAGES</span><p id="services_p5" class="separator">Extensive knowledge in other programming languages for various purposes, with a focus on performance, such as C, C++, Rust, and Java.</p></div></div>`;
        var services_text = '<div class="container"><div class="services-slider swiper" data-aos="fade-up" data-aos-delay="100"><div class="swiper-wrapper">' + services_div1_html + services_div2_html + services_div3_html + services_div4_html + services_div5_html + services_div6_html + '</div><div class="swiper-pagination"></div></div></div>';
        $('#services').html(services_text);
        
        /*************** PORTFOLIO ***************/
        $('#portfolio_h2').text('PORTFOLIO');
        
        /*************** BLOG ***************/
        $('#tutorial_p1_1').text('VIRTUALBOX TUTORIAL PART 1');
        $('#tutorial_p1_2').text('How to install and configure Linux in a virtual machine part 1/3');

        $('#tutorial_p2_1').text('UBUNTU TUTORIAL PART 2');
        $('#tutorial_p2_2').text('How to install and configure Linux in a virtual machine part 2/3');
        
        $('#tutorial_p3_1').text('CENTOS TUTORIAL PART 3');     
        $('#tutorial_p3_2').text('How to install and configure Linux in a virtual machine part 3/3');
        
        $('#tutorial_p4_1').text('INSTALLATION AND CONFIGURATION OF HADOOP');
        $('#tutorial_p4_2').text('Tutorial on how to install and configure Hadoop in a Pseudo-Distributed manner in a VM.');
        
        $('#tutorial_p5_1').text('INSTALLING AND CONFIGURING ANACONDA ON LINUX');
        $('#tutorial_p5_2').text('Tutorial on how to install and configure Anaconda Navigator on Linux with the Ubuntu distribution.');
        
        $('#tutorial_p6_1').text('INSTALLING AND CONFIGURING VS CODE ON LINUX');
        $('#tutorial_p6_2').text('Tutorial on how to install and configure Visual Studio Code on Linux (CentOS and Ubuntu).');
        
        $('#tutorial_p7_1').text('OUTLIER DETECTION');
        $('#tutorial_p7_2').text('Outlier Detection using Univariate and Multivariate Analysis techniques');
        
        $('#tutorial_p8_1').text('HADOOP MAP REDUCE');
        $('#tutorial_p8_2').text('Hadoop Map Reduce: What it is, its architecture and how it is implemented in practice');

        $('#tutorial_p9_1').text('A DEEP DIVE INTO TRANSFORMERS ARCHITECTURE');
        $('#tutorial_p9_2').text('Attention is All You Need');

        /*************** RESUME ***************/
        $('#resume_title').text("Summary");
        $('#resume_p1').text("For two years, I was a member of a company specializing in Industry 4.0 services for packaging companies. During this time, I worked as a Full Stack developer and was also responsible for managing data from industrial machines. I actively participated in a team that developed an intelligent system capable of collecting data from machines, to use artificial intelligence to create and to optimize both the production and dispatch queues, and additionally, the system included all the functionalities of an APS system.");
        $('#resume_p2').text("Currently, I am a Data Scientist and Engineer at Americanas, working on data management, development, and deployment of Machine Learning and Artificial Intelligence models for the Pricing team. Our focus is on setting prices for products in physical stores, aiming to optimize sales and maximize profits.");
        $('#resume_p3').text("As an individual, I always strive to give my best in whatever I do. I believe that offering solutions before complaining or criticizing is an important step in changing the world around you and making a difference.");
        $('#resume_p4').text("I am passionate about two-wheeled adventures, a fan of Chopin and playing his compositions on the piano, a bodybuilder, and a hobbyist cook in my spare time.");
    

        /*************** EDUCATION ***************/
        $('#education').text("Education");
        $('#education_h1').text("Bachelor of Computer Science");
        $('#education_em').text("University of West Paulista, Presidente Prudente, SP");
        $('#education_p1').text("During college, I participated in programming marathons, hackathons, and various events in the field of computer science.");
        $('#education_p2').text("My graduation project focused on Computer Vision, where I applied the use of Artificial Intelligence to identify and monitor individuals through video and detect movements that could indicate a potential criminal act.");
        var link_article = '<em><a target="_blank" id="education_a1" href="assets/docs/ArtigoFinal.pdf">Use of Deep Learning applied in the recognition of human actions from high resolution videos in order to identify suspicious movements</a></em>';
        $('#education_p3').html("You can read my scientific article here: " + link_article);
        $('#education_l1').text("Participation in several SBC programming marathons;");
        $('#education_l2').text("Participation in events promoted by the faculty such as Lectures, Short Courses, Hackathons, etc.;");
        $('#education_l3').text("Collaboration in several voluntary actions during my academic life.");

        /*************** EXPERIENCE ***************/
        $('#professional_1').text("Professional Experience");
        $('#professional_1_h5 ').text("2022 - current");
        $('#professional_1_p1').text("I currently work as a Data Scientist and Engineer at Americanas S.A. Americanas S.A. is the result of the merger between Lojas Americanas and B2W. It owns the biggest brands on the Internet (Americanas.com, Submarino, Shoptime and SouBarato), with a marketplace, logistics and fintech operation linked to more than 1700 physical stores throughout Brazil.");
        $('#professional_1_p2').text("I work on data management, development, and deployment of Machine Learning and Artificial Intelligence models for the Pricing team. Our focus is on setting prices for products in physical stores, aiming to optimize sales and maximize profits.");

        $('#professional_2_em ').text("Unilotus Food Distributor Ltd.");
        $('#professional_2_p1 ').text("I developed an ETL project to organize data received in a completely unstructured file. Previously, my client spent about 5 hours per day sorting through the unreadable file received from their supplier. With the developed application, this time has been reduced to less than 1 minute.");
        $('#professional_2_p2 ').text("The application is a web system developed in Python and Flask that receives either a .txt or .xml file. After transformations, it returns to the user an Excel file with the data organized into columns chosen by the user.");

        $('#professional_3_em').text("Play Intelligent Systems Ltd.");
        $('#professional_3_p1').text("At Play Sistemas, I worked on all stages of the project (end-to-end), from the initial phase - requirements gathering, to the final deployment of the web system. I used the following technologies: HTML, CSS3, and JavaScript for Front-end development; C#, ASP.NET, Entity Framework for Back-end development; PL/SQL for database manipulation; Development of APIs for integration of the company's system with industrial machines using low-level programming; Microsoft Azure for version control and website deployment on cloud services.");
        $('#professional_3_p2').text(`I worked with optimization and genetic algorithms, database migration, and various other topics in advanced computing. However, the most valuable lesson I learned and carry forward was: "Be an expert in the company's business and a problem solver," and indeed, these are essential qualities for an IT professional.`);


        /*************** COURSES ***************/
        $('#courses').text('Courses');
        $('#courses_1_h4').text('Data Analysis with Python');
        $('#courses_1_h5').text('July 2023');
        $('#courses_1_em').text('DSA - Data Science Academy');
        $('#courses_1_p1').text('Course 3/3 of the Data Science Academy Data Analyst Training');
        $('#courses_1_p2').text('During the training students will acquire fundamental skills of a Data Analyst: how to handle missing values, how to clean and process data, how to perform descriptive statistical analysis, how to apply binarization and encoding of categorical variables, attribute engineering and much more.');
        $('#courses_1_a').text('Go to the course');


        $('#courses_2_h4').text('Data Engineering with Hadoop and Spark');
        $('#courses_2_h5').text('October 2022');
        $('#courses_2_em').text('DSA - Data Science Academy');
        $('#courses_2_p1').text('Course 3/3 of Data Science Academy Data Scientist Training');
        $('#courses_2_p2').text('This is a course focused on Data Engineering. Storing Big Data is a challenge, given its characteristics: data generated at high speed, high volume and great variety. This course teaches how to create a Hadoop cluster, how to configure a Hadoop cluster, how to apply mapping/reduction techniques on data. In addition, it also shows how to create a Data Hub with Hadoop and HBase and apply ETL to load Hadoop data. Topics involved: Hadoop, Cluster, ETL, Machine Learning, Spark, Amazon EMR, Data Mining.');
        $('#courses_2_a').text('Go to the course');


        $('#courses_3_h4').text('Microsoft Power BI for Data Science, Version 2.0');
        $('#courses_3_h5').text('September 2022');
        $('#courses_3_em').text('DSA - Data Science Academy');
        $('#courses_3_p1').text('The course covers content related to Power BI in a very comprehensive way. It brings the construction of several interactive dashboards, connection and extraction of data from Relational and Non-Relational Databases, integration with Python and R programming languages. In addition, it brings an overview of the Microsoft Power Platform, with projects using Power BI Online, Power Apps, Power Automate and Power Virtual Agents.');
        courses_3_ul = "<li>Introduction to Power BI</li><li>Modeling, Relationship and DAX</li><li>Cleaning, Transforming, Time Series, Aggregation and Filters</li><li>Interactive Charts, Maps and Dashboards</li><li>Fundamental statistics</li><li>R language and Python</li><li>Power Automate, Power Virtual Agents and Power Apps</li>";
        $('#courses_3_ul').html(courses_3_ul);
        $('#courses_3_a').text('Go to the course');


        $('#courses_4_h4').text('Deploying Machine Learning Models');
        $('#courses_4_h5').text('July 2022');
        $('#courses_4_em').text('DSA - Data Science Academy');
        $('#courses_4_p1').text('Course 3/4 of the Data Science Academy Machine Learning Engineer Training');
        $('#courses_4_p2').text('This course is dedicated to Deploying Machine Learning models. The course covers AWS Cloud Environment, Google Cloud Platform and Azure and how to use AWS SageMaker to create an API for ML models. The deployment will be done with different tools for local or cloud consumption, such as TensorFlow, MLFlow, KubeFlow, MLeap, Spark MLLib and Scikit-Learn. Plus Keras, PyTorch and MxNet with Gluon, as well as Databricks, Docker and Streamlit. Flask and Django will also be covered in this course.');
        courses_4_ul = "<li>AWS, GCP, and Azure</li><li>AWS SageMaker</li><li>TensorFlow, MLFlow, KubeFlow</li><li>MLeap, Spark MLLib, Scikit-Learning</li><li>Keras, Pytorch, MXNet with Gluon</li><li>Databricks, Docker and Streamlit</li><li>Flask and Django</li>";
        $('#courses_4_ul').html(courses_4_ul);
        $('#courses_4_a').text('Go to the course');


        $('#courses_5_h4').text('Business Analytics with R and Python');
        $('#courses_5_h5').text('July 2022');
        $('#courses_5_em').text('DSA - Data Science Academy');
        $('#courses_5_p1').text('Data Science Academy Data Scientist Training Course 5/6');
        $('#courses_5_p2').text('Business knowledge is one of the main skills of the Data Scientist. The objective of this course is to apply analytical techniques in business areas such as Marketing, Finance and HR, collecting data, defining metrics, creating models and extracting insights that generate value for companies and support decision-making.');
        courses_5_ul = "<li>Predictive analytics</li><li>Marketing Analytics</li><li>HR Analytics</li><li>Financial Analytics</li><li>Social Network Analytics</li>";
        $('#courses_5_ul').html(courses_5_ul);
        $('#courses_5_a').text('Go to the course');


        $('#courses_6_h4').text('Profession Data Analyst');
        $('#courses_6_h5').text('July 2022');
        $('#courses_6_em').text('EBAC - British School of the Creative Arts');
        $('#courses_6_p1').text('Online course by the British School of Creative Arts and Technology teaching platform. The course covers everything from basics in Python to advanced topics in Machine Learning, Working in the Cloud, Big Data and Data Lake on AWS.');
        courses_6_ul = "<li>Data Analysis</li><li>Machine Learning</li><li>SQL Language</li><li>Visualize Data</li><li>Work with Big Data</li><li>Team Work with Git and Github</li>";
        $('#courses_6_ul').html(courses_6_ul);
        $('#courses_6_a').text('Go to the course');
        
        
        $('#courses_7_h4').text('Soft Skills - Developing behavioral skills');
        $('#courses_7_h5').text('June 2022');
        $('#courses_7_em').text('DSA - Data Science Academy');
        $('#courses_7_p1').text('Although technical knowledge is essential for anyone working with technology, behavioral skills can determine professional success. The course covers topics such as: Assertive Communication, Teamwork, Ownership & Accountability, Creativity, Agile Methodologies (SCRUM), Diversity and Multidisciplinary Teams.');
        $('#courses_7_p2').text('Course available only for those who purchased any other paid course on the platform.');
        $('#courses_7_a').text('Go to the course');


        $('#courses_8_h4').text('Statistical Analysis and Predictive Modeling of Time Series');
        $('#courses_8_h5').text('June 2022');
        $('#courses_8_em').text('DSA - Data Science Academy');
        $('#courses_8_p1').text('This course aimed to present and exemplify in detail all the main concepts of Time Series. In addition, the main predictive modeling algorithms for this topic were covered, such as: ARIMA models, deep neural networks, libraries developed by the Facebook and Amazon team, and much more.');
        $('#courses_8_p2').text('Course available only for those who purchased any other paid course on the platform.');
        courses_8_ul = '<li>Basic Concepts</li><li>Checking Stationarity</li><li>Smoothing</li><li>ARMA, ARIMA, SARIMA models</li><li>Facebook Prophet</li><li>Deep Learning with LSTM</li><li>Deep Learning with DeepAR</li>';
        $('#courses_8_ul').html(courses_8_ul);
        $('#courses_8_a').text('Go to the course');


        $('#courses_9_h4').text('Data Visualization and Dashboard Design');
        $('#courses_9_h5').text('June 2022');
        $('#courses_9_em').text('DSA - Data Science Academy');
        $('#courses_9_p1').text('Data Science Academy Data Scientist Training Course 6/6');
        $('#courses_9_p2').text('Data Science Academy Data Scientist Training Course. This is a course that teaches students to tell a story from data, using presentation techniques, design, dashboards and visualization strategies in various tools. Telling the story behind data is a skill that can be learned and practiced.');
        courses_9_ul = '<li>Presentation Techniques</li><li>Design Thinking</li><li>Visual organization</li><li>Dashboard and Charts</li><li>View Tools</li>';
        $('#courses_9_ul').html(courses_9_ul);
        $('#courses_9_a').text('Go to the course');


        $('#courses_10_h4').text('1st Business Games Tournament - INOVA');
        $('#courses_10_h5').text('April 2022');
        $('#courses_10_em').text('Inova Prudente');
        $('#courses_10_p1').text("With the aim of encouraging the learning of business concepts, in addition to generating connections between participants, the Mayor's Office of Presidente Prudente, through the Inova Foundation, launched for the first time in the region, an edition of a Business Games Tournament.");
        $('#courses_10_p2').text('The objective of the competition was to allow participants to simulate the management of a company in a highly competitive and interactive environment, making different business decisions based on news, reports and management charts.');
        $('#courses_10_a').text('Go to the course');


        $('#courses_11_h4').text('Big Data Real-Time Analytics with Python and Spark');
        $('#courses_11_h5').text('April 2022');
        $('#courses_11_em').text('DSA - Data Science Academy');
        $('#courses_11_p1').text('Course 2/6 of the Data Science Academy Data Scientist Training');
        $('#courses_11_p2').text('The objective of this course is to bring data analysis techniques, in batch and in real time, with two of the main tools used by Data Scientists: Python Language and Apache Spark.');
        courses_11_ul = '<li>Introduction to Apache Spark</li><li>Spark SQL</li><li>Spark pair RDD, Accumulators and Broadcast</li><li>Introduction to Spark Streaming</li><li>Machine Learning algorithms using MLlib: Naive Bayes, Decision Tree, Random Forest, Regression, K-Means</li><li>Creation of Recommendation Systems</li>';
        $('#courses_11_ul').html(courses_11_ul);
        $('#courses_11_a').text('Go to the course');


        $('#courses_12_h4').text('Data Scientist Training with Python and R [2022]');
        $('#courses_12_h5').text('February 2022');
        $('#courses_12_em').text('Udemy');
        $('#courses_12_p1').text('Complete course on Data Science. Creating predictive models with Deep Learning, RNNs and Time Series. Concepts of text mining, graphs, project management, NoSQL database, basic and advanced statistics and much more.');
        courses_12_ul = '<li>Introduction to Python and R languages</li><li>Cleaning, treatment and Exploratory Analysis of Data</li><li>Graphics, Visualization and Dashboards</li><li>Statistics I and II</li><li>Linear Regression, Classification, Time Series</li><li>Neural Networks and Deep Learning</li><li>Graph Theory</li><li>SQL and NoSQL</li><li>Introduction to Spark with Databricks</li>';
        $('#courses_12_ul').html(courses_12_ul);
        $('#courses_12_a').text('Go to the course');


        $('#courses_13_h4').text('Machine Learning');
        $('#courses_13_h5').text('March 2022');
        $('#courses_13_em').text('DSA - Data Science Academy');
        $('#courses_13_p1').text('Data Science Academy Data Scientist Training Course 4/6');
        $('#courses_13_p2').text('The objective of this course is to bring the construction of Machine Learning models. In addition to studying machine learning theory, it is covered in practice how algorithms work in different projects.');
        courses_13_ul = '<li>Features Engineering with Categorical Variables in Practice</li><li>Algorithms: KNN, Naive Bayes, Linear Regression, Logistic Regression, XGB, SVM, Decision Trees</li><li>Dimensionality Reduction with PCA</li><li>Natural Language Processing</li><li>TensorFlow and PyTorch for Deep Learning</li><li>Deploying a Machine Learning model</li>';
        $('#courses_13_ul').html(courses_13_ul);
        $('#courses_13_a').text('Go to the course');


        $('#courses_14_h4').text('TensorFlow: Machine Learning and Deep Learning with Python');
        $('#courses_14_h5').text('February 2022');
        $('#courses_14_em').text('Udemy');
        $('#courses_14_p1').text('Learn in theory and practice how to build artificial neural networks to solve real everyday problems.');
        courses_14_ul = '<li>Basic Syntax</li><li>Regression and Classification</li><li>Artificial, Convolutional and Recurrent Neural Networks</li><li>Autoencoders</li><li>Generative Adversarial Networks (GANs) </li>';
        $('#courses_14_ul').html(courses_14_ul);
        $('#courses_14_a').text('Go to the course');


        $('#courses_15_h4').text('Tensorflow 2.0: A Complete About the New Tensorflow');
        $('#courses_15_h5').text('December 2021');
        $('#courses_15_em').text('Udemy');
        $('#courses_15_p1').text('A guide to the main features of Tensorflow 2.x. Implementations of Artificial Neural Networks, CNNs, Recurrent Neural Networks and other projects.');
        courses_15_ul = '<li>Introduction to Tensorflow</li><li>Artificial, Convolutional and Recurrent Neural Networks</li><li>Transfer Learning and Fine Tuning</li><li>Reinforcement Learning</li><li> Tensorflow Lite</li>';
        $('#courses_15_ul').html(courses_15_ul);
        $('#courses_15_a').text('Go to the course');
        
        
        $('#courses_16_h4').text('Face and Object Recognition with Python and Dlib');
        $('#courses_16_h5').text('November 2021');
        $('#courses_16_em').text('Udemy');
        $('#courses_16_p1').text('The course teaches how to detect faces using haarcascade, HOG and convolutional neural networks (CNN) techniques.');
        courses_16_ul = '<li>Face detection with Haarcascade</li><li>OpenCV</li><li>HOG, KNN, Yalesface and SVM algorithms</li><li>Dlib library</li><li>Hog x CNN </li>';
        $('#courses_16_ul').html(courses_16_ul);
        $('#courses_16_a').text('Go to the course');
        
                
        $('#courses_17_h4').text('Python Fundamentals for Data Analysis');
        $('#courses_17_h5').text('February 2021');
        $('#courses_17_em').text('DSA - Data Science Academy');
        $('#courses_17_p1').text('This course covers the basic concepts and fundamentals of the Python programming language. In addition, the course covers the main Python libraries for data analysis and Data Science projects.');
        courses_17_ul = '<li>Introduction to Python</li><li>Main packages for analysis: Pandas, Numpy, Matplotlib, among others.</li><li>Object Orientation</li><li>Introduction to Tensorflow</li ><li>Introduction to Machine Learning</li><li>Introduction to Deep Learning</li><li>Web Scraping</li>';
        $('#courses_17_ul').html(courses_17_ul);
        $('#courses_17_a').text('Go to the course');


        $('#courses_18_h4').text('Big Data Fundamentals 2.0');
        $('#courses_18_h5').text('February 2020');
        $('#courses_18_em').text('DSA - Data Science Academy');
        $('#courses_18_p1').text('The Big Data Fundamentals course theoretically addresses several concepts about Big Data, how it is used in the corporate environment and how it is impacting the world today.');
        $('#courses_18_a').text('Go to the course');


        $('#courses_19_h4').text('Git and contributions to Open Source projects Udemy');
        $('#courses_19_h5').text('June 2019');
        $('#courses_19_em').text('Udemy');
        $('#courses_19_p1').text('Course that covers from the most basic concepts to the most advanced about version control, tools like Git and GitHub, and how to contribute to Open Source projects.');
        $('#courses_19_a').text('Go to the course');


        $('#courses_20_h4').text('Complete web 2.0 development course 2018 Python and Django');
        $('#courses_20_h5').text('April 2019');
        $('#courses_20_em').text('Udemy');
        $('#courses_20_p1').text('The course addresses theoretical concepts about the Web, from the moment a user types the URL into the browser until the moment the site/system loads in the browser. The course brings several practical projects using the programming languages');
        courses_20_ul = '<li>Computer Network Theory</li><li>HTML and CSS </li><li>Javascript</li><li>Python and Django</li>';
        $('#courses_20_ul').html(courses_20_ul);
        $('#courses_20_a').text('Go to the course');

        $('#courses_21_h4').text('SQL FOR DATA SCIENCE');
        $('#courses_21_h5').text('May 2023');
        $('#courses_21_em').text('DSA - Data Science Academy');
        $('#courses_21_p1').text('Course 1/3 of the Data Science Academy Data Analyst Training');
        $('#courses_21_p2').text('Course ranging from the most basic to advanced levels of SQL focused on solving data science problems.');
        $('#courses_21_a').text('Go to the course');

        $('#courses_22_h4').text('DEEP LEARNING FOR ARTIFICIAL INTELLIGENCE APPLICATIONS WITH PYTHON AND C++');
        $('#courses_22_h5').text('October 2024');
        $('#courses_22_em').text('DSA - Data Science Academy');
        $('#courses_22_p1').text('Course 1/4 of the Data Science Academy AI Engineer Training');
        $('#courses_22_p2').html('This course is a comprehensive and advanced program in Artificial Intelligence (AI) and Deep Learning, designed to deliver cutting-edge knowledge and practical skills. It covers foundational AI concepts, neural networks, and advanced applications in fields like Computer Vision, Natural Language Processing, and Financial Analysis. <br/><br/> With 10 hands-on projects, it emphasizes practical learning, focusing on state-of-the-art tools such as the Transformers architecture and the Hugging Face platform. Its dual programming approach integrates Python’s versatility with C++’s high performance, ensuring adaptability for real-time applications and advanced model deployment. <br/><br/> The course also features a detailed case study on the safe use of ChatGPT and includes the creation of a Large Language Model (LLM) from scratch, providing a robust foundation for tackling modern AI challenges. It stands out as a versatile and forward-thinking learning resource.');
        courses_22_p2 = '<li>Transformers Architecture</li><li>Large Language Models (LLMs)</li><li>Transfer Learning and Fine Tuning</li><li>C++</li>';
        $('#courses_22_ul').html(courses_22_p2);
        $('#courses_22_a').text('Go to the course');

        $('#courses_23_h4').text('GENERATIVE AI AND LLMS FOR NATURAL LANGUAGE PROCESSING');
        $('#cursos_23_h5').text('November 2024');
        $('#courses_23_em').text('DSA - Data Science Academy');
        $('#courses_23_p1').text('Course 3/4 of the Data Science Academy AI Engineer Training');
        $('#courses_23_p2').html("The course offers a comprehensive journey into the field of Artificial Intelligence (AI), focusing on Generative AI, Large Language Models (LLMs), and Natural Language Processing (NLP). It covers fundamental and advanced topics, such as Transformers, Few-Shot Learning, Transfer Learning, Fine-Tuning, PEFT, LoRa, RLHF, RAG, and Llama 2. <br/><br/>  Through a practical approach, students will explore cutting-edge technologies like OpenAI GPT, LangChain, Open-Source LLMs, and AWS, applying this knowledge to real-world projects to address real-world challenges. <br/><br/>  The course is modular, combining theory and practice, with well-structured chapters followed by practical projects that ensure an immersive experience. It aims to empower students to leverage AI's potential in an ever-evolving job market, emphasizing the importance of extracting insights and automating processes as a critical competitive advantage.");
        courses_23_ul = '<li>Api GPT-3, GPT-4, Llama, BERT</li><li>Prompt Engineering</li><li>Fine Tuning, Transfer Learning and RAG</li><li>LangChain, PEFT, LORA, QLORA</li><li>Vector Databases, VectorDB, ChromaDB</li>';
        $('#courses_23_ul').html(courses_23_ul);
        $('#courses_23_a').text('Go to the course');

        $('#courses_24_h4').text('ARTIFICIAL INTELLIGENCE FOR COMPUTER VISION');
        $('#cursos_24_h5').text('December 2024');
        $('#courses_24_em').text('DSA - Data Science Academy');
        $('#courses_24_p1').text('Course 2/4 of the Data Science Academy AI Engineer Training');
        $('#courses_24_p2').html('The course delves into Computer Vision, starting from the fundamentals to advanced techniques, with a practical focus on tools like the HuggingFace library, pre-trained model customization, convolutional neural networks (CNNs), and transformers, including Vision Transformers (ViT) and their variations. It also covers state-of-the-art AI techniques, such as "Text-to-Image with Stable Diffusion".');
        $('#courses_24_a').text('Go to the course');

        /*************** CONTACT ***************/
        $('#contact_address').text('Address');
        $('#contact_phone').text('Phone');


        /*************** OTHERS ***************/
        screen_effects();


       
    });
});

