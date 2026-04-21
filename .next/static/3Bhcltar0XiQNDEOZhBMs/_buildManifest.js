self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "source": "/ph-proxy/static/:path*"
      },
      {
        "source": "/ph-proxy/:path*"
      },
      {
        "source": "/mintlify-assets/:path*"
      },
      {
        "source": "/_mintlify/:path*"
      },
      {
        "source": "/llms.txt"
      },
      {
        "source": "/llms-full.txt"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()