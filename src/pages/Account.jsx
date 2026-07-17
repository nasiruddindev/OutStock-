import React, { useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

const Account = () => {



  return (
    <section className=" py-20 ">
      {/* Container restricted to 1170px max width */}
      <Container>
        {/* Top Header Row: Breadcrumb & Welcome Text */}
        <div className="flex justify-between items-center mb-16 text-sm">
          <div className="flex items-center space-x-2">
            <Link to="/">
              <span className="text-gray-400 hover:text-primary">Home</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-black font-medium">My Account</span>
          </div>
          <div>
            <span>Welcome! </span>
            <span className="text-primary font-medium font-pop">Md Rimel</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="space-y-6 text-sm">
            {/* Group 1: Manage My Account */}
            <div>
              <h3 className="font-semibold text-black mb-3">
                Manage My Account
              </h3>
              <ul className="pl-6 space-y-2">
                <li className="text-primary font-medium block">My Profile</li>
                <li className="text-gray-500 hover:text-black transition-colors block">
                  Address Book
                </li>
                <li className="text-gray-500 hover:text-black transition-colors block">
                  My Payment Options
                </li>
              </ul>
            </div>

            {/* Group 2: My Orders */}
            <div>
              <h3 className="font-semibold text-black mb-3">My Orders</h3>
              <ul className="pl-6 space-y-2">
                <li className="text-gray-500 hover:text-black transition-colors block">
                  My Returns
                </li>
                <li className="text-gray-500 hover:text-black transition-colors block">
                  My Cancellations
                </li>
              </ul>
            </div>

            {/* Group 3: My WishList */}
            <div>
              <h3 className="font-semibold text-black hover:text-primary">
                My WishList
              </h3>
            </div>
          </aside>

          {/* Right Main Content (Profile Edit Form Container) */}
          <main className="md:col-span-3">
            <div className="bg-white p-8 sm:p-12 rounded-md shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] border border-gray-100">
              <h2 className="text-xl font-medium text-primary mb-6">
                Edit Your Profile
              </h2>


                {/* Name Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Last Name
                    </label>
                    <Input
                      type="text"

                      placeholder="Rimel"
                    />
                  </div>
                </div>

                {/* Email & Address Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Email
                    </label>
                    <Input
                      type="email"

                      placeholder="rimel1111@gmail.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Address
                    </label>
                    <Input
                      type="text"

                      placeholder="Kingston, 5236, United State"
                    />
                  </div>
                </div>

                {/* Password Section */}
                <div className="space-y-4 pt-2">
                  <label className="block text-sm font-medium text-black mb-2">
                    Password Changes
                  </label>
                  <Input
                    type="password"
                    name="currentPassword"

                    className="w-full bg-back! rounded"
                    placeholder="Current Passwod"
                  />
                  <Input
                    type="password"
                    name="newPassword"

                    className="w-full bg-back! rounded"
                    placeholder="New Passwod"
                  />
                  <Input
                    type="password"
                    name="confirmPassword"

                    className="w-full bg-back! rounded"
                    placeholder="Confirm New Passwod"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end space-x-8 pt-4">
                  <button
                    type="button"
                    className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <Button text="Save Changes"/>
                </div>

            </div>
          </main>
        </div>
      </Container>
    </section>
  )
}

export default Account
