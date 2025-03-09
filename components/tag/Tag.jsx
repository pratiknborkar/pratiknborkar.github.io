const Tag = () => {
  const tagList = [
    "Kubernetes Admin",
    "Prometheus",
    "Observability",
    "Cloud Migration",
    "Oracle Cloud Infrastructure",
    "Amazon Web Services",
    "Alert Manager",
    "Grafana",
    "Container - Orchestration",
    "VM & Cluster Hardening",
    "Reverse Proxy",
  ];
  return (
    <>
      {tagList.map((tag, i) => (
        <button className="resume-btn text-[15px]" key={i}>
          {tag}
        </button>
      ))}
    </>
  );
};

export default Tag;
