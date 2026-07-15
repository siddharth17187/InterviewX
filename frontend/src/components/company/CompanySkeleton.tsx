export default function CompanySkeleton() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-5 text-lg font-medium text-gray-600 animate-pulse">
        Searching jobs...
      </p>
    </div>
  );
}