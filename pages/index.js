import Head from "next/head";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Image from "next/image";
import profilePic from "../public/dev-ed-wave1.png"; // Replace with your image later
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger menu

// Import icons from react-icons (Simple Icons set for tech logos)
import {
  SiAmazonaws as AwsIcon,
  SiMicrosoftazure as AzureIcon,
  SiGooglecloud as GcpIcon,
  SiTerraform as TerraformIcon,
  SiKubernetes as KubernetesIcon,
  SiDocker as DockerIcon,
  SiJenkins as JenkinsIcon,
  SiPrometheus as PrometheusIcon,
  SiGrafana as GrafanaIcon,
  SiElasticsearch as ElkIcon,
  SiGit as GitIcon,
  SiAnsible as AnsibleIcon,
  SiPython as PythonIcon,
  SiRedis as RedisIcon,
  SiMongodb as MongoDbIcon,
} from "react-icons/si";

// Use a generic icon for tools not available in Simple Icons
import { FaTools as GenericToolIcon } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

  // Define tools with their names and icons
  const tools = [
    { name: "AWS", icon: <AwsIcon className="w-12 h-12" /> },
    { name: "Azure", icon: <AzureIcon className="w-12 h-12" /> },
    { name: "GCP", icon: <GcpIcon className="w-12 h-12" /> },
    { name: "Terraform", icon: <TerraformIcon className="w-12 h-12" /> },
    { name: "Kubernetes", icon: <KubernetesIcon className="w-12 h-12" /> },
    { name: "Docker", icon: <DockerIcon className="w-12 h-12" /> },
    { name: "Jenkins", icon: <JenkinsIcon className="w-12 h-12" /> },
    { name: "Prometheus", icon: <PrometheusIcon className="w-12 h-12" /> },
    { name: "Grafana", icon: <GrafanaIcon className="w-12 h-12" /> },
    { name: "ELK Stack", icon: <ElkIcon className="w-12 h-12" /> },
    { name: "Git", icon: <GitIcon className="w-12 h-12" /> },
    { name: "Ansible", icon: <AnsibleIcon className="w-12 h-12" /> },
    { name: "Python", icon: <PythonIcon className="w-12 h-12" /> },
    { name: "Redis", icon: <RedisIcon className="w-12 h-12" /> },
    { name: "MongoDB", icon: <MongoDbIcon className="w-12 h-12" /> },
    { name: "Vault", icon: <GenericToolIcon className="w-12 h-12" /> },
  ];

  // Define sections for the navbar
  const sections = [
    { name: "Home", id: "home" },
    { name: "Summary", id: "summary" },
    { name: "Services", id: "services" },
    { name: "Tools & Technologies", id: "tools" },
    { name: "Experience", id: "experience" },
    { name: "Certifications", id: "certifications" },
    { name: "Education", id: "education" },
  ];

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjusted offset for navbar height

      let newActiveSection = "home"; // Default to "home"
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          ) {
            newActiveSection = section.id;
            break;
          }
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, sections]);

  // Handle click to scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjusted for navbar height
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsMenuOpen(false); // Close mobile menu on click
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sean I | Principal DevOps Engineer</title>
        <meta
          name="description"
          content="Sean I - Principal DevOps Engineer & Site Reliability Engineer Portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50 dark:bg-gray-900 shadow-md py-4 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 flex justify-between items-center dark:text-white">
        <a href="#home" onClick={() => scrollToSection("home")}>
          <h1 className="font-extrabold text-xl sm:text-2xl bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent drop-shadow-md hover:drop-shadow-lg transition-all duration-300">
            Sean I
          </h1>
        </a>

        {/* Desktop/Tablet Navbar Links */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center space-x-4 lg:space-x-6">
            {sections.map((section) => (
              <li key={section.id} className="relative">
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section.id);
                  }}
                  className={`text-sm lg:text-lg cursor-pointer hover:text-teal-400 transition-colors ${
                    activeSection === section.id
                      ? "text-teal-400"
                      : "text-gray-800 dark:text-gray-100"
                  }`}
                >
                  {section.name}
                </a>
                {activeSection === section.id && (
                  <div className="absolute bottom-[-4px] left-0 right-0 h-1 bg-teal-400 rounded-full" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side (Dark Mode Toggle + Resume) */}
        <div className="flex items-center">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-xl sm:text-2xl mr-3 sm:mr-4 text-gray-800 dark:text-gray-100"
          />
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base"
            href=""
          >
            Resume
          </a>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden ml-3">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <FaTimes className="text-2xl text-gray-800 dark:text-gray-100" />
              ) : (
                <FaBars className="text-2xl text-gray-800 dark:text-gray-100" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Slider) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-50 dark:bg-gray-900 shadow-md py-4 px-4">
            <ul className="flex flex-col space-y-4">
              {sections.map((section) => (
                <li key={section.id} className="relative">
                  <a
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section.id);
                    }}
                    className={`text-lg cursor-pointer hover:text-teal-400 transition-colors ${
                      activeSection === section.id
                        ? "text-teal-400"
                        : "text-gray-800 dark:text-gray-100"
                    }`}
                  >
                    {section.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <main
        className="bg-white dark:bg-gray-900 px-4 sm:px-6 md:px-10 lg:px-20 xl}px-40 pt-20 sm:pt-24"
        id="home"
      >
        <section className="min-h-screen">
          <div className="text-center p-6 sm:p-10">
            <div className="mx-auto bg-gradient-to-b mb-5 from-teal-500 rounded-full w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 relative overflow-hidden mt-10 sm:mt-20">
              <Image src={profilePic} layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl py-2 text-teal-600 font-medium dark:text-teal-400">
              Sean I
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl py-2 text-gray-800 dark:text-white">
              Principal DevOps Engineer & Site Reliability Engineer
            </h3>
            <p className="text-sm sm:text-md md:text-xl py-5 leading-8 text-gray-800 dark:text-gray-100 max-w-xl mx-auto">
              I design, implement, and optimize secure, scalable cloud
              infrastructures and CI/CD pipelines using modern DevOps practices
              across AWS, Azure, and GCP.
            </p>
            <div className="text-4xl sm:text-5xl flex justify-center gap-8 sm:gap-16 py-3 text-gray-600 dark:text-gray-300">
              <a
                href="https://www.linkedin.com/in/hassan-shaukat-2890a820b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin className="hover:text-teal-400 transition-colors cursor-pointer" />
              </a>
              <a
                href="https://github.com/hass-shaukat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="hover:text-teal-400 transition-colors cursor-pointer" />
              </a>
              <a href="mailto:hassdevopsengineer@gmail.com">
                <AiOutlineMail className="hover:text-teal-400 transition-colors cursor-pointer" />
              </a>
            </div>
          </div>
        </section>

        {/* SUMMARY SECTION */}
        <section id="summary" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
            Summary
          </h3>
          <p className="text-sm sm:text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-100">
            Accomplished Principal DevOps and Cloud Infrastructure Engineer with
            more than 11 years of progressive experience building, automating,
            and optimizing enterprise-scale systems across AWS, Azure, and GCP.
            Expert in architecting CI/CD pipelines, Infrastructure as Code
            (IaC), GitOps frameworks, and DevSecOps ecosystems to deliver
            secure, scalable, and high-performing cloud solutions. Adept at
            leading complex modernization initiatives from transforming
            monolithic applications into microservices to establishing
            observability-first cultures that reduce downtime and accelerate
            delivery. Recognized for combining technical depth with strategic
            vision, driving automation, resilience, and cost efficiency across
            hybrid cloud environments. Skilled in Kubernetes, Terraform,
            Jenkins, ArgoCD, and HashiCorp Vault, with a track record of
            achieving measurable results such as 40% faster deployments, 99.99%
            uptime, and 50% fewer security incidents. A proven mentor and team
            leader who empowers global DevOps and SRE teams to adopt best
            practices, improve reliability, and deliver business-driven
            infrastructure excellence.
          </p>
        </section>

        {/* SERVICES SECTION */}
        <section id="services">
          <div>
            <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
              Services I Offer
            </h3>
            <p className="text-sm sm:text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-100">
              With over 11 years in the industry, I specialize in:
            </p>
          </div>
          <div className="lg:flex gap-6 sm:gap-10">
            <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-6 sm:my-10 bg-white dark:bg-gray-800 flex-1 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold pt-6 sm:pt-8 pb-2 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black">
                Cloud Infrastructure & IaC
              </h3>
              <p className="py-2 text-sm sm:text-base text-gray-700 dark:text-gray-100 group-hover:text-white dark:group-hover:text-black">
                Scalable cloud architectures across AWS, Azure, and GCP.
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Terraform, Ansible, CloudFormation
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Multi-Cloud & Hybrid Cloud Solutions
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Cloud Migrations
              </p>
            </div>
            <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-6 sm:my-10 bg-white dark:bg-gray-800 flex-1 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold pt-6 sm:pt-8 pb-2 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black">
                CI/CD & DevSecOps
              </h3>
              <p className="py-2 text-sm sm:text-base text-gray-700 dark:text-gray-100 group-hover:text-white dark:group-hover:text-black">
                Automated pipelines with security and compliance integration.
              </p>
              --no-trunc
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Jenkins, GitHub Actions, Argo CD
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Security Scanning (SonarQube, Trivy)
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                GitOps Workflows
              </p>
            </div>
            <div className="text-center shadow-lg p-6 sm:p-10 rounded-xl my-6 sm:my-10 bg-white dark:bg-gray-800 flex-1 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group">
              <h3 className="text-lg sm:text-xl font-bold pt-6 sm:pt-8 pb-2 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black">
                SRE & Observability
              </h3>
              <p className="py-2 text-sm sm:text-base text-gray-700 dark:text-gray-100 group-hover:text-white dark:group-hover:text-black">
                Reliable systems with advanced monitoring and incident response.
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Prometheus, Grafana, ELK Stack
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                Chaos Engineering
              </p>
              <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 py-1 group-hover:text-white dark:group-hover:text-black">
                SLO/SLI Dashboards
              </p>
            </div>
          </div>
        </section>

        {/* TOOLS & TECHNOLOGIES SECTION */}
        <section id="tools" className="py-10">
          <div>
            <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
              Tools & Technologies
            </h3>
            <p className="text-sm sm:text-md md:text-lg py-2 leading-8 text-gray-800 dark:text-gray-100">
              Proficient in a wide range of tools and technologies for DevOps,
              SRE, and cloud infrastructure:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center shadow-lg p-4 sm:p-6 rounded-xl bg-white dark:bg-gray-800 hover:bg-teal-500 dark:hover:bg-teal-400 transition-all duration-300 group hover:scale-105"
              >
                <div className="mb-4 text-gray-800 dark:text-gray-100 group-hover:text-white dark:group-hover:text-black">
                  {tool.icon}
                </div>
                <p className="text-sm sm:text-base text-gray-800 dark:text-gray-100 group-hover:text-white dark:group-hover:text-black font-medium">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
            Experience
          </h3>
          <div className="space-y-6 sm:space-y-8">
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6 pb-6">
              <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white">
                Principal DevOps Engineer - Aldea
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                June-2022 (Present)
              </p>
              <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-100">
                <li>
                  Designed and implemented multi-cloud CI/CD pipelines across
                  AWS and Azure using Jenkins, GitLab CI, Terraform, and ArgoCD.
                  <br />
                  This automation streamlined the deployment process, minimized
                  manual intervention, and improved release accuracy and
                  delivery speed by 45%.
                </li>
                <li>
                  Transformed legacy monolithic applications into modern
                  containerized microservices using Docker and Kubernetes (EKS).
                  <br />
                  This initiative enhanced scalability, reduced deployment time,
                  and improved resource utilization across environments.
                </li>
                <li>
                  Built and maintained Infrastructure-as-Code (IaC) modules
                  using Terraform and Ansible to standardize and automate
                  environment provisioning.
                  <br />
                  This reduced configuration drift and ensured consistent,
                  reproducible deployments.
                </li>
                <li>
                  Integrated DevSecOps tools such as HashiCorp Vault, Trivy, and
                  SonarQube into the CI/CD process.
                  <br />
                  These integrations automated vulnerability scanning, secret
                  management, and compliance checks, significantly strengthening
                  system security.
                </li>
                <li>
                  Developed a centralized observability platform using
                  Prometheus, Grafana, and Loki to collect and analyze real-time
                  system metrics.
                  <br />
                  This improved incident detection and reduced Mean Time to
                  Resolution (MTTR) by 40%.
                </li>
                <li>
                  Mentored and guided DevOps engineers on GitOps workflows and
                  automation practices using ArgoCD and FluxCD.
                  <br />
                  This fostered a culture of continuous improvement, efficiency,
                  and technical excellence across the team.
                </li>
                <li>
                  Collaborated with InfoSec and compliance teams to implement
                  HIPAA and SOC2-aligned architectures, ensuring that all cloud
                  infrastructure met strict security and governance
                  requirements.
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6 pb-6">
              <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white">
                Lead DevOps Engineer - Employers
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                January-2019 – May 2022
              </p>
              <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-100">
                <li>
                  Designed and implemented enterprise CI/CD pipelines across AWS
                  and Azure using Jenkins, GitHub Actions, and ArgoCD, <br />
                  boosting deployment reliability by 50% and reducing failure
                  rates by 35%.
                </li>
                <li>
                  Automated infrastructure provisioning with Terraform and
                  Pulumi, cutting environment setup time by 60% and ensuring
                  consistent, scalable deployments.
                </li>
                <li>
                  Established automated security controls with Vault, Trivy, and
                  OPA, eliminating manual audits and enforcing compliance
                  pre‑deployment.
                </li>
                <li>
                  Introduced observability-driven DevOps practices using
                  Prometheus, Grafana, and PagerDuty, enabling proactive issue
                  resolution and improving service uptime.
                </li>
                <li>
                  Led Kubernetes microservices deployments (EKS/GKE) with Helm
                  and Istio, enhancing scalability, service discovery, and
                  resilience.
                </li>
                <li>
                  Mentored global DevOps teams on GitOps, IaC standards, and
                  cloud governance, driving collaboration and delivery
                  consistency across international teams.
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6 pb-6">
              <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white">
                Site Reliability Engineer (SRE) - CoreLogic
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                August 2016 - December 2018
              </p>
              <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-100">
                <li>
                  Managed high-availability healthcare platforms ensuring 99.99%
                  uptime while maintaining full HIPAA and SOC2 compliance
                  <br />
                  through automation, proactive monitoring, and risk management.
                </li>
                <li>
                  Developed and deployed comprehensive observability dashboards
                  using Datadog, Prometheus, Grafana, and Jaeger. <br />
                  These tools provided real-time insights into SLIs/SLOs and
                  helped quickly identify service degradation.
                </li>
                <li>
                  Automated incident response and recovery workflows using
                  Python, Shell scripting, and PagerDuty. This reduced human
                  <br />
                  dependency during outages and cut average response time by
                  45%.
                </li>
                <li>
                  Implemented blue-green and canary deployment strategies using
                  Kubernetes and Helm to enable zero-downtime rollouts,
                  <br />
                  improving deployment safety and flexibility.
                </li>
                <li>
                  Led cloud migration projects from on-premise infrastructure to
                  AWS and GCP, which reduced costs by 25% while improving
                  <br />
                  scalability, disaster recovery, and operational agility.
                </li>
                <li>
                  Established chaos engineering practices using Gremlin and
                  LitmusChaos to simulate outages and test recovery mechanisms,
                  <br />
                  strengthening overall system resilience.
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-teal-500 pl-4 sm:pl-6 pb-6">
              <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white">
                DevOps & Cloud Infrastructure Engineer - HashiCorp
              </h4>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                March 2014 - July 2016
              </p>
              <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-100">
                <li>
                  Designed and deployed secure and compliant AWS infrastructure
                  using Terraform, CloudFormation, and Ansible. <br />
                  This reduced manual provisioning time by 55% and improved
                  configuration consistency across environments.
                </li>
                <li>
                  Developed and automated CI/CD pipelines using Jenkins and
                  GitHub Actions to streamline the build, test, and <br />
                  deployment processes. This reduced release cycle time and
                  increased overall delivery reliability.
                </li>
                <li>
                  Implemented centralized logging and monitoring using the ELK
                  Stack (Elasticsearch, Logstash, Kibana) and Fluentd. <br />
                  This enhanced operational visibility and decreased
                  troubleshooting time by 50%.
                </li>
                <li>
                  Strengthened application and infrastructure security by
                  integrating tools such as Snyk and OWASP ZAP into the CI/CD
                  process, <br />
                  proactively identifying and mitigating vulnerabilities before
                  deployment.
                </li>
                <li>
                  Optimized cloud infrastructure performance and cost efficiency
                  by implementing auto-scaling, resource rightsizing, <br /> and
                  performance monitoring, leading to a 20% cost reduction.
                </li>
                <li>
                  Automated IAM policy management and compliance auditing with
                  Python and AWS CLI scripts to enhance governance, <br />
                  access control, and audit readiness.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
            Certifications
          </h3>
          <ul className="list-disc list-inside text-sm sm:text-md md:text-lg leading-8 text-gray-800 dark:text-gray-100">
            <li>AWS Certified Solutions Architect - Associate</li>
            <li>Certified Kubernetes Administrator (CKA)</li>
            <li>HashiCorp Certified: Terraform Associate</li>
          </ul>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-10">
          <h3 className="text-2xl sm:text-3xl py-1 text-gray-800 dark:text-white">
            Education
          </h3>
          <div className="border-l-4 border-teal-500 pl-4 sm:pl-6">
            <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-white">
              Bachelor of Science
            </h4>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-900 py-4 sm:py-6 text-center">
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          © 2025 Sean I. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
