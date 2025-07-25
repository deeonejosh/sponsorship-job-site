import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2 text-blue-900">AI-Powered Sponsorship Job Search</h1>
        <p className="text-lg text-gray-700">Find visa-sponsored jobs in the UK, Canada, and Australia</p>
      </header>

      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6 mb-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Search Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Keyword (e.g. Nurse, Developer)" className="p-3 border rounded-xl w-full" />
          <select className="p-3 border rounded-xl w-full">
            <option>Choose Country</option>
            <option>UK</option>
            <option>Canada</option>
            <option>Australia</option>
          </select>
          <Button>Search</Button>
        </div>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Sample Job Listings</h2>
        <div className="grid gap-4">
          {[1, 2, 3].map((item) => (
            <Card key={item}>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold text-blue-700">Software Engineer – Sponsorship Available</h3>
                <p className="text-gray-600">Company: TechGlobal | Location: London, UK</p>
                <p className="text-sm mt-2">This employer has a history of sponsoring skilled worker visas.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">AI-Powered Resume Builder</h2>
        <p className="text-gray-600 mb-4">Enter your experience and let our AI create a tailored resume and cover letter for visa sponsorship jobs.</p>
        <textarea className="w-full p-3 border rounded-xl mb-4" rows={4} placeholder="Enter your experience and skills..."></textarea>
        <Button>Generate Resume & Cover Letter</Button>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        &copy; 2025 AI Job Sponsor Finder. All rights reserved.
      </footer>
    </div>
  );
}
