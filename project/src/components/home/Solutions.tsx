import React from 'react';
import { Eye, Download, Bell, User } from 'lucide-react';

export default function Solutions() {
  const reports = [
    { name: 'user_logs.csv', date: '03/06/2025', size: '1.2MB' },
    { name: 'system_errors.csv', date: '03/06/2025', size: '850KB' },
    { name: 'transactions.csv', date: '03/06/2025', size: '2.4MB' },
    { name: 'feedback_data.csv', date: '03/06/2025', size: '1.8MB' },
    { name: 'audit_logs.csv', date: '03/06/2025', size: '1.2MB' }
  ];

  const announcements = [
    { icon: '🎯', title: 'Webinar on AI', date: '03/03/2025' },
    { icon: '🔒', title: 'Imp Security Update', date: '03/03/2025' },
    { icon: '🎄', title: 'Holiday Announcement', date: '03/03/2025' },
    { icon: '🎯', title: 'Webinar on Cloud Computing', date: '03/03/2025' }
  ];

  const users = [
    { name: 'John Doe', role: 'Admin', date: '03/03/2025' },
    { name: 'Alice Smith', role: 'User', date: '03/03/2025' },
    { name: 'Michael Brown', role: 'Manager', date: '03/03/2025' },
    { name: 'Sarah M.', role: 'Analyst', date: '03/03/2025' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Dashboard Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-900">Latest Reports</h3>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-500 hover:text-purple-600">
                  <Bell className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-purple-600">
                  <User className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Reports List */}
              <div className="col-span-2 bg-gray-50 rounded-lg p-4">
                <table className="w-full">
                  <thead>
                    <tr className="text-sm text-gray-500">
                      <th className="text-left py-2">File Name</th>
                      <th className="text-left py-2">Date</th>
                      <th className="text-left py-2">Size</th>
                      <th className="text-right py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((report, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="py-3 text-gray-900">{report.name}</td>
                        <td className="py-3 text-gray-500">{report.date}</td>
                        <td className="py-3 text-gray-500">{report.size}</td>
                        <td className="py-3">
                          <div className="flex justify-end space-x-2">
                            <button className="p-1 text-gray-500 hover:text-purple-600">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="p-1 text-gray-500 hover:text-purple-600">
                              <Download className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Announcements */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-4">Latest Announcements</h4>
                  <div className="space-y-3">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-xl">{announcement.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{announcement.title}</p>
                          <p className="text-xs text-gray-500">{announcement.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Users */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-4">Latest Users</h4>
                  <div className="space-y-3">
                    {users.map((user, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-sm text-purple-600">{user.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500">{user.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}