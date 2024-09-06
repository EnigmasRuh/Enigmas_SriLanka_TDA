import React from 'react';

const VisaInfo = () => {
  return (
    <div className="w-full min-h-screen bg-white p-8" style={{ paddingTop: "120px" }}>
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-4 text-center" style={{ color: '#D58752' }}>
          Sri Lanka Visa Information
        </h1>
        <p className="text-gray-700 text-lg mb-8 text-center">
          Explore the visa options and application process to travel in Sri Lanka.
          Learn about eligibility, required documents, and processing times.
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: '#D58752' }}>
            Visa Types Overview
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#D58752' }}>
              Tourist Visa
            </h3>
            <p className="text-gray-700 mb-2">
              A Tourist Visa is issued to genuine travelers intending to visit Sri Lanka for leisure, sightseeing, or visiting family and friends. This visa allows you to stay in Sri Lanka for up to 30 days with a possibility of extending it for an additional period, subject to approval.
            </p>
            <div className="ml-4">
              <p className="font-semibold" style={{ color: '#D58752' }}>Eligibility:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>You must have a valid passport.</li>
                <li>Your stay must be for tourism purposes (leisure, sightseeing, or visiting family/friends).</li>
                <li>You must show proof of sufficient funds to support your stay.</li>
              </ul>
              <p className="font-semibold mt-4" style={{ color: '#D58752' }}>Validity & Extensions:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Initial visa validity is 30 days.</li>
                <li>Extensions can be applied for in Sri Lanka at the Department of Immigration and Emigration.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#D58752' }}>
              Business Visa
            </h3>
            <p className="text-gray-700 mb-2">
              A Business Visa is for individuals traveling to Sri Lanka for business-related activities such as attending meetings, conferences, or short-term professional assignments. This visa is usually issued for 30 days, and it may be extended depending on the purpose of the visit.
            </p>
            <div className="ml-4">
              <p className="font-semibold" style={{ color: '#D58752' }}>Eligibility:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>You must have a valid passport.</li>
                <li>You must provide an invitation letter or proof of business activity in Sri Lanka.</li>
                <li>You must show proof of sufficient funds and travel arrangements.</li>
              </ul>
              <p className="font-semibold mt-4" style={{ color: '#D58752' }}>Validity & Extensions:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Initial visa validity is 30 days.</li>
                <li>Business visa extensions can be arranged for longer-term stays if necessary.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#D58752' }}>
              Transit Visa
            </h3>
            <p className="text-gray-700 mb-2">
              A Transit Visa is issued to travelers who pass through Sri Lanka en route to another destination. This visa is required if you need to stay in Sri Lanka for up to 2 days before continuing your journey.
            </p>
            <div className="ml-4">
              <p className="font-semibold" style={{ color: '#D58752' }}>Eligibility:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>You must have a valid passport.</li>
                <li>You must be in transit through Sri Lanka to a third country.</li>
                <li>You must provide proof of onward travel arrangements.</li>
              </ul>
              <p className="font-semibold mt-4" style={{ color: '#D58752' }}>Validity & Extensions:</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Valid for up to 2 days, no extensions are allowed for this visa type.</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#D58752' }}>
              Eligibility Requirements
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Tourist Visa:</span> Proof of tourism purpose (e.g., hotel booking), sufficient funds, and a valid passport.</li>
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Business Visa:</span> Proof of business purpose (e.g., invitation letter), sufficient funds, and a valid passport.</li>
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Transit Visa:</span> Proof of onward travel, sufficient funds, and a valid passport.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#D58752' }}>
              Visa Validity and Stay Duration
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Tourist Visa:</span> Valid for 30 days, extendable in Sri Lanka.</li>
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Business Visa:</span> Valid for 30 days, extendable based on the purpose of the visit.</li>
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Transit Visa:</span> Valid for 2 days, no extensions permitted.</li>
            </ul>
          </div>

         
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#D58752' }}>
              Application Process Overview
            </h3>
            <ol className="list-decimal list-inside text-gray-700">
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Complete the Online Application:</span><br />Fill out the visa application form online through the official Sri Lanka ETA portal or at an embassy/consulate.</li>
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Submit Required Documents:</span><br />Upload or submit required documents based on your visa type (passport copy, proof of travel, invitation letter for business, etc.).</li>
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Pay the Visa Fee:</span><br />Pay the visa processing fee through the online portal or at the embassy/consulate.</li>
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Receive Your Visa:</span><br />Once approved, you will receive your visa electronically (for ETA applications) or as a visa sticker (for embassy applications). Ensure that you print or carry a digital copy for your travel.</li>
            </ol>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#D58752' }}>
              Visa Fees and Processing Time
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Tourist Visa Fee:</span> Approx. $35 - $50, depending on the country of application.</li>
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Business Visa Fee:</span> Approx. $40 - $60.</li>
              <li><span className="font-semibold" style={{ color: '#D58752' }}>Transit Visa Fee:</span> Usually no fee, depending on nationality.</li>
            </ul>
            <p className="text-gray-700 mt-4"><span className="font-semibold" style={{ color: '#D58752' }}>Processing Time:</span> </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Standard processing typically takes 2-3 business days.</li>
              <li>Expedited processing may be available for an additional fee.</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#D58752' }}>
              Important Notices
            </h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Visa policies may change due to government regulations. Stay informed of the latest travel advisories.</li>
              <li>Always ensure your passport is valid for at least 6 months from the date of your arrival in Sri Lanka.</li>
            </ul>
          </div>
          <div className="mt-6">
                        <a
                            href="#" // Replace this with the actual link
                            className="bg-[#996633] hover:bg-[#815027] text-white font-semibold py-3 px-6 rounded-lg inline-flex items-center shadow-md"
                        >
                            Check the Official Page
                            <span className="ml-2">↗</span>
                        </a>
                    </div>
        </section>
      </div>
    </div>
  );
};

export default VisaInfo;
