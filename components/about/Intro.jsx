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
              I am a Certified AWS Solutions Architect with extensive expertise in Container Orchestration tools,
              particularly Kubernetes, spanning nearly six years. 

              My career journey has been characterized by a strong focus on migrating workloads 
              from on-premises environments to cloud infrastructures, developing and delivering 
              AWS Cloud-Based applications, and managing On-Prem servers for clients worldwide.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
              My professional journey reflects a deep understanding of cloud technologies, 
              container orchestration, and infrastructure management. I excel in designing 
              and implementing solutions that optimize system performance, reliability, and 
              security, thereby contributing significantly to the success of organizations 
              in delivering cutting-edge cloud-based applications and services.
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
