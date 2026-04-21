import { motion } from 'framer-motion';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 backdrop-blur-md"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-400">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Data Collection</h2>
              <p>
                We collect information you provide directly to us, such as when you book a call, fill out a contact form, or communicate with us via WhatsApp. This may include your name, email address, phone number, and business details.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. User Information</h2>
              <p>
                Your information is used to provide and maintain our service, notify you about changes, allow you to participate in interactive features, and provide customer support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Contact Form Privacy</h2>
              <p>
                Data submitted through contact forms is stored securely and used only for the purpose of responding to your inquiries. We do not sell or share this data with unauthorized third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Third-party Tools</h2>
              <p>
                We may employ third-party companies and individuals (e.g., Google Analytics, Meta Pixel) to facilitate our service, provide the service on our behalf, or assist us in analyzing how our service is used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. User Rights</h2>
              <p>
                You have the right to access, update or delete the information we have on you. Whenever made possible, you can access, update or request deletion of your personal data directly within your account settings section.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Details</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@mademyads.com
                <br />
                WhatsApp: +1 (234) 567-890
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
