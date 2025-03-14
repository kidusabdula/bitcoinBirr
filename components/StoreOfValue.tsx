'use client';

import React from 'react';
import { motion } from 'framer-motion';

const StoreOfValue: React.FC = () => {
  return (
    <div className="bg-[#1d9374] text-white py-10 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">03 STORE OF VALUE</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 text-lg">
            <div className="lg:col-span-2 space-y-4 p-4">
              <p>
                Depending on whether you are a farmer, a young student, or an
                entrepreneur, and also dependent on financial privileges afforded to you
                via your passport, the strategies used to store value may widely differ.
              </p>

              <p>
                As a farmer, you might choose to purchase livestock. Or insure against
                a bad season with commodity grains or investments and local/
                community-led financial products. Many of these are often in traditional
                form, which limits digital ability to scale beyond community.
              </p>

              <p>
                An entrepreneur may purchase informal shares of a small start up. Or
                they may choose to purchase a few cars or properties for rental and tax
                related purposes. And an entrepreneur may also choose to engage in
                spending habits that are intangible and often difficult to account for as
                value-adding.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-4 p-4">
              <p>
                A young student at Addis Ababa University may only receive a small
                monthly stipend. Given the demand to stay liquid in case of emergency,
                and in efforts to keep in near to unexpected transaction layers, all
                of that value may be kept at a brick and mortar bank. As the student
                becomes more mature, it would be smart to start purchase assets, both
                appreciating and dividend producing.
              </p>

              <p>
                Someone with financial privilege, often assigned through passport and
                visa-like mechanisms by the State, is capable to do so much more.
                USD and EUR, in addition to Gold and various financial products and
                insurance services. And now, the ability to buy and hold or sell bitcoin.
                It is not a wild prediction to say those with financial privilege will be
                winning a race we haven't really started yet. The way we store value
                in Ethiopia needs to change, for everyone, equally at the same time. If
                this does not happen quickly, as time is the most precious asset, then
                a slow financial injustice will brew against a significant majority of the
                population.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StoreOfValue;