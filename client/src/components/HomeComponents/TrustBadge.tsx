import { CheckCircle } from 'lucide-react';

const TrustBadge = () => {
  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-md rounded-md px-4 py-2 flex items-center z-10">
      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
      <div>
        <p className="text-sm font-semibold">Excellent Service</p>
        <p className="text-xs text-gray-600">Verified by Trustindex</p>
      </div>
    </div>
  );
};

export default TrustBadge;