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
      "A machine learning web application for heart disease prediction using Random Forest, with a focus on comparing dataset sizes and evaluating model generalization.",
    overview:
      "Developed as an undergraduate thesis project, this web application integrates a Random Forest model to predict heart disease risk. The research examines how dataset size affects model generalization and compares different hyperparameter tuning approaches.",
    role: "Researcher & Full-Stack Developer",
    contributions: [
      "Contributed to requirement analysis and gathering for the prediction application.",
      "Helped plan the system structure, database relationships, and application workflow.",
      "Assisted with implementation of the web application using Flask and MySQL.",
      "Integrated the Random Forest model into the web application.",
      "Compared manual tuning, GridSearchCV, and RandomizedSearchCV.",
      "Evaluated model performance using accuracy, precision, recall, F1-score, and confusion matrix.",
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
      "Heart disease risk prediction using Random Forest",
      "Patient data management",
      "Prediction results and details",
      "Prediction history tracking",
      "Model evaluation and hyperparameter tuning comparison",
    ],
    year: "2026",
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
      "A Laravel-based school website designed to support educational information and student registration through an integrated web platform.",
    overview:
      "A capstone project focused on developing a website for SD Muhammadiyah Ambarketawang 2. The platform supports the school's online presence, educational information, and student registration process through a Laravel-based application.",
    role: "System Analyst & Web Developer",
    contributions: [
      "Contributed to requirements analysis and gathering with the team.",
      "Helped plan the system through Entity Relationship Diagrams (ERD), use case diagrams, and Business Process Model and Notation (BPMN).",
      "Assisted the team with coding and application implementation.",
      "Collaborated with team members on the system workflow and functional requirements.",
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
      "Developed a computer vision web application to classify milkfish freshness from eye images using YOLOv8 and a custom CNN, with a FastAPI backend for image processing and prediction.",
    overview:
      "A computer vision application designed to assess milkfish (Chanos chanos) freshness using eye images. The project explores two deep learning approaches: YOLOv8 classification and a custom Convolutional Neural Network (CNN). The website allows users to upload an image and view the predicted freshness class, confidence score, and class probabilities. The selected model is integrated into a FastAPI-based web application.",
    role: "Computer Vision & Web Development",
    contributions: [
      "Contributed to dataset preparation, image preprocessing, model training and evaluation, and integration of the prediction model into a web application.",
      "Worked with YOLOv8 and a custom CNN to compare their performance in classifying milkfish freshness.",
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
      "Upload milkfish eye images for analysis",
      "Image preview before prediction",
      "Image preprocessing and resizing to 224 × 224 pixels for model input",
      "Freshness classification into three classes: Fresh, Highly Fresh, and Not Fresh",
      "Prediction confidence and probability display",
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
      "Developed a web-based bug reporting and handling system for Diskominfosan Kota Yogyakarta, enabling users to submit bug reports, track resolution progress, and manage issues through role-based workflows.",
    overview:
      "A full-stack web application developed during an internship at Diskominfosan Kota Yogyakarta to centralize bug reporting and handling for managed applications. The system streamlines the process from report submission and verification to technical review, assignment, and resolution tracking. It provides role-based access and dedicated workflows for Reporters, Production Team Leaders, Admins, and Super Admins.",
    role: "Full-Stack Developer",
    contributions: [
      "Contributed to the end-to-end development of the application.",
      "Implemented application features using Next.js and TypeScript.",
      "Worked with Google OAuth authentication and role-based access features.",
      "Collaborated with the team to translate requirements into a functional web-based bug reporting and handling system.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "MySQL",
      "Google OAuth",
      "Full-stack",
      "React",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
    features: [
      "Separate permissions and workflows for Reporters, Production Team Leaders, Admins, and Super Admins",
      "Submit bug reports with descriptions and supporting screenshots",
      "Monitor report statuses and handling progress",
      "Allow the Production Team Leader to review reports and update their handling status",
      "Support administrative verification and assignment of reports to the appropriate teams",
      "Display report statistics and handling summaries",
      "Centralize bug report management and provide report export functionality",
      "Manage users and application or service information according to access permissions",
      "Enable users to sign in using Google authentication",
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
