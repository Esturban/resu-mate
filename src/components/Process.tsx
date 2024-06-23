// Process.tsx
import ProcessItem from './Process/ProcessItem';

export default function Process(): JSX.Element {
  const data = [
    {
      title: "🎯 Achievement-based",
      content: "Show off your wins. Highlight your best moments and turn your duties into eye-catching achievements that get noticed.",
    },
    {
      title: "📈 Data-driven",
      content: "Use market insights to shape your resume. Tailor it with real-time data on industry trends and what employers want.",
    },
    {
      title: "📐 Measurable Accomplishments",
      content: "Prove your worth with numbers. Turn vague claims into solid stats that show exactly what you can do.",
    },
    {
      title: "🔐 Keywords and Applicant Tracking Systems",
      content: "Beat the bots. Use the right keywords to ensure your resume passes ATS and lands on the recruiter’s desk.",
    },
  ];

  return (
    <div id="process" className="w-full my-32 px-4 lg:px-0">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">Our Process</h2>
        <hr className="border-t-2 border-gray-200"></hr>
        <h3 className="text-xl lg:text-2xl py-8 text-gray-500 text-center">
          Your Friend in Job Search 🫂
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
          {data.map((item, index) => (
            <ProcessItem key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
}