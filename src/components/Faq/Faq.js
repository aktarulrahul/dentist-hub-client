import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import img from '../../images/dh-6.png';

const Faq = () => {
  return (
    <div className="m-3 p-2 rounded border shadow-lg md:flex justify-between items-center overflow-hidden">
      <img
        src={img}
        alt=""
        className="transition duration-500 ease-in-out transform hover:scale-105 w-1/3 hidden lg:block"
      />
      <div>
        <h2 className="text-center text-4xl text-blue-600 font-bold mt-5 mb-2">
          General Dentistry FAQs
        </h2>
        <p className="text-center text-blue-500 mb-5">
          Have a question that is not answered below? Feel free to give us a
          call and ask!
        </p>
        <Tabs>
          <TabList>
            <div className="flex flex-center mb-5 flex-wrap mx-auto">
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 1
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 2
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 3
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 4
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 5
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 6
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 7
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 8
              </Tab>
              <Tab className="my-3 mx-2 text-xl border rounded shadow-lg px-3 py-2 transition duration-500 ease-in-out transform hover:scale-110 cursor-pointer">
                FAQ 9
              </Tab>
            </div>
          </TabList>
          <div className="mx-3 border rounded shadow px-4 py-2 my-3">
            <TabPanel className="mx-3">
              <h2 className="font-bold mb-2 text-xl">
                FAQ 1. What is periodontal disease?
              </h2>
              <p>
                Periodontal disease is inflammation and infection of the gums
                and supporting bone structure, which if left untreated, can
                cause permanent jaw bone destruction and possible tooth loss.
                Untreated periodontal disease has been linked to increased risk
                for conditions such as heart disease, stroke, low birth weight
                babies, pre-term delivery, respiratory disease, and prostate
                cancer. An advanced stage of periodontal disease exhibits
                inflamed gums pulling away from your bone and teeth. Other signs
                of periodontal disease include:
              </p>
              <ul className="mx-4 list-disc text-gray-500 my-3 ml-12">
                <li>Bad breath</li>
                <li>Red or swollen gums</li>
                <li>Loose teeth or teeth that have moved</li>
                <li>Sensitive teeth</li>
                <li>Pus coming from around the teeth</li>
                <li>Pain when chewing</li>
                <li>Tender gums</li>
                <li>Bleeding gums</li>
              </ul>
              <p>
                Treatment of early periodontal disease can be performed
                in-office. However, advanced stages may require surgery.
                Periodontal disease can be prevented and treated successfully by
                seeing your dentist and dental hygienist regularly and following
                recommended care plans.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 2. What should I do if I require premedication?{' '}
              </h2>
              <p>
                Please be sure to request a prescription prior to your
                appointment, or if you are unsure, contact us and we can help.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 3. What do I need to bring to my first appointment?{' '}
              </h2>
              <p>
                Please bring the following items with you to your appointment:
                Patient Information Form Dental Insurance Card (if applicable)
                Identification such as Driver's License, Military ID or State ID
                Patient Health History Form HIPAA Consent Form Patient
                Authorization Form
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 4. What are cavity-fighting sealants?{' '}
              </h2>
              <p>
                The American Dental Association cites sealants as an effective
                weapon in the arsenal against tooth decay. Sealants are a thin
                coating painted on chewing surfaces of molars and premolars.
                Dental sealants act as a barrier, protecting your teeth against
                decay-causing bacteria. Sealants have proven effective with both
                adults and children, but are most commonly used with children.
                Despite the fact that sealants are about half the cost of
                fillings, only a small percentage of school-aged children have
                sealants on their permanent teeth. Ask your dentist whether
                sealants are a good choice for you or your children.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 5. Why should I go to the dentist regularly?{' '}
              </h2>
              <p>
                Many people do not see a dentist on a regular basis. They only
                go when they have a problem. This is known as "crisis treatment"
                versus "preventive treatment." While these patients may feel
                they are saving money, it often ends up costing much more in
                dollars and time. This is because many dental problems do not
                have symptoms until they reach the advanced stages of the
                disease process. An example is tooth decay. It is typical to
                hear, "Nothing hurts... I don't have any problems." Tooth decay
                often does not hurt until it gets close to the nerve of the
                tooth. It is not uncommon to see a patient with a huge cavity
                who has never felt a thing. The dentist can usually detect a
                cavity 3-4 years before it develops any symptoms. This early
                detection can help you prevent root canal treatment.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 6. Why should I floss, isn't brushing enough?{' '}
              </h2>
              <p>
                Flossing reduces the number of bacteria in your mouth. There are
                millions of these microscopic creatures feeding on food
                particles left on your teeth. These bacteria live in plaque
                which can be removed by flossing. Brushing your teeth gets rid
                of some of the bacteria in your mouth. Flossing gets rid of the
                bacteria the toothbrush can't get to. That's the bacteria hiding
                in the tiny spaces between your teeth. If you do not floss, you
                allow plaque to remain between your teeth. Eventually it hardens
                into tartar. Plaque can be removed by brushing. Only the dentist
                can remove tartar. Ask your dentist to show you the proper way
                to floss. You will both notice the difference at the next
                cleaning appointment.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 7. How can I get my kids to brush their teeth?{' '}
              </h2>
              <p>
                Make it fun! If you are enthusiastic about brushing your teeth,
                your children will also be enthusiastic. Children want to do the
                things their parents do. If your children see you brushing your
                teeth and displaying good dental habits, they will follow. Ask
                the dentist for other creative ways to get children to brush
                their teeth. Getting your children to brush starts with taking
                them to the dentist at an early age. All children should be seen
                by their first birthday or 6 months after the eruption of the
                first tooth.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 8. How can I prevent cavities?{' '}
              </h2>
              <p>
                Always spend two to three minutes brushing your teeth. It takes
                that long to get rid of the bacteria that destroy tooth enamel.
                Do not brush too hard. It takes very little pressure to remove
                bacteria and plaque. Floss at least once a day. Flossing is the
                only way to get bacteria from between your teeth. Watch the
                sugar you eat. There is sugar in candy, fruits, crackers and
                chips. These are the foods that the bacteria in your mouth like
                best. Be mindful of foods like raisins and peanut butter that
                stick to your teeth. They can provide a constant supply for the
                bacteria eating into your teeth. Try to minimize the times
                during the day when sweet items are eaten and brush your teeth
                afterwards. If you cannot brush after a meal, rinse your mouth
                with water - which can help to remove food from your teeth.
                Chewing sugarless gum after a meal can also help. Chewing
                deskulates the flow of your saliva which acts as a natural
                plaque-fighting substance. And do not forget your regular dental
                visits. Good dental habits will go a long way toward a no-cavity
                visit.
              </p>
            </TabPanel>
            <TabPanel>
              <h2 className="font-bold mb-2 text-xl">
                FAQ 9. What is fluoride and why is it important to dental
                health?{' '}
              </h2>
              <p>
                Fluoride is a mineral that occurs naturally in many foods and in
                water. Some natural sources of fluoride are brewed tea, canned
                fish, cooked kale and spinach, apples, and skim milk. Some city
                water contains fluoride, so by drinking tap water you will
                acquire fluoride. If drinking water does not have fluoride,
                supplements are available. The lack of exposure to fluoride
                places individuals of any age at risk for dental decay. Fluoride
                is important to dental health because it helps prevent tooth
                decay by making your tooth enamel more resistant to acid attacks
                from plaque bacteria in your mouth. Studies have shown that
                children who consumed fluoridated water from birth had less
                dental decay. Fluoride can reverse early decay and help prevent
                osteoporosis, a disease that causes degenerative bone loss. Talk
                to your dentist or dental hygienist about whether you're getting
                the daily amount of fluoride you need.
              </p>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Faq;
