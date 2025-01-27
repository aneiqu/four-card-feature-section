import "./App.css";

import calculatorIcon from "./assets/images/icon-calculator.svg";
import karmaIcon from "./assets/images/icon-karma.svg";
import supervisorIcon from "./assets/images/icon-supervisor.svg";
import teamBuilderIcon from "./assets/images/icon-team-builder.svg";

function App() {
  return (
    <div className='flex flex-col items-center justify-center text-veryDarkBlue px-8 pt-[5.3125rem] pb-[4.875rem] gap-[4.75rem]'>
      <div className='flex flex-col items-center'>
        <p className='font-extralight text-2xl sm:text-4xl'>Reliable, efficient delivery</p>
        <p className='font-semibold text-2xl sm:text-4xl mb-4'>Powered by Technology</p>
        <p className='font-normal text-base opacity-50 text-center max-w-[33.75rem]'>
          Our Artificial Intelligence powered tools use millions of project data points to ensure
          that your project is successful
        </p>
      </div>
      <div className='grid grid-cols-1 grid-rows-4 gap-6 sm:grid-rows-2 sm:grid-cols-3 sm:gap-[1.875rem]'>
        <div className='flex p-7 bg-white rounded-lg border-t-8 border-cyan drop-shadow-xl h-fit sm:row-span-2'>
          <div>
            <p className='font-semibold text-xl'>Supervisor</p>
            <p className='font-normal text-sm opacity-50'>
              Monitors activity to identify project roadblocks
            </p>
            <div className='flex justify-end mt-8 sm:mt-10'>
              <img src={supervisorIcon} />
            </div>
          </div>
        </div>
        <div className='p-7 bg-white rounded-lg border-t-8 border-red drop-shadow-xl'>
          <div>
            <p className='font-semibold text-xl'>Team Builder</p>
            <p className='font-normal text-sm opacity-50'>
              Scans our talent network to create the optimal team for your project
            </p>
            <div className='flex justify-end mt-8 sm:mt-10'>
              <img src={teamBuilderIcon} />
            </div>
          </div>
        </div>
        <div className='p-7 bg-white rounded-lg border-t-8 border-orange drop-shadow-xl sm:row-start-2 sm:col-start-2'>
          <div>
            <p className='font-semibold text-xl'>Karma</p>
            <p className='font-normal text-sm opacity-50'>
              Regularly evaluates our talent to ensure quality
            </p>
            <div className='flex justify-end mt-8 sm:mt-10'>
              <img src={karmaIcon} />
            </div>
          </div>
        </div>
        <div className='flex p-7 h-fit bg-white rounded-lg border-t-8 border-blue drop-shadow-xl sm:row-span-2 sm:col-start-3'>
          <div>
            <p className='font-semibold text-xl'>Calculator</p>
            <p className='font-normal text-sm opacity-50'>
              Uses data from past projects to provide better delivery estimates
            </p>
            <div className='flex justify-end mt-8 sm:mt-10'>
              <img src={calculatorIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
