import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Explore my comprehensive expertise in Kubernetes, AWS, and DevOps showcased on my resume website. Delve into my proficiency in deploying containerized applications, architecting cloud solutions on Amazon Web Services, and implementing CI/CD pipelines to accelerate software delivery. Witness my ability to bridge development and operations, driving innovation, scalability, and automation for businesses"
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="keywords"
          content="Kubernetes administration, Pratik Borkar, Pratik N Borkar, Kubernetes admin, Kubernetes management, Kubernetes operations, Kubernetes best practices, Kubernetes troubleshooting, AWS Cloud services, Amazon Web Services, AWS infrastructure, AWS deployment, AWS architecture, AWS solutions, Kubernetes security, Kubernetes cluster hardening, Kubernetes security best practices, Kubernetes security policies, Kubernetes security guidelines, Kubernetes security controls, Kubernetes HA cluster, Kubernetes high availability, High availability Kubernetes setup, Kubernetes cluster redundancy, Kubernetes failover setup, Kubernetes HA architecture, DevOps practices, DevOps culture, DevOps automation, DevOps tools, DevOps methodologies, DevOps pipelines, Site Reliability Engineering, SRE best practices, SRE principles, SRE tools, SRE methodologies, SRE practices"

        />
        <meta name="Pratik N Borkar" content="My Resume Based Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
