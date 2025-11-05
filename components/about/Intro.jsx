const Intro = () => {
  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        {/* About page title */}

        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center  ">
          <div className="col-span-12 space-y-2.5">
          <div className="lg:mr-16" style={{"textAlign":"justify"}}>
              <p className="text-gray-lite  dark:text-color-910 leading-7">
              I am a Certified AWS Solutions Architect with nearly Seven years of 
              hands-on experience in cloud computing, container orchestration, and 
              infrastructure modernization. My expertise spans across leading platforms, 
              including Amazon Web Services (AWS) and Oracle Cloud Infrastructure (OCI), 
              with a strong emphasis on Kubernetes and modern DevOps practices.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              Throughout my career, I have led and supported numerous cloud migration 
              projects, helping organizations transition from legacy on-premises infrastructures 
              to scalable, secure, and cost-efficient cloud environments. These migrations have 
              included re-platforming, rehosting, and refactoring workloads to leverage the benefits 
              of public, hybrid, and multi-cloud architectures across AWS, OCI, Azure, and GCP.              
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              In addition to designing and deploying cloud-native applications, I have extensive 
              experience in managing on-premises data centers, optimizing systems for performance 
              and reliability, and ensuring seamless integration with cloud services. I bring a 
              strategic approach to infrastructure management, focusing on automation, scalability, 
              and security, while aligning technical solutions with business objectives.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              My deep understanding of cloud technologies, container orchestration (On-Prem Kubernetes, 
              ECS, EKS, and OKE, OCIR), and CI/CD pipelines allows me to deliver robust solutions that 
              accelerate time to market and drive operational excellence. I am passionate about helping 
              organizations harness the full potential of the cloud to innovate, grow, and stay competitive 
              in a fast-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End pt-12 */}
    </>
  );
};

export default Intro;
