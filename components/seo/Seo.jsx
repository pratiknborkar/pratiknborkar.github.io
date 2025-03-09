import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} | Unlock My Professional Journey: Expertise in Kubernetes, AWS, DevOps`}
      </title>
      {/* Meta tags for SEO keywords */}
      <meta
        name="keywords"
        content="Kubernetes administration, Pratik Borkar, Pratik N Borkar, Kubernetes admin, Kubernetes management, Kubernetes operations, Kubernetes best practices, Kubernetes troubleshooting, AWS Cloud services, Amazon Web Services, AWS infrastructure, AWS deployment, AWS architecture, AWS solutions, Kubernetes security, Kubernetes cluster hardening, Kubernetes security best practices, Kubernetes security policies, Kubernetes security guidelines, Kubernetes security controls, Kubernetes HA cluster, Kubernetes high availability, High availability Kubernetes setup, Kubernetes cluster redundancy, Kubernetes failover setup, Kubernetes HA architecture, DevOps practices, DevOps culture, DevOps automation, DevOps tools, DevOps methodologies, DevOps pipelines, Site Reliability Engineering, SRE best practices, SRE principles, SRE tools, SRE methodologies, SRE practices"
      />
      <meta 
        name="description" 
        content="Discover my expertise in Kubernetes, AWS, & DevOps on my resume website. From deploying containers to architecting AWS solutions & implementing CI/CD, I drive innovation, scalability, & automation for businesses."
      />

    </Head>
  </>
);

export default Seo;
