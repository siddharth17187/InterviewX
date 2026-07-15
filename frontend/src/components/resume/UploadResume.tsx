import { useRef } from "react";
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";

interface Props {
  resumeFile: File | null;
  setResumeFile: (file: File | null) => void;
}

export default function UploadResume({
  resumeFile,
  setResumeFile,
}: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload PDF only");
      return;
    }

    setResumeFile(file);
  };

  return (
    <div className="rounded-3xl bg-white p-4 shadow-md sm:p-6 lg:p-8">

      <div className="mb-6 flex items-center gap-3">

        <FaFilePdf className="text-2xl text-red-500 sm:text-3xl" />

        <h2 className="text-xl font-bold sm:text-2xl">
          Upload Resume
        </h2>

      </div>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleFile(e.dataTransfer.files[0]);
        }}
        className="flex min-h-[260px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-blue-300 p-4 text-center sm:h-72"
      >

        <FaCloudUploadAlt className="text-5xl text-blue-600 sm:text-6xl" />

        <p className="mt-4 text-gray-600">
          Drag & Drop Resume
        </p>

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          Browse Resume
        </button>

        <input
          hidden
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={(e) => {
            if (e.target.files?.length) {
              handleFile(e.target.files[0]);
            }
          }}
        />

      </div>

      {resumeFile && (

        <div className="mt-6 rounded-xl bg-blue-50 p-4 break-words">

          <p className="font-semibold">
            {resumeFile.name}
          </p>

          <p className="text-sm text-gray-600">
            {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
          </p>

        </div>

      )}

    </div>
  );
}