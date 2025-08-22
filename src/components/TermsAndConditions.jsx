import React from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center text-gray-900 mb-10 sm:mb-14 leading-tight">
          Terms and Conditions
        </h1>

        {/* Sections */}
        <div className="space-y-12 sm:space-y-14 text-gray-700 leading-relaxed text-base sm:text-lg">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              1. Introduction
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              Welcome to <strong>Sri Yantra Tech</strong>. By accessing our
              website or using our services, you agree to be bound by these
              Terms and Conditions. If you do not agree, please discontinue the
              use of our services immediately.
            </p>
          </section>

          {/* 2. Definitions */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              2. Definitions
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              “Company,” “We,” “Us,” or “Our” refers to{" "}
              <strong>Sri Yantra Tech</strong>. “Client,” “You,” or “Your”
              refers to any individual or entity engaging with our services.
              “Services” refers to IT solutions including but not limited to
              software development, web applications, mobile applications, cloud
              solutions, digital consulting, and related offerings.
            </p>
          </section>

          {/* 3. Use of Services */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              3. Use of Services
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              You agree to use our services solely for lawful purposes. Clients
              are responsible for safeguarding account credentials, project
              information, and all communications. Misuse of services, including
              hacking, spamming, or unauthorized exploitation, is strictly
              prohibited.
            </p>
          </section>

          {/* 4. Intellectual Property */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              4. Intellectual Property
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              All source code, UI/UX designs, and deliverables created by Sri
              Yantra Tech remain the intellectual property of the Company unless
              explicitly transferred in writing. Clients retain ownership of
              original branding, trademarks, and content supplied by them.
              Unauthorized reproduction, redistribution, or resale of our work
              is strictly prohibited.
            </p>
          </section>

          {/* 5. Payments and Fees */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              5. Payments and Fees
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              All fees are outlined in the service agreement or official
              proposal. Payments must be made promptly as per agreed timelines.
              Delayed payments may result in suspension of services. Unless
              otherwise agreed, all payments are non-refundable.
            </p>
          </section>

          {/* 6. Project Delivery */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              6. Project Delivery
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              Project timelines will be mutually defined before commencement.
              Delays caused by the client, such as unavailability of required
              content, assets, or feedback, may affect deadlines. Sri Yantra
              Tech is not liable for delays arising from third-party
              dependencies, hosting providers, or technical failures beyond our
              control.
            </p>
          </section>

          {/* 7. Third-Party Services */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              7. Third-Party Services
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              Certain services may involve integration with third-party APIs,
              plugins, or platforms. While we ensure compatibility, Sri Yantra
              Tech is not liable for disruptions, downtime, or losses caused by
              external providers.
            </p>
          </section>

          {/* 8. Confidentiality */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              8. Confidentiality
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              Both parties agree to maintain confidentiality of all proprietary
              and sensitive information exchanged during projects. Disclosure is
              only permitted with prior written consent or where required by
              law.
            </p>
          </section>

          {/* 9. Limitation of Liability */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              9. Limitation of Liability
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              Sri Yantra Tech shall not be held liable for indirect, incidental,
              or consequential damages. In any case, liability shall not exceed
              the total fees paid by the client for the services rendered.
            </p>
          </section>

          {/* 10. Warranties and Disclaimers */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              10. Warranties and Disclaimers
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              Services are provided “as is” without warranties of any kind.
              While we strive for accuracy and quality, we do not guarantee that
              our services will be uninterrupted, error-free, or fully meet all
              client expectations unless specifically stated.
            </p>
          </section>

          {/* 11. Termination */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              11. Termination
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              Either party may terminate an agreement with prior written notice.
              Termination does not absolve clients of outstanding payment
              obligations. Work completed until the termination date shall be
              invoiced accordingly.
            </p>
          </section>

          {/* 12. Governing Law */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              12. Governing Law
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. All disputes shall fall under the exclusive
              jurisdiction of the courts located in Hyderabad, Telangana, India.
            </p>
          </section>

          {/* 13. Amendments */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              13. Amendments
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              Sri Yantra Tech reserves the right to amend these Terms and
              Conditions at any time without prior notice. Continued use of our
              services constitutes acceptance of the latest version.
            </p>
          </section>

          {/* 14. Contact Information */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 inline-block relative mb-3">
              14. Contact Information
              <span className="block w-14 sm:w-16 h-1 bg-blue-500 rounded-full mt-2"></span>
            </h2>
            <p>
              For any queries regarding these Terms, please contact us:
              <br />
              📧 Email: sriyantratech1@gmail.com
              <br />
              📞 Phone: +91-7013540986
              <br />
              🌐 Website: www.sriyantratech.com
            </p>
          </section>
        </div>
      </div>

      {/* Floating Home Button */}
      <motion.button
        onClick={goToHome}
        aria-label="Go to Home"
        className="fixed bottom-6 sm:bottom-8 right-4 sm:right-6 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:from-indigo-700 hover:to-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        initial={{ opacity: 0, y: 60, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.7,
          type: "spring",
          stiffness: 130,
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Responsive icon sizes */}
        <Home className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
      </motion.button>
    </div>
  );
};

export default TermsAndConditions;
