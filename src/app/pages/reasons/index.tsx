import { Shield, CheckCircle, SmilePlus, User } from "lucide-react"

export default function RegisterKaroPage() {
    return (
        <div className="max-w-7xl mx-auto px-7 py-12 sm:px-6 lg:px-8">
  <div className="space-y-12 flex flex-col lg:flex-row items-center lg:items-start">
    {/* Left Section (Title & Description) */}
    <div className="space-y-5 text-center lg:text-left max-w-2xl">
      <h3 className="text-orange-500 font-medium uppercase tracking-wide">
        WHY REGISTERKARO.IN
      </h3>
      <h2 className="text-3xl font-bold text-gray-900">
        Why Choose Register Karo
      </h2>
      <p className="text-lg text-gray-700">
        It is with consistent services and results that build trust with the people and that in turn helps us to
        serve the business better.
      </p>
    </div>

    {/* Right Section (Cards) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div></div>
      <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center text-center">
        <Shield className="h-16 w-16 text-orange-500 fill-orange-500 mb-4" />
        <h3 className="text-xl font-semibold mb-3">Confidential & Safe</h3>
        <p className="text-gray-600">All your private information is safe with us</p>
      </div>

      {/* Card 2 */}
      <div className="bg-green-50 rounded-lg p-6 flex flex-col items-center text-center">
        <CheckCircle className="h-16 w-16 text-green-500 fill-green-500 mb-4" />
        <h3 className="text-xl font-semibold mb-3">No Hidden Fee</h3>
        <p className="text-gray-600">Everything is put before you with no hidden charges or conditions</p>
      </div>
      

      {/* Card 3 */}
      <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center">
        <SmilePlus className="h-16 w-16 text-blue-500 fill-blue-500 mb-4" />
        <h3 className="text-xl font-semibold mb-3">Guaranteed Satisfaction</h3>
        <p className="text-gray-600">We ensure that you stay 100% satisfied with our offered services</p>
      </div>
    

      {/* Card 4 */}
      <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center text-center">
        <User className="h-16 w-16 text-red-500 fill-red-500 mb-4" />
        <h3 className="text-xl font-semibold mb-3">Expert CA/CS Assistance</h3>
        <p className="text-gray-600">Prompt support from our in-house expert professionals</p>
      </div>

      {/* Card 5 */}
      <div className="bg-red-50 rounded-lg p-6 flex flex-col items-center text-center">
        <Shield className="h-16 w-16 text-orange-500 fill-orange-500 mb-4" />
        <h3 className="text-xl font-semibold mb-3">Confidential & Safe</h3>
        <p className="text-gray-600">All your private information is safe with us</p>
      </div>
    </div>
  </div>
</div>

    )
}

