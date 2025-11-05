// Comprehensive cookie dictionary with common cookie names and their purposes
const cookieDictionary = {
    // Google Analytics
    '_ga': 'Google Analytics - User ID',
    '_ga_': 'Google Analytics 4 - Property ID',
    '_gid': 'Google Analytics - Session ID',
    '_gat': 'Google Analytics - Request throttling',
    '_gac_': 'Google Analytics - Campaign tracking',
    'AMP_TOKEN': 'Google Analytics - AMP token',
    '_g': 'Google - Analytics (base)',

    // Google Advertising & Tracking
    'NID': 'Google - Ads personalization',
    'ANID': 'Google - Advertising ID',
    'IDE': 'Google DoubleClick - Ad ID',
    '__Secure-ENID': 'Google - Encrypted Network ID',
    'gclid': 'Google Click ID - Ad tracking',
    'sgtid': 'Google - Secure gclid',
    'gbraid': 'Google - Conversion ID (web)',
    'wbraid': 'Google - Conversion ID (app)',
    'gclaw': 'Google - Click Assisted Conversion',
    'dv': 'Google - Data validation',
    '__gpi': 'Google - Publisher Insights tracking',
    '__gsas': 'Google - Signed ads verification',
    '__gads': 'Google Ad Manager/AdSense - Ad serving and measurement',

    // Google Cookies & Services
    'NID': 'Google - Network ID',
    'SameSite': 'Google - Same-site policy',
    '__Secure-1PSID': 'Google - Secure first-party session ID',
    '__Secure-1PSIDTS': 'Google - Secure first-party session ID timestamp',
    '__Secure-3PSID': 'Google - Secure third-party session ID',
    '__Secure-3PSIDTS': 'Google - Secure third-party session ID timestamp',
    '__Secure-1PAPISID': 'Google - Secure first-party API SID',
    '__Secure-3PAPISID': 'Google - Secure third-party API SID',
    'APISID': 'Google - API Session ID',
    'HSID': 'Google - HTTPS Session ID',
    'SAPISID': 'Google - Secure API Session ID',
    'SIDCC': 'Google - Session ID Cookie Container',
    '_GRECAPTCHA': 'Google reCAPTCHA - Verification',
    'rc::a': 'Google reCAPTCHA - Session',
    'rc::b': 'Google reCAPTCHA - Challenge',
    'rc::c': 'Google reCAPTCHA - Challenge response',
    'rc::f': 'Google reCAPTCHA - Fraud detection',
    'rc::g': 'Google reCAPTCHA - Geo-location',
    'rc::h': 'Google reCAPTCHA - Challenge hash',

    // Google Search & YouTube
    'PREF': 'Google Search - Preferences',
    'GBRAID': 'YouTube - Google Brand ID',
    'VISITOR_INFO1_LIVE': 'YouTube - Visitor info',
    'YSC': 'YouTube - Session ID',
    'CONSENT': 'Google - Consent tracking',
    'ANID': 'Google - Anonymous ID',
    'OGPC': 'Google - Optimization process',

    // Facebook Pixels & Tracking
    '_fbp': 'Facebook Pixel - Browser ID',
    'fr': 'Facebook - Ad targeting',
    'datr': 'Facebook - Security/fraud detection',
    'sb': 'Facebook - Security',
    'wd': 'Facebook - Browser properties',
    '_fbc': 'Facebook Pixel - Click ID',
    'c_user': 'Facebook - User ID',
    'xs': 'Facebook - Session ID',
    'spin': 'Facebook - Security key',
    'presence': 'Facebook - User presence',
    'dbg': 'Facebook - Debug mode',
    'locale': 'Facebook - User locale',
    'x-fb': 'Facebook - Internal tracking',
    'fbm_': 'Facebook Messenger - Session',
    'fbsr_': 'Facebook - Session Response',
    '_fb': 'Facebook - Tracking (base)',

    // Meta/Instagram Cookies
    'ig_did': 'Instagram - Device ID',
    'ig_nrcb': 'Instagram - Non-rate-controlled button',
    'rur': 'Meta - Router location',
    'logged_in': 'Meta - Login status',
    'ps_l': 'Meta - Login page show',
    'ps_n': 'Meta - Login page show number',
    'csm': 'Meta - Checksum',
    'act': 'Meta - Account tracker',
    'pxrc': 'Meta - Pixel response code',
    'tr': 'Meta - Pixel conversion',
    'fbp': 'Meta - First-party business',
    'fbc': 'Meta - First-party conversion',

    // WhatsApp Cookies
    'wa': 'WhatsApp - Session',
    'wa_rc': 'WhatsApp - Reconnect token',
    'wa_expires': 'WhatsApp - Session expiry',

    // Threads Cookies  
    'threads_': 'Threads - Session tracking',
    'threads_id': 'Threads - User ID',

    // Microsoft/LinkedIn
    '_U': 'LinkedIn - User ID',
    'LIDC': 'LinkedIn - Data center routing',
    'li_gc': 'LinkedIn - Consent cookie',
    'UserMatchHistory': 'LinkedIn - Advertising',
    'mrt': 'Microsoft - Ad targeting',

    // Amazon
    '_amzn-sc': 'Amazon - Session cookie',
    'aws-creds': 'Amazon - AWS credentials',
    'x-amzn-RequestId': 'Amazon - Request tracking',

    // Session Management
    'PHPSESSID': 'PHP - Session ID',
    'JSESSIONID': 'Java - Session ID',
    'ASP.NET_SessionId': 'ASP.NET - Session ID',
    'session_id': 'Generic - Session ID',
    'sessionid': 'Generic - Session ID',
    '_session': 'Generic - Session tracking',
    'sid': 'Generic - Session ID',

    // Authentication
    'auth': 'Authentication - User authentication',
    'auth_token': 'Authentication - Auth token',
    'access_token': 'Authentication - Access token',
    'refresh_token': 'Authentication - Refresh token',
    'token': 'Authentication - Security token',
    'login': 'Authentication - Login status',
    '__Secure-': 'Authentication - Secure flag',
    '__Host-': 'Authentication - Host flag',

    // User Preferences
    'pref': 'User preferences - Settings',
    'preferences': 'User preferences - Settings',
    'theme': 'User preferences - Theme/display',
    'lang': 'User preferences - Language',
    'locale': 'User preferences - Locale',

    // Tracking & Analytics
    'utm_source': 'UTM - Traffic source',
    'utm_medium': 'UTM - Traffic medium',
    'utm_campaign': 'UTM - Campaign name',
    'utm_content': 'UTM - Campaign content',
    'utm_term': 'UTM - Search keyword',
    'tracking_id': 'Analytics - Tracking ID',
    'visitor_id': 'Analytics - Visitor tracking',
    'user_id': 'Analytics - User ID',

    // Advertising & Marketing
    'ad_id': 'Advertising - Advertisement ID',
    'advertiser_id': 'Advertising - Advertiser ID',
    'uuid': 'Advertising - Universal ID',
    'device_id': 'Advertising - Device ID',
    'ifa': 'Advertising - Identifier for Advertisers',
    'gaid': 'Advertising - Google Ad ID',
    'aaid': 'Advertising - Amazon Ad ID',

    // WordPress Ad Plugins
    'advanced_ads_': 'Advanced Ads (WordPress) - Ad management and placement',
    'advanced_ads': 'Advanced Ads (WordPress) - Ad management and placement',

    // Content Delivery Networks (CDN)
    '__cfruid': 'Cloudflare - Request ID',
    '__cf_bm': 'Cloudflare - Bot Management',
    'cf_clearance': 'Cloudflare - DDoS protection',
    '_dd_s': 'Datadog - Session tracking',

    // Security
    'csrf': 'Security - CSRF token',
    'csrf_token': 'Security - CSRF protection',
    'nonce': 'Security - Nonce for security',
    '_xsrf': 'Security - CSRF protection',
    'xsrf-token': 'Security - CSRF protection',
    'secure': 'Security - Secure connection flag',
    'httponly': 'Security - HTTP only flag',

    // E-commerce
    'cart': 'E-commerce - Shopping cart',
    'basket': 'E-commerce - Shopping basket',
    'wishlist': 'E-commerce - Wishlist',
    'product_id': 'E-commerce - Product tracking',
    'checkout': 'E-commerce - Checkout process',
    'order_id': 'E-commerce - Order tracking',

    // Social Media
    'twitter_id': 'Twitter - User ID',
    'instagram_id': 'Instagram - User ID',
    'tiktok_id': 'TikTok - User ID',
    'youtube_id': 'YouTube - User ID',
    'reddit_session': 'Reddit - Session',
    'discord_token': 'Discord - Authentication',

    // Performance & Optimization
    'pagespeed': 'Performance - Page speed metrics',
    'cache': 'Performance - Cache control',
    'cdn_url': 'Performance - CDN URL selection',
    '_gzip': 'Performance - Gzip compression',

    // Payment Processors
    'stripe_token': 'Stripe - Payment token',
    'paypal_session': 'PayPal - Session',
    'square_token': 'Square - Payment token',

    // Email & Notifications
    'email_id': 'Email - Email identification',
    'newsletter': 'Email - Newsletter subscription',
    'notifications': 'Notifications - Notification preferences',

    // A/B Testing & Experimentation
    'ab_test': 'A/B Testing - Test variant',
    'experiment': 'A/B Testing - Experiment ID',
    'variant': 'A/B Testing - Variant ID',
    'split_test': 'A/B Testing - Split test',

    // Personalization
    'personalization': 'Personalization - User preferences',
    'recommendations': 'Personalization - Content recommendations',
    'profile_id': 'Personalization - User profile',

    // Consent Management & GDPR (European)
    'cookie_consent': 'GDPR/CCPA - Cookie consent',
    'cookiebot': 'Cookiebot - Consent management',
    'CookieConsent': 'Consent - Cookie consent state',
    'cc_env': 'Consent - Cookie category tracking',
    '_iub_cs': 'Iubenda - Cookie consent status',
    '_iub': 'Iubenda - Cookie banner',
    'iubenda_consent_status': 'Iubenda - Consent status',
    'euconsent': 'IAB Europe - TCF v1 consent',
    'euconsent-v2': 'IAB Europe - TCF v2 consent',
    'CONSENTMGR': 'Consent Manager - General consent',
    'didomi': 'Didomi - Consent management',
    'didomi_token': 'Didomi - Consent token',
    'optanon': 'OneTrust - Consent management',
    'OneTrust': 'OneTrust - Consent cookie',
    'notice': 'OneTrust - Notice tracking',
    'TrustArcCookieConsent': 'TrustArc - Cookie consent',
    'sourcepoint_uuid': 'SourcePoint - Consent platform',
    'sp_consent': 'SourcePoint - Consent status',
    'axeptio': 'Axeptio - Consent management',
    'commander': 'Commander - Consent management',
    'consentix': 'Consentix - Consent tracking',
    '_cc': 'Civic Cookie Control - Consent',
    'silentpush': 'SilentPush - Consent',
    'explicit_consent': 'General - Explicit consent flag',
    'gdpr': 'GDPR - GDPR compliance',
    'gdpr_consent': 'GDPR - GDPR consent status',
    'ccpa': 'CCPA - CCPA compliance',
    'privacy': 'Privacy - Privacy settings',
    'privacy_settings': 'Privacy - Privacy settings',
    'cmplz': 'Complianz - Cookie services(undefined)',
    'cmplz_choices': 'Complianz - Cookie choices',
    'cmplz_marketing': 'Complianz - Marketing consent',
    'cmplz_statistics': 'Complianz - Analytics consent',
    'cmplz_functional': 'Complianz - Functional consent',
    'cmplz_banner-status': 'Complianz - Banner status',
    'cmplz_consent_status': 'Complianz - Overall consent status',
    'cmplz_token': 'Complianz - Session token',
    'cmplz_accepted': 'Complianz - Accepted categories',
    'cmplz_dismissed': 'Complianz - Banner dismissed',
    'cmplz_uconsentid': 'Complianz - Unified consent ID',
    'cmplz_statistics-anonymous': 'Complianz - Anonymous stats',

    // Web Analytics Platforms
    '_hjid': 'Hotjar - User ID',
    '_hjTLDTest': 'Hotjar - Cookie domain',
    '_hjAbsoluteSessionInProgress': 'Hotjar - Session tracking',
    '_hjCachedUserAttributes': 'Hotjar - User attributes',
    '_hjViewed': 'Hotjar - Page viewed',
    '_hjViewportId': 'Hotjar - Viewport ID',
    '_hj': 'Hotjar - Tracking (base)',
    '_gstContainer_': 'Google Server-Side Tagging',
    'intercom-id': 'Intercom - User ID',
    'intercom-session': 'Intercom - Session',
    'intercom': 'Intercom - Tracking (base)',
    '_uetsid': 'Microsoft Ads - User ID',
    '_uetvid': 'Microsoft Ads - Device ID',
    '_uet': 'Microsoft Ads - Tracking (base)',
    'mkt_tok': 'Marketo - Tracking token',
    'mkt': 'Marketo - Tracking (base)',
    '__tld__': 'Mixpanel - Domain tracking',
    'mp_': 'Mixpanel - Analytics',
    'kissmetrics': 'KissMetrics - User tracking',
    'km_': 'KissMetrics - Analytics',
    'vimeoAnalytics': 'Vimeo - Video analytics',
    'wistia': 'Wistia - Video analytics',
    'drift_cid': 'Drift - Chat analytics',
    'drift': 'Drift - Tracking (base)',
    'heap_': 'Heap Analytics - Session tracking',
    'heap': 'Heap Analytics - Tracking (base)',
    'segment_': 'Segment - Data collection',
    'segment': 'Segment - Tracking (base)',
    'fullstory': 'FullStory - Session replay',
    'loggly': 'Loggly - Error tracking',
    'bugsnag': 'Bugsnag - Error monitoring',
    'sentry': 'Sentry - Error tracking',
    'rollbar': 'Rollbar - Error monitoring',
    'newrelic': 'New Relic - Performance monitoring',
    'datadog': 'Datadog - Monitoring and analytics',
    '_dd': 'Datadog - Tracking (base)',
    'elastic': 'Elastic - Analytics',
    'google_tag_manager': 'Google Tag Manager - Tracking',
    'GTM': 'Google Tag Manager - GTM tracking',

    // Russian/CIS Analytics
    'yandex': 'Yandex - Analytics (Russian)',
    '_ym_': 'Yandex Metrica - Analytics',
    'yandexuid': 'Yandex - User ID',
    'yabs': 'Yandex - Ad system',
    '_ym': 'Yandex - Tracking (base)',
    'i': 'Mail.ru - Analytics',
    'lj_': 'LiveJournal/Mail.ru - Tracking',
    'lj': 'Mail.ru - Tracking (base)',

    // Chinese Analytics & Tracking
    'baidu_': 'Baidu Analytics - User tracking (China)',
    '_bz_baidu': 'Baidu - Analytics',
    'baidu': 'Baidu - Tracking (base)',
    'qihu_': '360 Search - Analytics (China)',
    'qihu': '360 Search - Tracking (base)',
    'sougou_': 'Sogou - Analytics (China)',
    'sougou': 'Sogou - Tracking (base)',
    '_aplus_': 'Alibaba - Analytics tracking',
    'cna': 'Alibaba - User cookie',
    'tbay_': 'Taobao - Session tracking',
    'aliyun': 'Alibaba Cloud - Tracking',

    // Asian Platforms
    'juid': 'JD.com - User ID (China)',
    'pin': 'Pinduoduo - User tracking (China)',
    'weixin': 'WeChat - Session (China)',
    'qq': 'QQ - Session (China)',
    'sina_': 'Sina - Tracking (China)',
    'sina': 'Sina - Tracking (base)',

    // Additional European Services
    'matomo': 'Matomo - Web analytics',
    '_pk_': 'Matomo - Session tracking',
    '_pk': 'Matomo - Tracking (base)',
    'piwik': 'Piwik - Analytics (former Matomo)',
    'econda': 'ecomnua - Analytics (German)',
    'webtrekk': 'Webtrekk - Analytics',
    'coremetrics': 'CoreMetrics - Analytics',
    'adobe_': 'Adobe Analytics - Tracking',
    's_': 'Adobe Analytics - Session',
    'omniture': 'Omniture - Analytics',
    'tealeaf': 'Tealeaf - Session recording',
    'sessioncam': 'SessionCam - Session recording',
    'clicktale': 'ClickTale - Session replay',
    'contentsquare': 'ContentSquare - Session analytics',
    '_cs_': 'ContentSquare - Tracking',
    '_cs': 'ContentSquare - Tracking (base)',
    'decibel': 'Decibelinsights - Listening platform',

    // Social Media Expanded
    'twitter_id': 'Twitter - User ID',
    'twitter': 'Twitter - Tracking (base)',
    'instagram_id': 'Instagram - User ID',
    'instagram': 'Instagram - Tracking (base)',
    'tiktok_id': 'TikTok - User ID',
    'tiktok': 'TikTok - Tracking (base)',
    'youtube_id': 'YouTube - User ID',
    'youtube': 'YouTube - Tracking (base)',
    'reddit_session': 'Reddit - Session',
    'reddit': 'Reddit - Tracking (base)',
    'discord_token': 'Discord - Authentication',
    'discord': 'Discord - Tracking (base)',
    'pinterest_': 'Pinterest - Tracking',
    'pinterest': 'Pinterest - Tracking (base)',
    'snapchat_': 'Snapchat - Tracking',
    'snapchat': 'Snapchat - Tracking (base)',
    'viber_': 'Viber - Session',
    'viber': 'Viber - Tracking (base)',
    'telegram_': 'Telegram - Session',
    'telegram': 'Telegram - Tracking (base)',
    'whatsapp_': 'WhatsApp - Session',
    'nextdoor_': 'Nextdoor - User tracking',
    'nextdoor': 'Nextdoor - Tracking (base)',
    'slack_': 'Slack - Session',
    'slack': 'Slack - Tracking (base)',
    'twitch_': 'Twitch - Session',
    'twitch': 'Twitch - Tracking (base)',

    // Retargeting & Ad Networks
    'rdt_uuid': 'Reddit Ads - Pixel',
    'everest': 'Everest - Audience management',
    'uid': 'DoubleClick/Google - User ID',
    'IDE': 'Google DoubleClick - ID for advertising',
    'ANID': 'Google - Advertising ID',
    'NID': 'Google - Advertising preferences',
    'demdex': 'Adobe Audience Manager - User ID',
    'dextp': 'Adobe Audience Manager - Data',
    'idsync': 'Ad exchanges - ID synchronization',
    'ttdemdex': 'The Trade Desk - Audience data',
    'cas_': 'Criteo - Audience segmentation',
    'uid_': 'Criteo - User ID',
    'cto_bundle': 'Criteo - ID bundle',
    'cto_bidid': 'Criteo - Bid ID',
    'cto': 'Criteo - Tracking (base)',
    'rlas3': 'Rubicon Project - User ID',
    'khaos': 'Rocket Fuel - Ad targeting',
    'media_net': 'Media.net - Ad network',
    '__eoi': 'Epsilon - Online identity tracking',
    '_sharedid': 'LiveRamp - Shared ID cross-domain',
    'pbjs-unifiedid': 'Prebid - Unified ID (header bidding)',
    'pbjs': 'Prebid - Tracking (base)',

    // Video Platforms & Streaming
    'youtube': 'YouTube - Session tracking',
    'vimeo': 'Vimeo - Video tracking',
    'dailymotion': 'Dailymotion - Video tracking',
    'twitch_session': 'Twitch - Session',
    'netflix': 'Netflix - Session',
    'hbo_': 'HBO Max - Session',
    'hbo': 'HBO Max - Tracking (base)',
    'prime_': 'Amazon Prime - Session',
    'prime': 'Amazon Prime - Tracking (base)',
    'disney_': 'Disney+ - Session',
    'disney': 'Disney+ - Tracking (base)',

    // Email & Marketing Automation
    'klaviyo': 'Klaviyo - Email marketing',
    '_kx': 'Klaviyo - Session tracking',
    'mailchimp': 'Mailchimp - Email campaign tracking',
    'hubspot': 'HubSpot - Marketing automation',
    'hsfirstvisit': 'HubSpot - First visit tracking',
    'hsutk': 'HubSpot - User token',
    'hs': 'HubSpot - Tracking (base)',
    'pardot': 'Pardot (Salesforce) - Marketing',
    '_pardot': 'Pardot - Tracking',
    'marketo': 'Marketo - Marketing automation',
    'pardot_': 'Pardot - Lead tracking',
    'constant_contact': 'Constant Contact - Email tracking',
    'sendgrid': 'SendGrid - Email tracking',
    'mailgun': 'Mailgun - Email events',
    'customerio': 'Customer.io - Marketing automation',
    'drip': 'Drip - Email automation',
    'convertkit': 'ConvertKit - Email automation',

    // CRM & Business Tools
    'salesforce': 'Salesforce - CRM session',
    'salesforce_': 'Salesforce - Tracking',
    'crm_session': 'CRM - Session tracking',
    'dynamics': 'Microsoft Dynamics - CRM',
    'zendesk': 'Zendesk - Customer support',
    'freshdesk': 'Freshdesk - Support ticket',
    'desk': 'Desk.com - Support',
    'helpshift': 'Helpshift - In-app support',
    'jira': 'Jira - Project management',
    'asana': 'Asana - Project management',
    'trello': 'Trello - Board management',
    'monday': 'Monday.com - Workflow',
    'notion': 'Notion - Notes & databases',

    // Web Hosting & Infrastructure
    'heroku': 'Heroku - Cloud platform',
    'vercel': 'Vercel - Hosting platform',
    'netlify': 'Netlify - JAMstack hosting',
    'render': 'Render - Cloud platform',
    'digitalocean': 'DigitalOcean - Hosting',
    'linode': 'Linode/Akamai - Hosting',
    'aws': 'Amazon AWS - Cloud services',
    'azure': 'Microsoft Azure - Cloud services',
    'gcp': 'Google Cloud Platform - Cloud',

    // Development & Testing
    'sentry_': 'Sentry - Error tracking',
    'appsignal': 'AppSignal - Monitoring',
    'airbrake': 'Airbrake - Error monitoring',
    'raygun': 'Raygun - Error monitoring',
    'codacy': 'Codacy - Code quality',
    'sonarqube': 'SonarQube - Code analysis',

    // Search & SEO
    'binguid': 'Bing - User ID',
    'google_': 'Google - Various tracking',
    'gac': 'Google Analytics Campaign',
    'gclid': 'Google Click ID - Ad tracking',
    'fbclid': 'Facebook Click ID - Ad tracking',
    'msclkid': 'Microsoft Click ID - Ad tracking',
    'seosearch': 'SEO tracking',

    // Browser & Device Fingerprinting
    'fingerprint': 'Device fingerprinting',
    'device_id': 'Device ID',
    'machine_id': 'Machine ID',
    'browser_id': 'Browser ID',
    'canvas_fingerprint': 'Canvas fingerprinting',
    'font_fingerprint': 'Font fingerprinting',

    // Miscellaneous
    'last_visited': 'User behavior - Last visited page',
    'referrer': 'User behavior - Referrer tracking',
    'timestamp': 'General - Timestamp',
    'version': 'General - Version tracking',
    'beta': 'General - Beta features',
    'debug': 'Development - Debug mode',
};

// Function to get cookie possible purpose
function getCookiePurpose(cookieName) {
    // exact match
    const exactPurpose = cookieDictionary[cookieName];
    if (exactPurpose) {
        const exactPartial = cookieName;
        return [exactPurpose, exactPartial];
    }

    // prefix match - find the longest matching key
    let bestKey = '';
    let bestPurpose = '';
    for (const [key, value] of Object.entries(cookieDictionary)) {
        
        const isLonger = key.length > bestKey.length;
        if (cookieName.startsWith(key) && isLonger) {
            bestKey = key;
            bestPurpose = value;
        }
    }
    if (bestKey) {
        return [bestPurpose, bestKey];
    }

    // no match found - deduce partial to look up online
    const cookieTokens = cookieName.split(/[^a-zA-Z0-9]+/).filter(Boolean);
    const significantTokens = cookieTokens.filter((token) => {
        const containsLetters = /[a-zA-Z]/.test(token);
        const minimumLength = token.length >= 2;
        return containsLetters && minimumLength;
    });

    let derivedPartial = '';
    if (significantTokens.length >= 2) {
        derivedPartial = `${significantTokens[0]} ${significantTokens[1]}`;
    } else if (significantTokens.length === 1) {
        derivedPartial = significantTokens[0];
    } else if (cookieTokens.length >= 1) {
        derivedPartial = cookieTokens[0];
    } else {
        derivedPartial = '';
    }

    const unknownPurpose = 'Unknown - Purpose not identified';
    return [unknownPurpose, derivedPartial];
}

export { getCookiePurpose };