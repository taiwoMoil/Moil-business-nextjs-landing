"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import SearchBarsOnTop from "../components/search";
import HorizontalNFilterIcon from "../components/horizontal_btn";
import DashboardQueryItem from "../components/dashboard_query_item";
import { baseURL, workerBaseUrl } from "../../common/constants/baseUrl";
import PaginationBtn from "../components/paginate_btn";
import BackButton from "../components/back_button";
import LoaderModal from "../components/loader_modal";

interface JobPost {
  _id: string;
  jobTitle: string;
  logo: string;
  companyName: string;
  jobType: string;
  applicationDeadline: string;
  location: {
    city: string;
    state: string;
  };
  custom_name: string;
  indeed?: boolean;
}

interface SearchJobFieldProps {
  accType?: string;
}

function SearchJobField({ accType = "client" }: SearchJobFieldProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const title = searchParams?.get("title") || "";
  const location = searchParams?.get("location") || "";
  const getPage = searchParams?.get("page") || "1";
  const pageLang = searchParams?.get("lg") || "en";

  const [ourSearchLoading, setOurSearchLoading] = useState(false);
  const [jobListData, setJobListData] = useState<JobPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [initialSearchDone, setInitialSearchDone] = useState(false);
  const [ourError, setOurError] = useState("");
  const [totalJobs, setTotalJobs] = useState(0);
  const [searchJob, setSearchJob] = useState(title);
  const [searchLocation, setSearchLocation] = useState(location);

  const handleCancelJobSearch = () => {
    setSearchJob("");
  };

  const handleCancelLocationSearch = () => {
    setSearchLocation("");
  };

  const handleOverAllSearch = async (page = currentPage) => {
    setOurSearchLoading(true);
    setOurError("");

    const params = new URLSearchParams();
    if (searchJob) params.set("title", searchJob.toLowerCase().trim());
    if (searchLocation) params.set("location", searchLocation.toLowerCase().trim());
    params.set("page", page.toString());
    params.set("lg", pageLang);

    // Update URL without reloading the page
    router.push(`/candidate/searchjob?${params.toString()}`, { scroll: false });

    try {
      const queryParams = new URLSearchParams();
      if (searchJob) queryParams.set("title", searchJob.toLowerCase().trim());
      if (searchLocation) queryParams.set("location", searchLocation.toLowerCase().trim());
      queryParams.set("page", page.toString());
      queryParams.set("limit", "15");
      queryParams.set("flag", "Client");

      const response = await fetch(`${baseURL}/api/job/search_job_posts?${queryParams}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${typeof window !== 'undefined' ? localStorage.getItem("token") : ''}`,
        },
      });

      const data = await response.json();

      if (data.statusCode === 200 && data.success) {
        setJobListData(data.data["Job posts"] || []);
        setTotalPages(data.data?.number_of_pages || 1);
        setTotalJobs(data.data?.number_of_matches || 0);
      } else {
        setJobListData([]);
        setTotalJobs(0);
        setOurError(data.message || "No records match this search criteria");
      }
    } catch (error) {
      console.error("Search error:", error);
      setOurError("An error occurred while searching. Please try again.");
      setJobListData([]);
      setTotalJobs(0);
    } finally {
      setOurSearchLoading(false);
    }
  };

  // Set initial state from URL params
  useEffect(() => {
    setSearchJob(title);
    setSearchLocation(location);
    setCurrentPage(parseInt(getPage, 10) || 1);
    setInitialSearchDone(true); // Mark that we are ready for the first search
  }, [title, location, getPage]);
  // Trigger search when state is ready or when dependencies change
  useEffect(() => {
    if (initialSearchDone) {
      handleOverAllSearch(currentPage);
    }
  }, [currentPage, initialSearchDone]);

  return (
    <>
      <div className="px-6 py-9 flex flex-col gap-6 max-w-[993px] w-full mx-auto">
        <div className="flex items-center gap-4">
          <BackButton className="" onClick={() => router.push("/")} />
          <h1 className="tablet:font-medium text-xl font-normal tablet:text-[28px] text-black text-opacity-60">
            Filter your job preferences
          </h1>
        </div>

        <SearchBarsOnTop
          JobListData={jobListData}
          searchJob={searchJob}
          setSearchJob={setSearchJob}
          searchLocation={searchLocation}
          setSearchLocation={setSearchLocation}
          HandleCancelJobSearch={handleCancelJobSearch}
          HandleCancelLocationSearch={handleCancelLocationSearch}
          HandleOverAllSearch={handleOverAllSearch}
          OurSearchLoading={ourSearchLoading}
          AcctType={accType}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <div>
          <HorizontalNFilterIcon />
          <p className="mt-[8px] pl-[26px] text-base font-normal text-black text-opacity-60">
            Filter result
          </p>
        </div>

        {ourSearchLoading ? null : (
          <p className="mt-4 text-xl font-normal tablet:text-[28px] tablet:font-medium text-black text-opacity-60">
            <span>{jobListData.length} {totalJobs !== 0 ? `out of ${totalJobs}` : null}</span> results found
          </p>
        )}

        <p className="flex items-center text-xs font-small tablet:text-[18px] tablet:font-normal text-black text-opacity-60">
          <img 
            src='https://res.cloudinary.com/drlcisipo/image/upload/v1705704152/Website%20images/small_logo_mqnwoo.png' 
            alt="moil logo" 
            className="w-[30px] h-[20px] mr-2" 
          />
          <span>One click apply job</span>
        </p>

        <div className="grid grid-cols-1 tablet:grid-cols-2 tablet:gap-x-4 ipad:grid-cols-3 gap-y-6">
          {jobListData.map((item, index) => (
            <DashboardQueryItem
              key={item._id || index}
              experienceLevel=""
              jobPosition={item.jobTitle}
              profilePics={item.logo}
              employer={item.companyName}
              jobType={item.jobType}
              recruitmentDuration={item.applicationDeadline}
              JobLocation={`${item.location.city}, ${item.location.state}`}
              indeed={item.indeed}
              jobUrl={`${workerBaseUrl}/jobs/${item.custom_name}?lg=${pageLang}`}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <PaginationBtn
            totalPages={totalPages}
            currentPage={currentPage}
            onNextPage={() => currentPage < totalPages && setCurrentPage(prev => prev + 1)}
            onPrevPage={() => currentPage > 1 && setCurrentPage(prev => prev - 1)}
            onSelectPage={(selectedPage: number) => setCurrentPage(selectedPage)}
          />
        )}

        {ourSearchLoading && <LoaderModal text="Getting search result..." />}
      </div>
    </>
  );
}

export default SearchJobField;