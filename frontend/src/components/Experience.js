import React from 'react'

function Experience() {
  return (
    <section id='experience'>
      <h1>Experience</h1>
      <ul>
        <li>
          <h2>Freelance</h2>
          <p>During my freelance work in machine learning, I collaborated on three diverse
projects:
- Fine tuning the BERT model for multilingual sentiment analysis(Arabic and
English tweets).
- Development of a voice recognition system for Arabic numeral transcription.
- Ongoing project of a smart notiϐication generation system.</p>
        </li>
        <li>
          <h2>Machine	Learning	&	Software	Engineer, Namla	Cloud</h2>
          <p>
              My role at Namla Cloud was a fusion of software engineering and machine learning.
            my main responsibilities included:
            - Developing demonstration services for machine learning models.
            - Designing and conducting End-to-End tests on the Namla dashboard.
            - Deploying OpenVINO and TensorFlow models using Docker and Kubernetes.
            - Mentoring Interns in their MLOPS tasks.
          </p>
        </li>
        <li>
          <h2>Research	Intern, LMCS</h2>
          <p>
              The objectif was to develop a predictive autoscaling solution within Kubernetes
            cluster, utilizing machine learning for time series analysis. My responsibilities
            included:
            - Researching datasets for resource consumption (CPU/RAM/disk).
            - Comparative study between models (ARIMA, LSTM, LR).
            - Dockerizing web services and deploying them in Kubernetes.
            - Utilizing Grafana and Prometheus to visualize and monitore the state of the cluster.
            - Developing a tailored solution for horizontal autoscaling in Kubernetes.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Experience