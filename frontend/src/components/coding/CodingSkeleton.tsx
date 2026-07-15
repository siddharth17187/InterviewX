export default function CodingSkeleton() {

  return (

    <div className="space-y-6">

      {[1, 2, 3, 4].map((item) => (

        <div
          key={item}
          className="bg-white rounded-2xl shadow p-6 animate-pulse"
        >

          <div className="flex justify-between">

            <div className="space-y-4 flex-1">

              <div className="h-6 bg-gray-200 rounded w-1/3"></div>

              <div className="flex gap-3">

                <div className="h-8 w-24 bg-gray-200 rounded-full"></div>

                <div className="h-8 w-28 bg-gray-200 rounded-full"></div>

                <div className="h-8 w-28 bg-gray-200 rounded-full"></div>

              </div>

            </div>

            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>

          </div>

          <div className="flex gap-4 mt-6">

            <div className="h-10 w-36 bg-gray-200 rounded-xl"></div>

            <div className="h-10 w-36 bg-gray-200 rounded-xl"></div>

          </div>

        </div>

      ))}

    </div>

  );

}