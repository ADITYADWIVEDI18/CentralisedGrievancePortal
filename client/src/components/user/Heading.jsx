
const Heading = () => {
    return (
        <div className="z-2 mx-auto flex h-max flex-col items-center justify-center bg-[#f6f6f6] pt-44 lg:rounded-b-[45px]">
            <div className="flex h-max w-full flex-col items-center justify-between gap-y-8 px-4 sm:px-12 lg:gap-y-12 lg:px-16 xl:max-w-[1440px]">
                <h1
                    className={`whitespace-nowrap text-[45px] font-black uppercase leading-tight  text-purple-600 sm:text-[65px] md:text-[82px] lg:text-[105px] `}
                >
                    Grievance Portal
                </h1>
                <div
                    className={`mx-4 w-auto rounded-2xl bg-white px-6 py-8 text-[19px] leading-[2.3rem] text-[#2C2C2C]/80 sm:rounded-[35px] sm:px-16 sm:py-10 sm:text-[24px] sm:leading-[2.6rem] md:text-center md:text-[30px] md:leading-[2.9rem] lg:mx-4 lg:rounded-[35px] lg:px-36 lg:py-16 xl:w-[1120px] xl:px-40`}
                >
                    <p className="tracking-[0.01em] lg:leading-[3.75rem]">
                        Empowering voices, resolving issues—A grievance redressal system ensures fairness, transparency, and accountability for a better and just society.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Heading;
