import React, { useState, useEffect } from 'react';
import { 
  Moon, 
  Sun, 
  Shield, 
  Eye, 
  EyeOff, 
  Globe, 
  Bell, 
  Download, 
  Trash2, 
  Lock,
  Search,
  Zap,
  Cookie,
  ShieldAlert,
  Settings,
  Chrome
} from 'lucide-react';

function App() {
 const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [settings, setSettings] = useState({
    blockAds: true,
    privacyMode: true,
    savePasswords: false,
    enableNotifications: true,
    autoDownload: false,
    doNotTrack: true,
    clearCookies: false,
    hardwareAcceleration: true,
    blockPopups: true,
    secureConnection: true
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const settingsSections = [
    {
      title: "Appearance",
      items: [
        {
          key: "darkMode",
          label: "Dark Mode",
          description: "Switch between light and dark theme",
          icon: darkMode ? Moon : Sun,
          value: darkMode,
          onChange: () => setDarkMode(!darkMode),
          color: "text-yellow-500"
        }
      ]
    },
    {
      title: "Privacy & Security",
      items: [
        {
          key: "privacyMode",
          label: "Privacy Mode",
          description: "Enhanced tracking protection and private browsing",
          icon: Eye,
          value: settings.privacyMode,
          onChange: () => toggleSetting('privacyMode'),
          color: "text-purple-500"
        },
        {
          key: "blockAds",
          label: "Block Ads",
          description: "Automatically block intrusive advertisements",
          icon: ShieldAlert,
          value: settings.blockAds,
          onChange: () => toggleSetting('blockAds'),
          color: "text-red-500"
        },
        {
          key: "doNotTrack",
          label: "Do Not Track",
          description: "Send Do Not Track requests with your browsing traffic",
          icon: EyeOff,
          value: settings.doNotTrack,
          onChange: () => toggleSetting('doNotTrack'),
          color: "text-blue-500"
        },
        {
          key: "blockPopups",
          label: "Block Pop-ups",
          description: "Prevent pop-up windows from opening",
          icon: Shield,
          value: settings.blockPopups,
          onChange: () => toggleSetting('blockPopups'),
          color: "text-green-500"
        },
        {
          key: "secureConnection",
          label: "Always Use HTTPS",
          description: "Automatically upgrade to secure connections",
          icon: Lock,
          value: settings.secureConnection,
          onChange: () => toggleSetting('secureConnection'),
          color: "text-indigo-500"
        }
      ]
    },
    {
      title: "Content & Data",
      items: [
        {
          key: "savePasswords",
          label: "Save Passwords",
          description: "Allow Qura to save and autofill passwords",
          icon: Lock,
          value: settings.savePasswords,
          onChange: () => toggleSetting('savePasswords'),
          color: "text-orange-500"
        },
        {
          key: "clearCookies",
          label: "Auto-clear Cookies",
          description: "Clear cookies and site data when you close the browser",
          icon: Cookie,
          value: settings.clearCookies,
          onChange: () => toggleSetting('clearCookies'),
          color: "text-pink-500"
        },
        {
          key: "autoDownload",
          label: "Auto-download Files",
          description: "Download files without asking where to save them",
          icon: Download,
          value: settings.autoDownload,
          onChange: () => toggleSetting('autoDownload'),
          color: "text-teal-500"
        }
      ]
    },
    {
      title: "System",
      items: [
        {
          key: "enableNotifications",
          label: "Enable Notifications",
          description: "Allow websites to show notifications",
          icon: Bell,
          value: settings.enableNotifications,
          onChange: () => toggleSetting('enableNotifications'),
          color: "text-cyan-500"
        },
        {
          key: "hardwareAcceleration",
          label: "Hardware Acceleration",
          description: "Use hardware acceleration when available",
          icon: Zap,
          value: settings.hardwareAcceleration,
          onChange: () => toggleSetting('hardwareAcceleration'),
          color: "text-yellow-600"
        }
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-10 border-b backdrop-blur-sm transition-colors ${
        darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'
      }`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center ${
                darkMode ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-purple-500'
              }`}>
                <Chrome className="text-white" size={24} />
              </div>
              <div>
                <h1 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Qura Browser
                </h1>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Settings & Preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <div className={`relative rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`} size={20} />
            <input
              type="text"
              placeholder="Search settings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 sm:py-4 rounded-lg outline-none transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500' 
                  : 'bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500'
              }`}
            />
          </div>
          {searchQuery && (
            <div className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Showing results for "{searchQuery}"
            </div>
          )}
        </div>

        {/* Settings Sections */}
        <div className="space-y-6 sm:space-y-8">
          {settingsSections.map((section, sectionIndex) => {
            // Filter items based on search query
            const filteredItems = section.items.filter(item => 
              item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              section.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

            // Don't show section if no items match
            if (filteredItems.length === 0 && searchQuery) return null;

            return (
              <section key={sectionIndex} className={`rounded-xl shadow-sm overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}>
                <div className={`px-4 sm:px-6 py-3 sm:py-4 border-b ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <h2 className={`text-lg sm:text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {section.title}
                  </h2>
                </div>

                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredItems.map((item, itemIndex) => {
                    // Highlight matched text
                    const highlightText = (text) => {
                      if (!searchQuery) return text;
                      const regex = new RegExp(`(${searchQuery})`, 'gi');
                      const parts = text.split(regex);
                      return parts.map((part, i) => 
                        regex.test(part) ? (
                          <mark key={i} className={`${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-yellow-200 text-gray-900'} px-1 rounded`}>
                            {part}
                          </mark>
                        ) : part
                      );
                    };

                    return (
                      <div 
                        key={itemIndex}
                        className={`px-4 sm:px-6 py-4 sm:py-5 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors`}
                      >
                        <div className="flex items-start sm:items-center justify-between gap-4">
                          <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              darkMode ? 'bg-gray-700' : 'bg-gray-100'
                            }`}>
                              <item.icon className={item.color} size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className={`font-semibold mb-1 text-sm sm:text-base ${
                                darkMode ? 'text-white' : 'text-gray-900'
                              }`}>
                                {highlightText(item.label)}
                              </h3>
                              <p className={`text-xs sm:text-sm ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {highlightText(item.description)}
                              </p>
                            </div>
                          </div>

                          {/* Toggle Switch */}
                          <button
                            onClick={item.onChange}
                            className={`relative inline-flex h-6 w-11 sm:h-7 sm:w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                              darkMode ? 'focus:ring-offset-gray-800' : 'focus:ring-offset-white'
                            } ${
                              item.value 
                                ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                                : darkMode ? 'bg-gray-600' : 'bg-gray-300'
                            }`}
                            role="switch"
                            aria-checked={item.value}
                          >
                            <span
                              className={`pointer-events-none inline-block h-5 w-5 sm:h-6 sm:w-6 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                                item.value ? 'translate-x-5 sm:translate-x-7' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* No Results Message */}
          {searchQuery && settingsSections.every(section => 
            section.items.filter(item => 
              item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              section.title.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0
          ) && (
            <div className={`text-center py-12 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
              <Search className={`mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-300'}`} size={48} />
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                No results found
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Try searching with different keywords
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className={`mt-8 sm:mt-12 p-4 sm:p-6 rounded-xl ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } shadow-sm`}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors ${
              darkMode 
                ? 'bg-red-600 hover:bg-red-700 text-white' 
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}>
              <Trash2 size={18} />
              <span className="text-sm sm:text-base">Clear All Data</span>
            </button>
            <button className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
            }`}>
              <Settings size={18} />
              <span className="text-sm sm:text-base">Advanced Settings</span>
            </button>
          </div>
          <p className={`mt-4 text-xs sm:text-sm text-center ${
            darkMode ? 'text-gray-500' : 'text-gray-600'
          }`}>
            Qura Browser v2.5.0 • Last updated: November 2025
          </p>
        </div>
      </main>
    </div>
  );
}
export default App;