"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code2,
  X,
} from "lucide-react";
import { createPortal } from "react-dom";

type Project = {
  id: string;
  title: string;
  images: string[];
  description: string;
  overview: string;
  role: string;
  contributions: string[];
  technologies: string[];
  features: string[];
  year: string;
  code2?: string;
  liveDemo?: string;
};

const projects: Project[] = [
  {
    id: "heart-prediction",
    title: "Heart Disease Prediction Website",
    images: [
      "/images/projects/hd-dashboard.png",
      "/images/projects/hd-detailprediksi.png",
      "/images/projects/hd-pasien.png",
      "/images/projects/hd-riwayatprediksi.png",
      "/images/projects/hd-tambahprediksi.png",
    ],
    description:
      "Achieved 99% accuracy in heart disease prediction using Random Forest and GridSearchCV, while investigating model generalization across 1,025 clinical records.",
    overview:
      "Developed as my undergraduate thesis, this project combines machine learning research with a full-stack web application for heart disease prediction. I optimized a Random Forest model using GridSearchCV, achieving 99% accuracy, and compared Manual Tuning, GridSearchCV, and RandomizedSearchCV to evaluate model optimization approaches. The research further investigated how dataset size affects model generalization using 1,025 clinical records.",
    role: "Researcher & Full-Stack Developer",
    contributions: [
      "Developed a machine learning-based web application for heart disease prediction using Random Forest.",
      "Optimized model hyperparameters with GridSearchCV, achieving 99% accuracy.",
      "Compared Manual Tuning, GridSearchCV, and RandomizedSearchCV to assess model performance.",
      "Investigated the effect of dataset size on model generalization using 1,025 clinical records.",
      "Integrated multiple trained prediction models into the web application, allowing users to select different models for prediction.",
      "Evaluated model performance using accuracy, precision, recall, F1-score, and confusion matrices.",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Flask",
      "MySQL",
      "SciPy",
      "Matplotlib",
      "Seaborn",
    ],
    features: [
      "Heart disease prediction using Random Forest",
      "Multiple trained model selection",
      "Patient data management",
      "Detailed prediction results",
      "Prediction history tracking",
      "Model optimization and evaluation",
    ],
    year: "2025–2026",
  },
  {
    id: "capstone-sd",
    title: "SD Muhammadiyah Ambarketawang 2 Website",
    images: [
      "/images/projects/capstone-landing-page.png",
      "/images/projects/capstone-sa-dashboard.png",
      "/images/projects/capstone-sa-pendaftaran.png",
      "/images/projects/capstone-sw-form.png",
      "/images/projects/capstone-tu-konten.png",
    ],
    description:
      "Designed and developed a school website concept combining public information, online student registration, and administrative workflows in a Laravel-based platform.",
    overview:
      "Developed as a team capstone project for SD Muhammadiyah Ambarketawang 2, this project focused on translating school requirements into a structured web-based system. My responsibilities as System Analyst and Web Developer included requirements analysis, system modeling, database relationship planning, and application implementation with the development team.",
    role: "System Analyst & Web Developer",
    contributions: [
      "Analyzed and documented system requirements with the team.",
      "Modeled system structure and workflows using Entity Relationship Diagrams (ERD), use case diagrams, and Business Process Model and Notation (BPMN).",
      "Planned database relationships and functional workflows to guide implementation.",
      "Collaborated on developing the application using Laravel, PHP, and MySQL.",
      "Supported implementation of school information, student registration, and administrative features.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "School information and landing page",
      "Online student registration",
      "Registration form management",
      "Administrative dashboard",
      "School content management",
    ],
    year: "2025–2026",
  },
  {
    id: "fish-freshness",
    title: "Chanos chanos Freshness Detection Website",
    images: [
      "/images/projects/cc-highlyfresh.png",
      "/images/projects/cc-fresh.png",
      "/images/projects/cc-notfresh.png",
    ],
    description:
      "Achieved 88.12% Top-1 and 100% Top-5 accuracy with YOLOv8 for milkfish freshness detection, integrating the selected model into a FastAPI web application.",
    overview:
      "Developed a computer vision application to classify milkfish (Chanos chanos) freshness from eye images. The project compared YOLOv8 and a custom Convolutional Neural Network (CNN), achieving 88.12% Top-1 and 100% Top-5 accuracy with YOLOv8. The custom CNN achieved 77% validation accuracy on 101 test samples, with the Highly Fresh class reaching 0.91 precision, recall, and F1-score. The selected model was integrated into a web application using FastAPI as the backend.",
    role: "Computer Vision & Web Developer",
    contributions: [
      "Prepared and preprocessed eye images for milkfish freshness classification.",
      "Trained and evaluated YOLOv8 and a custom CNN for image-based freshness classification.",
      "Achieved 88.12% Top-1 and 100% Top-5 accuracy using YOLOv8.",
      "Evaluated the custom CNN, achieving 77% validation accuracy on 101 test samples.",
      "Analyzed class-level performance, with the Highly Fresh class achieving 0.91 precision, recall, and F1-score.",
      "Integrated the selected model into a FastAPI-based web application for image prediction.",
    ],
    technologies: [
      "Python",
      "YOLOv8",
      "CNN",
      "TensorFlow",
      "FastAPI",
      "Keras",
      "Jinja2",
      "HTML",
      "CSS",
      "NumPy",
      "Pillow",
    ],
    features: [
      "Milkfish eye image upload and preview",
      "Image preprocessing and resizing to 224 × 224 pixels",
      "Freshness classification into Highly Fresh, Fresh, and Not Fresh",
      "Prediction confidence and class probability display",
      "FastAPI backend integration",
    ],
    year: "2025",
  },
  {
    id: "bug-reporting",
    title: "Bug Reporting and Handling Website",
    images: [
      "/images/projects/brh-login.png",
      "/images/projects/brh-adm-dashboard.png",
      "/images/projects/brh-adm-report.png",
      "/images/projects/brh-ktp-report.png",
      "/images/projects/brh-plp-report.png",
    ],
    description:
      "Developed a full-stack bug reporting system for Diskominfosan Kota Yogyakarta, implementing 7 core features across 4 user roles with Google OAuth authentication.",
    overview:
      "Developed during my internship at Diskominfosan Kota Yogyakarta, this web-based system supports bug reporting, monitoring, and resolution for applications managed by the institution. The system implements 7 core features across four roles—Reporter, Admin, Production Team Leader, and Super Admin—with role-based functionality for report submission, monitoring, status updates, verification, institution management, user management, and service management.",
    role: "Full-Stack Developer",
    contributions: [
      "Developed full-stack functionality for a web-based bug reporting and handling system using Next.js.",
      "Implemented 7 core features across Reporter, Admin, Production Team Leader, and Super Admin roles.",
      "Developed role-based workflows for bug submission, report monitoring, status updates, and report verification.",
      "Implemented institution, user, and service management functionality.",
      "Integrated Google OAuth authentication for user sign-in.",
      "Collaborated with the team throughout requirements analysis, system planning, UI/UX design, development, and testing.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "Google OAuth",
      "React",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
    features: [
      "Role-based access across four user roles",
      "Bug submission with descriptions and screenshots",
      "Report monitoring and status updates",
      "Report verification and handling workflows",
      "Institution, user, and service management",
      "Dashboard statistics and handling summaries",
      "Report export functionality",
      "Google OAuth authentication",
    ],
    year: "2025–2026",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeImage, setActiveImage] = useState(0);

  const closeModal = useCallback(() => {
    onClose();
  }, [onClose]);

  const showPreviousImage = useCallback(() => {
    setActiveImage(
      (current) =>
        (current - 1 + project.images.length) % project.images.length,
    );
  }, [project.images.length]);

  const showNextImage = useCallback(() => {
    setActiveImage((current) => (current + 1) % project.images.length);
  }, [project.images.length]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();

      if (event.key === "ArrowLeft") {
        setActiveImage(
          (current) =>
            (current - 1 + project.images.length) % project.images.length,
        );
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) => (current + 1) % project.images.length);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, project.images.length]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        type="button"
        onClick={closeModal}
        aria-label="Close project details"
        className="absolute right-4 top-4 z-30 rounded-full bg-white/15 p-3 text-white transition hover:bg-white/30"
      >
        <X size={24} />
      </button>

      <motion.div
        key={project.id}
        className="relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-[#faf7f2] shadow-2xl md:flex-row"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.97, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        {/* Screenshot gallery */}
        <div className="flex min-h-[260px] flex-1 flex-col bg-[#e8e5e2] sm:min-h-[350px] md:min-h-[520px] md:min-w-0">
          <div className="relative min-h-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.images[activeImage]}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Image
                  src={project.images[activeImage]}
                  alt={`${project.title} screenshot ${activeImage + 1}`}
                  fill
                  sizes="(max-width: 768px) 95vw, 65vw"
                  className="object-contain p-2 sm:p-4"
                  priority={activeImage === 0}
                />
              </motion.div>
            </AnimatePresence>

            {project.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPreviousImage}
                  aria-label="Previous screenshot"
                  className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md transition hover:bg-white sm:h-11 sm:w-11"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  type="button"
                  onClick={showNextImage}
                  aria-label="Next screenshot"
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md transition hover:bg-white sm:h-11 sm:w-11"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>

          {/* Image counter and thumbnails */}
          <div className="flex shrink-0 items-center justify-between gap-3 border-t border-black/5 bg-[#f4f0ec] px-4 py-3">
            <span className="text-xs text-neutral-600">
              {String(activeImage + 1).padStart(2, "0")} /{" "}
              {String(project.images.length).padStart(2, "0")}
            </span>

            {project.images.length > 1 && (
              <div className="flex max-w-[80%] gap-2 overflow-x-auto py-1">
                {project.images.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View screenshot ${index + 1}`}
                    aria-current={activeImage === index}
                    className={`relative h-12 w-16 shrink-0 overflow-hidden rounded border-2 transition sm:h-14 sm:w-20 ${
                      activeImage === index
                        ? "border-[#33351e] opacity-100"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Project information */}
        <div className="w-full overflow-y-auto p-5 sm:p-7 md:w-[370px] md:shrink-0">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
            {project.year}
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#33351e] sm:text-3xl">
            {project.title}
          </h3>

          <div className="my-5 h-px w-full bg-[#eadedb]" />

          <p className="text-sm leading-7 text-neutral-700">
            {project.overview}
          </p>

          <div className="mt-5">
            <h4 className="text-sm font-semibold text-[#33351e]">My role</h4>
            <p className="mt-1 text-sm leading-6 text-neutral-600">
              {project.role}
            </p>
          </div>

          <div className="mt-5">
            <h4 className="text-sm font-semibold text-[#33351e]">
              My contributions
            </h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-600">
              {project.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h4 className="text-sm font-semibold text-[#33351e]">
              Key features
            </h4>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-600">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <h4 className="text-sm font-semibold text-[#33351e]">Tech stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {(project.code2 || project.liveDemo) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.code2 && (
                <a
                  href={project.code2}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm transition hover:bg-neutral-100"
                >
                  <Code2 size={16} />
                  Code
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#33351e] px-4 py-2 text-sm text-white transition hover:bg-[#4c5030]"
                >
                  Live demo
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  const showPrevious = () => {
    setStartIndex(
      (current) => (current - 1 + projects.length) % projects.length,
    );
  };

  const showNext = () => {
    setStartIndex((current) => (current + 1) % projects.length);
  };

  const visibleProjects = projects.map(
    (_, index) => projects[(startIndex + index) % projects.length],
  );

  return (
    <section
      id="projects"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-cover bg-center bg-no-repeat px-4 py-8 sm:px-8 sm:py-12 lg:h-dvh lg:min-h-0 lg:px-8 lg:py-8 xl:px-12"
      style={{
        backgroundImage: "url('/images/projects/background-projects.png')",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 -z-10 bg-black/10" />

      {/* Speech bubble */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mx-auto mb-4 flex w-full max-w-[1080px] justify-end sm:mb-5 lg:mb-5"
      >
        <motion.div
          whileHover={{
            y: -4,
            scale: 1.025,
            boxShadow: "0px 10px 24px rgba(0,0,0,0.22)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="relative cursor-default rounded-[26px] bg-[#168bfa] px-4 py-2 text-center text-sm text-white shadow-md sm:px-5 sm:py-2.5 sm:text-lg lg:text-base xl:text-lg"
        >
          These are my selected projects!
          <span className="absolute -bottom-2 right-3 h-0 w-0 border-l-[13px] border-t-[15px] border-l-transparent border-t-[#168bfa]" />
        </motion.div>
      </motion.div>

      {/* Project cards */}
      <div className="relative mx-auto w-full max-w-[1080px]">
        {/* Mobile: 2 rows, 1 column */}
        <div className="grid grid-cols-1 gap-4 sm:hidden">
          {visibleProjects.slice(0, 2).map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(project)}
              aria-label={`View details for ${project.title}`}
              className="group grid h-[240px] w-full grid-cols-[42%_1fr] overflow-hidden rounded-md bg-[#dedbdd] text-left text-black shadow-[0_8px_20px_rgba(0,0,0,0.18)]"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Project screenshot */}
              <div className="relative min-h-[150px] overflow-hidden bg-white">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  fill
                  sizes="42vw"
                  className="object-contain p-1"
                />
              </div>

              {/* Project information */}
              <div className="flex min-w-0 flex-col p-3">
                <h3 className="text-sm font-bold leading-tight">
                  {project.title}
                </h3>

                <p className="mt-2 text-xs leading-snug tracking-tight">
                  {project.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {project.technologies.slice(0, 5).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/80 bg-white px-2 py-1 text-[9px] leading-tight"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Tablet: 4 cards in 2 columns */}
        <div className="hidden items-stretch gap-4 sm:grid sm:grid-cols-2 lg:hidden">
          {visibleProjects.slice(0, 4).map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(project)}
              aria-label={`View details for ${project.title}`}
              className="group flex h-[360px] min-h-0 min-w-0 flex-col overflow-hidden rounded-md bg-[#dedbdd] text-left text-black shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex min-h-[44px] items-center px-3 py-2">
                <h3 className="text-sm font-bold leading-tight">
                  {project.title}
                </h3>
              </div>

              <div className="relative aspect-[16/8] w-full shrink-0 overflow-hidden bg-neutral-800">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  fill
                  sizes="45vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.025]"
                />
              </div>

              <div className="flex flex-1 flex-col p-3">
                <p className="text-xs leading-snug tracking-tight">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1 pt-1">
                  {project.technologies.slice(0, 5).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/80 bg-white px-2.5 py-1 text-[11px] leading-tight"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Desktop: 3 cards in one row */}
        <div className="hidden items-stretch gap-4 lg:grid lg:grid-cols-3 lg:gap-4">
          {visibleProjects.slice(0, 3).map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(project)}
              aria-label={`View details for ${project.title}`}
              className="group flex h-[380px] min-h-0 min-w-0 flex-col overflow-hidden rounded-md bg-[#dedbdd] text-left text-black shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex min-h-[44px] items-center px-3 py-2">
                <h3 className="text-sm font-bold leading-tight sm:text-[15px]">
                  {project.title}
                </h3>
              </div>

              <div className="relative aspect-[16/8] w-full shrink-0 overflow-hidden bg-neutral-800">
                <Image
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 1024px) 45vw, 33vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.025]"
                />
              </div>

              <div className="flex flex-1 flex-col p-3">
                <p className="text-xs leading-snug tracking-tight xl:text-[13px]">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1 pt-1">
                  {project.technologies.slice(0, 5).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/80 bg-white px-2.5 py-1 text-[11px] leading-tight"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Carousel controls */}
      <div className="mt-3 flex items-center justify-center gap-4 sm:mt-4 lg:mt-3 lg:justify-between">
        {" "}
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous projects"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md transition hover:scale-105 hover:bg-white"
        >
          <ChevronLeft size={26} />
        </button>
        <span className="text-sm font-medium text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.7)]">
          {String(startIndex + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next projects"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-neutral-900 shadow-md transition hover:scale-105 hover:bg-white"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      {/* Project detail modal */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {activeProject && (
              <ProjectModal
                key={activeProject.id}
                project={activeProject}
                onClose={() => setActiveProject(null)}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
