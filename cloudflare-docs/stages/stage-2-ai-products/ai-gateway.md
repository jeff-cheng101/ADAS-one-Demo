# AI Gateway - AI API 網關

> 本文檔包含 74 個頁面的內容
> 生成時間: 2025-09-08T06:03:46.424Z
> 產品線: 🤖 AI Products

## 📑 目錄

1. [Cloudflare AI Gateway](#cloudflare-ai-gateway)
2. [Getting started](#getting-started)
3. [Unified API (OpenAI compat)](#unified-api-openai-compat)
4. [Workers AI](#workers-ai)
5. [Amazon Bedrock](#amazon-bedrock)
6. [Anthropic](#anthropic)
7. [Azure OpenAI](#azure-openai)
8. [Cartesia](#cartesia)
9. [Cerebras](#cerebras)
10. [Cohere](#cohere)
11. [DeepSeek](#deepseek)
12. [ElevenLabs](#elevenlabs)
13. [Google AI Studio](#google-ai-studio)
14. [Google Vertex AI](#google-vertex-ai)
15. [Groq](#groq)
16. [HuggingFace](#huggingface)
17. [Mistral AI](#mistral-ai)
18. [OpenAI](#openai)
19. [OpenRouter](#openrouter)
20. [Perplexity](#perplexity)
21. [Replicate](#replicate)
22. [xAI](#xai)
23. [WebSockets API](#websockets-api)
24. [Realtime WebSockets API](#realtime-websockets-api)
25. [Non-realtime WebSockets API](#non-realtime-websockets-api)
26. [Features](#features)
27. [Unified Billing](#unified-billing)
28. [Caching](#caching)
29. [Rate limiting](#rate-limiting)
30. [Dynamic routing](#dynamic-routing)
31. [Using a dynamic route](#using-a-dynamic-route)
32. [JSON Configuration](#json-configuration)
33. [Data Loss Prevention (DLP)](#data-loss-prevention-dlp)
34. [Set up Data Loss Prevention (DLP)](#set-up-data-loss-prevention-dlp)
35. [Guardrails](#guardrails)
36. [Set up Guardrails](#set-up-guardrails)
37. [Supported model types](#supported-model-types)
38. [Usage considerations](#usage-considerations)
39. [BYOK (Store Keys)](#byok-store-keys)
40. [Custom costs](#custom-costs)
41. [Manage gateways](#manage-gateways)
42. [Request handling](#request-handling)
43. [Authenticated Gateway](#authenticated-gateway)
44. [Costs](#costs)
45. [Custom metadata](#custom-metadata)
46. [Analytics](#analytics)
47. [Logging](#logging)
48. [Workers Logpush](#workers-logpush)
49. [Vercel AI SDK](#vercel-ai-sdk)
50. [AI Gateway Binding Methods](#ai-gateway-binding-methods)
51. [Workers AI](#workers-ai)
52. [Tutorials](#tutorials)
53. [Platform](#platform)
54. [Limits](#limits)
55. [Pricing](#pricing)
56. [Audit logs](#audit-logs)
57. [Header Glossary](#header-glossary)
58. [Architectures](#architectures)
59. [未知標題](#)
60. [Provider Native](#provider-native)
61. [Deploy a Worker that connects to OpenAI via AI Gateway](#deploy-a-worker-that-connects-to-openai-via-ai-gateway)
62. [Using AI Gateway](#using-ai-gateway)
63. [Configuration](#configuration)
64. [Universal Endpoint](#universal-endpoint)
65. [Observability](#observability)
66. [Pricing](#pricing)
67. [Integrations](#integrations)
68. [Provider Native](#provider-native)
69. [Create your first AI Gateway using Workers AI](#create-your-first-ai-gateway-using-workers-ai)
70. [Set up Evaluations](#set-up-evaluations)
71. [Logging](#logging)
72. [Custom metadata](#custom-metadata)
73. [Fallbacks](#fallbacks)
74. [Evaluations](#evaluations)

---

## Cloudflare AI Gateway

**來源**: [https://developers.cloudflare.com/ai-gateway/](https://developers.cloudflare.com/ai-gateway/)

Page options # Cloudflare AI Gateway

Observe and control your AI applications.

Available on all plans Cloudflare's AI Gateway allows you to gain visibility and control over your AI apps. By connecting your apps to AI Gateway, you can gather insights on how people are using your application with analytics and logging and then control how your application scales with features such as caching, rate limiting, as well as request retries, model fallback, and more. Better yet - it only takes one line of code to get started.

Check out the Get started guide to learn how to configure your applications with AI Gateway.

## Features

### Analytics

View metrics such as the number of requests, tokens, and the cost it takes to run your application.

View Analytics ### Logging

Gain insight on requests and errors.

View Logging ### Caching

Serve requests directly from Cloudflare's cache instead of the original model provider for faster requests and cost savings.

Use Caching ### Rate limiting

Control how your application scales by limiting the number of requests your application receives.

Use Rate limiting ### Request retry and fallback

Improve resilience by defining request retry and model fallbacks in case of an error.

Use Request retry and fallback ### Your favorite providers

Workers AI, OpenAI, Azure OpenAI, HuggingFace, Replicate, and more work with AI Gateway.

Use Your favorite providers ## Related products

Workers AI Run machine learning models, powered by serverless GPUs, on Cloudflare’s global network.

Vectorize Build full-stack AI applications with Vectorize, Cloudflare's vector database. Adding Vectorize enables you to perform tasks such as semantic search, recommendations, anomaly detection or can be used to provide context and memory to an LLM.

## More resources

Developer Discord

Connect with the Workers community on Discord to ask questions, show what you
are building, and discuss the platform with other developers.

Use cases

Learn how you can build and deploy ambitious AI applications to Cloudflare's
global network.

@CloudflareDev

Follow @CloudflareDev on Twitter to learn about product announcements, and
what is new in Cloudflare Workers.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Getting started

**來源**: [https://developers.cloudflare.com/ai-gateway/get-started/](https://developers.cloudflare.com/ai-gateway/get-started/)

Page options # Getting started

Last reviewed: about 1 year ago In this guide, you will learn how to create and use your first AI Gateway.

- Dashboard
- API

Create a Gateway

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Go to AI > AI Gateway.
3. Select Create Gateway.
4. Enter your Gateway name. Note: Gateway name has a 64 character limit.
5. Select Create.

To set up an AI Gateway using the API:

1. Create an API token with the following permissions:

AI Gateway - Read
AI Gateway - Edit
2. AI Gateway - Read
3. AI Gateway - Edit
4. Get your Account ID.
5. Using that API token and Account ID, send a POST request to the Cloudflare API.

### Authenticated gateway

When you enable authentication on gateway each request is required to include a valid cloudflare token, adding an extra layer of security. We recommend using an authenticated gateway when storing logs to prevent unauthorized access and protect against invalid requests that can inflate log storage usage and make it harder to find the data you need. Learn more.

## Provider Authentication

Authenticate with your upstream provider using one of the following options:

- Unified Billing: Use the AI Gateway billing to pay for and authenticate your inference requests. Refer to Unified Billing.
- BYOK (Store Keys): Store your credentials in Cloudflare, and AI Gateway will include them at runtime. Refer to BYOK.
- Request headers: Include your provider key in the request headers as you normally would (for example, Authorization: Bearer <PROVIDER_API_KEY>).

## Integration Options

### Unified API (OpenAI-Compatible) Endpoint

recommended The easiest way to get started with AI Gateway is through our OpenAI-compatible /chat/completions endpoint. This allows you to use existing OpenAI SDKs and tools with minimal code changes while gaining access to multiple AI providers.

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Key benefits:

- Drop-in replacement for OpenAI API
- Works with existing OpenAI SDKs and other OpenAI compliant clients
- Switch between providers by changing the model parameter
- Dynamic Routing - Define complex routing scenarios requiring conditional logic, conduct A/B tests, set rate / budget limits, etc

#### Example:

```
import OpenAI from "openai";
const client = new OpenAI({  apiKey: "YOUR_PROVIDER_API_KEY",  baseURL:    "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat",});
// Use different providers by changing the model parameterconst response = await client.chat.completions.create({  model: "google-ai-studio/gemini-2.0-flash", // or "openai/gpt-4o", "anthropic/claude-3-haiku"  messages: [{ role: "user", content: "Hello, world!" }],});
```

Refer to Unified API to learn more about OpenAI compatibility.

### Provider-specific endpoints

For direct integration with specific AI providers, use dedicated endpoints that maintain the original provider's API schema while adding AI Gateway features.

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/{provider}
```

Available providers:

- OpenAI - GPT models and embeddings
- Anthropic - Claude models
- Google AI Studio - Gemini models
- Workers AI - Cloudflare's inference platform
- AWS Bedrock - Amazon's managed AI service
- Azure OpenAI - Microsoft's OpenAI service
- and more...

## Next steps

- Learn more about caching for faster requests and cost savings and rate limiting to control how your application scales.
- Explore how to specify model or provider fallbacks, ratelimits, A/B tests for resiliency.
- Learn how to use low-cost, open source models on Workers AI - our AI inference service.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Unified API (OpenAI compat)

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/chat-completion/](https://developers.cloudflare.com/ai-gateway/usage/chat-completion/)

Page options # Unified API (OpenAI compat)

Cloudflare's AI Gateway offers an OpenAI-compatible /chat/completions endpoint, enabling integration with multiple AI providers using a single URL. This feature simplifies the integration process, allowing for seamless switching between different models without significant code modifications.

## Endpoint URL

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Replace {account_id} and {gateway_id} with your Cloudflare account and gateway IDs.

## Parameters

Switch providers by changing the model and apiKey parameters.

Specify the model using {provider}/{model} format. For example:

- openai/gpt-4o-mini
- google-ai-studio/gemini-2.0-flash
- anthropic/claude-3-haiku

## Examples

### OpenAI SDK

```
import OpenAI from "openai";const client = new OpenAI({  apiKey: "YOUR_PROVIDER_API_KEY", // Provider API key  // NOTE: the OpenAI client automatically adds /chat/completions to the end of the URL, you should not add it yourself.  baseURL:    "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat",});
const response = await client.chat.completions.create({  model: "google-ai-studio/gemini-2.0-flash",  messages: [{ role: "user", content: "What is Cloudflare?" }],});
console.log(response.choices[0].message.content);
```

### cURL

Terminal window ```
curl -X POST https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions \  --header 'Authorization: Bearer {GOOGLE_GENERATIVE_AI_API_KEY}' \  --header 'Content-Type: application/json' \  --data '{    "model": "google-ai-studio/gemini-2.0-flash",    "messages": [      {        "role": "user",        "content": "What is Cloudflare?"      }    ]  }'
```

## Supported Providers

The OpenAI-compatible endpoint supports models from the following providers:

- Anthropic
- OpenAI
- Groq
- Mistral
- Cohere
- Perplexity
- Workers AI
- Google-AI-Studio
- Grok
- DeepSeek
- Cerebras

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Workers AI

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/workersai/](https://developers.cloudflare.com/ai-gateway/usage/providers/workersai/)

Page options # Workers AI

Use AI Gateway for analytics, caching, and security on requests to Workers AI. Workers AI integrates seamlessly with AI Gateway, allowing you to execute AI inference via API requests or through an environment binding for Workers scripts. The binding simplifies the process by routing requests through your AI Gateway with minimal setup.

## Prerequisites

When making requests to Workers AI, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active Workers AI API token.
- The name of the Workers AI model you want to use.

## REST API

To interact with a REST API, update the URL used for your request:

- Previous:

```
https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/{model_id}
```

- New:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/{model_id}
```

For these parameters:

- {account_id} is your Cloudflare account ID.
- {gateway_id} refers to the name of your existing AI Gateway.
- {model_id} refers to the model ID of the Workers AI model.

## Examples

First, generate an API token with Workers AI Read access and use it in your request.

Request to Workers AI llama model ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/@cf/meta/llama-3.1-8b-instruct \ --header 'Authorization: Bearer {cf_api_token}' \ --header 'Content-Type: application/json' \ --data '{"prompt": "What is Cloudflare?"}'
```

Request to Workers AI text classification model ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/@cf/huggingface/distilbert-sst-2-int8 \  --header 'Authorization: Bearer {cf_api_token}' \  --header 'Content-Type: application/json' \  --data '{ "text": "Cloudflare docs are amazing!" }'
```

### OpenAI compatible endpoints

Workers AI supports OpenAI compatible endpoints for text generation (/v1/chat/completions) and text embedding models (/v1/embeddings). This allows you to use the same code as you would for your OpenAI commands, but swap in Workers AI easily.

Request to OpenAI compatible endpoint ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/v1/chat/completions \ --header 'Authorization: Bearer {cf_api_token}' \ --header 'Content-Type: application/json' \ --data '{      "model": "@cf/meta/llama-3.1-8b-instruct",      "messages": [        {          "role": "user",          "content": "What is Cloudflare?"        }      ]    }'
```

## Workers Binding

You can integrate Workers AI with AI Gateway using an environment binding. To include an AI Gateway within your Worker, add the gateway as an object in your Workers AI request.

- JavaScript
- TypeScript

```
export default {  async fetch(request, env) {    const response = await env.AI.run(      "@cf/meta/llama-3.1-8b-instruct",      {        prompt: "Why should you use Cloudflare for your AI inference?",      },      {        gateway: {          id: "{gateway_id}",          skipCache: false,          cacheTtl: 3360,        },      },    );    return new Response(JSON.stringify(response));  },};
```

```
export interface Env {  AI: Ai;}
export default {  async fetch(request: Request, env: Env): Promise<Response> {    const response = await env.AI.run(      "@cf/meta/llama-3.1-8b-instruct",      {        prompt: "Why should you use Cloudflare for your AI inference?",      },      {        gateway: {          id: "{gateway_id}",          skipCache: false,          cacheTtl: 3360,        },      },    );    return new Response(JSON.stringify(response));  },} satisfies ExportedHandler<Env>;
```

For a detailed step-by-step guide on integrating Workers AI with AI Gateway using a binding, see Integrations in AI Gateway.

Workers AI supports the following parameters for AI gateways:

- id string

Name of your existing AI Gateway. Must be in the same account as your Worker.
- Name of your existing AI Gateway. Must be in the same account as your Worker.
- skipCache boolean(default: false)

Controls whether the request should skip the cache.
- Controls whether the request should skip the cache.
- cacheTtl number

Controls the Cache TTL.
- Controls the Cache TTL.

## OpenAI-Compatible Endpoint

You can also use the OpenAI-compatible endpoint (/ai-gateway/usage/chat-completion/) to access Workers AI models using the OpenAI API schema. To do so, send your requests to:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```
{"model": "workers-ai/{model}"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Amazon Bedrock

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/bedrock/](https://developers.cloudflare.com/ai-gateway/usage/providers/bedrock/)

Page options # Amazon Bedrock

Amazon Bedrock ↗ allows you to build and scale generative AI applications with foundation models.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/aws-bedrock`
```

## Prerequisites

When making requests to Amazon Bedrock, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active Amazon Bedrock API token.
- The name of the Amazon Bedrock model you want to use.

## Make a request

When making requests to Amazon Bedrock, replace https://bedrock-runtime.us-east-1.amazonaws.com/ in the URL you're currently using with https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/aws-bedrock/bedrock-runtime/us-east-1/, then add the model you want to run at the end of the URL.

With Bedrock, you will need to sign the URL before you make requests to AI Gateway. You can try using the aws4fetch ↗ SDK.

## Examples

### Use aws4fetch SDK with TypeScript

```
import { AwsClient } from "aws4fetch";
interface Env {  accessKey: string;  secretAccessKey: string;}
export default {  async fetch(    request: Request,    env: Env,    ctx: ExecutionContext,  ): Promise<Response> {    // replace with your configuration    const cfAccountId = "{account_id}";    const gatewayName = "{gateway_id}";    const region = "us-east-1";
    // added as secrets (https://developers.cloudflare.com/workers/configuration/secrets/)    const accessKey = env.accessKey;    const secretKey = env.secretAccessKey;
    const awsClient = new AwsClient({      accessKeyId: accessKey,      secretAccessKey: secretKey,      region: region,      service: "bedrock",    });
    const requestBodyString = JSON.stringify({      inputText: "What does ethereal mean?",    });
    const stockUrl = new URL(      `https://bedrock-runtime.${region}.amazonaws.com/model/amazon.titan-embed-text-v1/invoke`,    );
    const headers = {      "Content-Type": "application/json",    };
    // sign the original request    const presignedRequest = await awsClient.sign(stockUrl.toString(), {      method: "POST",      headers: headers,      body: requestBodyString,    });
    // Gateway Url    const gatewayUrl = new URL(      `https://gateway.ai.cloudflare.com/v1/${cfAccountId}/${gatewayName}/aws-bedrock/bedrock-runtime/${region}/model/amazon.titan-embed-text-v1/invoke`,    );
    // make the request through the gateway url    const response = await fetch(gatewayUrl, {      method: "POST",      headers: presignedRequest.headers,      body: requestBodyString,    });
    if (      response.ok &&      response.headers.get("content-type")?.includes("application/json")    ) {      const data = await response.json();      return new Response(JSON.stringify(data));    }
    return new Response("Invalid response", { status: 500 });  },};
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Anthropic

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/anthropic/](https://developers.cloudflare.com/ai-gateway/usage/providers/anthropic/)

Page options # Anthropic

Anthropic ↗ helps build reliable, interpretable, and steerable AI systems.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/anthropic
```

## Prerequisites

When making requests to Anthropic, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active Anthropic API token.
- The name of the Anthropic model you want to use.

## Examples

### cURL

Example fetch request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/anthropic/v1/messages \ --header 'x-api-key: {anthropic_api_key}' \ --header 'anthropic-version: 2023-06-01' \ --header 'Content-Type: application/json' \ --data  '{    "model": "claude-3-opus-20240229",    "max_tokens": 1024,    "messages": [      {"role": "user", "content": "What is Cloudflare?"}    ]  }'
```

### Use Anthropic SDK with JavaScript

If you are using the @anthropic-ai/sdk, you can set your endpoint like this:

JavaScript ```
import Anthropic from "@anthropic-ai/sdk";
const apiKey = env.ANTHROPIC_API_KEY;const accountId = "{account_id}";const gatewayId = "{gateway_id}";const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/anthropic`;
const anthropic = new Anthropic({  apiKey,  baseURL,});
const model = "claude-3-opus-20240229";const messages = [{ role: "user", content: "What is Cloudflare?" }];const maxTokens = 1024;
const message = await anthropic.messages.create({  model,  messages,  max_tokens: maxTokens,});
```

## OpenAI-Compatible Endpoint

You can also use the OpenAI-compatible endpoint (/ai-gateway/usage/chat-completion/) to access Anthropic models using the OpenAI API schema. To do so, send your requests to:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```
{"model": "anthropic/{model}"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Azure OpenAI

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/azureopenai/](https://developers.cloudflare.com/ai-gateway/usage/providers/azureopenai/)

Page options # Azure OpenAI

Azure OpenAI ↗ allows you apply natural language algorithms on your data.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/azure-openai/{resource_name}/{deployment_name}
```

## Prerequisites

When making requests to Azure OpenAI, you will need:

- AI Gateway account ID
- AI Gateway gateway name
- Azure OpenAI API key
- Azure OpenAI resource name
- Azure OpenAI deployment name (aka model name)

## URL structure

Your new base URL will use the data above in this structure: https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/azure-openai/{resource_name}/{deployment_name}. Then, you can append your endpoint and api-version at the end of the base URL, like .../chat/completions?api-version=2023-05-15.

## Examples

### cURL

Example fetch request ```
curl 'https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/azure-openai/{resource_name}/{deployment_name}/chat/completions?api-version=2023-05-15' \  --header 'Content-Type: application/json' \  --header 'api-key: {azure_api_key}' \  --data '{  "messages": [    {      "role": "user",      "content": "What is Cloudflare?"    }  ]}'
```

### Use openai-node with JavaScript

If you are using the openai-node library, you can set your endpoint like this:

JavaScript ```
import OpenAI from "openai";
const resource = "xxx";const model = "xxx";const apiVersion = "xxx";const apiKey = env.AZURE_OPENAI_API_KEY;const accountId = "{account_id}";const gatewayId = "{gateway_id}";const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/azure-openai/${resource}/${model}`;
const azure_openai = new OpenAI({  apiKey,  baseURL,  defaultQuery: { "api-version": apiVersion },  defaultHeaders: { "api-key": apiKey },});
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Cartesia

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/cartesia/](https://developers.cloudflare.com/ai-gateway/usage/providers/cartesia/)

Page options # Cartesia

Cartesia ↗ provides advanced text-to-speech services with customizable voice models.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cartesia
```

## URL Structure

When making requests to Cartesia, replace https://api.cartesia.ai/v1 in the URL you are currently using with https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cartesia.

## Prerequisites

When making requests to Cartesia, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active Cartesia API token.
- The model ID and voice ID for the Cartesia voice model you want to use.

## Example

### cURL

Request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cartesia/tts/bytes \  --header 'Content-Type: application/json' \  --header 'Cartesia-Version: 2024-06-10' \  --header 'X-API-Key: {cartesia_api_token}' \  --data '{    "transcript": "Welcome to Cloudflare - AI Gateway!",    "model_id": "sonic-english",    "voice": {        "mode": "id",        "id": "694f9389-aac1-45b6-b726-9d9369183238"    },    "output_format": {        "container": "wav",        "encoding": "pcm_f32le",        "sample_rate": 44100    }}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Cerebras

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/cerebras/](https://developers.cloudflare.com/ai-gateway/usage/providers/cerebras/)

Page options # Cerebras

Cerebras ↗ offers developers a low-latency solution for AI model inference.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cerebras
```

## Prerequisites

When making requests to Cerebras, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active Cerebras API token.
- The name of the Cerebras model you want to use.

## Examples

### cURL

Example fetch request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cerebras/chat/completions \ --header 'content-type: application/json' \ --header 'Authorization: Bearer CEREBRAS_TOKEN' \ --data '{    "model": "llama3.1-8b",    "messages": [        {            "role": "user",            "content": "What is Cloudflare?"        }    ]}'
```

## OpenAI-Compatible Endpoint

You can also use the OpenAI-compatible endpoint (/ai-gateway/usage/chat-completion/) to access Cerebras models using the OpenAI API schema. To do so, send your requests to:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```
{"model": "cerebras/{model}"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Cohere

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/cohere/](https://developers.cloudflare.com/ai-gateway/usage/providers/cohere/)

Page options # Cohere

Cohere ↗ build AI models designed to solve real-world business challenges.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cohere
```

## URL structure

When making requests to Cohere ↗, replace https://api.cohere.ai/v1 in the URL you're currently using with https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cohere.

## Prerequisites

When making requests to Cohere, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active Cohere API token.
- The name of the Cohere model you want to use.

## Examples

### cURL

Request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cohere/v1/chat \  --header 'Authorization: Token {cohere_api_token}' \  --header 'Content-Type: application/json' \  --data '{  "chat_history": [    {"role": "USER", "message": "Who discovered gravity?"},    {"role": "CHATBOT", "message": "The man who is widely credited with discovering gravity is Sir Isaac Newton"}  ],  "message": "What year was he born?",  "connectors": [{"id": "web-search"}]}'
```

### Use Cohere SDK with Python

If using the cohere-python-sdk ↗, set your endpoint like this:

Python ```
import cohereimport os
api_key = os.getenv('API_KEY')account_id = '{account_id}'gateway_id = '{gateway_id}'base_url = f"https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cohere/v1"
co = cohere.Client(  api_key=api_key,  base_url=base_url,)
message = "hello world!"model = "command-r-plus"
chat = co.chat(  message=message,  model=model)
print(chat)
```

## OpenAI-Compatible Endpoint

You can also use the OpenAI-compatible endpoint (/ai-gateway/usage/chat-completion/) to access Cohere models using the OpenAI API schema. To do so, send your requests to:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```
{"model": "cohere/{model}"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## DeepSeek

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/deepseek/](https://developers.cloudflare.com/ai-gateway/usage/providers/deepseek/)

Page options # DeepSeek

DeepSeek ↗ helps you build quickly with DeepSeek's advanced AI models.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/deepseek
```

## Prerequisites

When making requests to DeepSeek, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active DeepSeek AI API token.
- The name of the DeepSeek AI model you want to use.

## URL structure

Your new base URL will use the data above in this structure:

https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/deepseek/.

You can then append the endpoint you want to hit, for example: chat/completions.

So your final URL will come together as:

https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/deepseek/chat/completions.

## Examples

### cURL

Example fetch request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/deepseek/chat/completions \ --header 'content-type: application/json' \ --header 'Authorization: Bearer DEEPSEEK_TOKEN' \ --data '{    "model": "deepseek-chat",    "messages": [        {            "role": "user",            "content": "What is Cloudflare?"        }    ]}'
```

### Use DeepSeek with JavaScript

If you are using the OpenAI SDK, you can set your endpoint like this:

JavaScript ```
import OpenAI from "openai";
const openai = new OpenAI({  apiKey: env.DEEPSEEK_TOKEN,  baseURL:    "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/deepseek",});
try {  const chatCompletion = await openai.chat.completions.create({    model: "deepseek-chat",    messages: [{ role: "user", content: "What is Cloudflare?" }],  });
  const response = chatCompletion.choices[0].message;
  return new Response(JSON.stringify(response));} catch (e) {  return new Response(e);}
```

## OpenAI-Compatible Endpoint

You can also use the OpenAI-compatible endpoint (/ai-gateway/usage/chat-completion/) to access DeepSeek models using the OpenAI API schema. To do so, send your requests to:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```
{"model": "deepseek/{model}"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## ElevenLabs

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/elevenlabs/](https://developers.cloudflare.com/ai-gateway/usage/providers/elevenlabs/)

Page options # ElevenLabs

ElevenLabs ↗ offers advanced text-to-speech services, enabling high-quality voice synthesis in multiple languages.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/elevenlabs
```

## Prerequisites

When making requests to ElevenLabs, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active ElevenLabs API token.
- The model ID of the ElevenLabs voice model you want to use.

## Example

### cURL

Request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/elevenlabs/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb?output_format=mp3_44100_128 \  --header 'Content-Type: application/json' \  --header 'xi-api-key: {elevenlabs_api_token}' \  --data '{    "text": "Welcome to Cloudflare - AI Gateway!",    "model_id": "eleven_multilingual_v2"}'
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Google AI Studio

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/google-ai-studio/](https://developers.cloudflare.com/ai-gateway/usage/providers/google-ai-studio/)

Page options # Google AI Studio

Google AI Studio ↗ helps you build quickly with Google Gemini models.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-ai-studio
```

## Prerequisites

When making requests to Google AI Studio, you will need:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active Google AI Studio API token.
- The name of the Google AI Studio model you want to use.

## URL structure

Your new base URL will use the data above in this structure: https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-ai-studio/.

Then you can append the endpoint you want to hit, for example: v1/models/{model}:{generative_ai_rest_resource}

So your final URL will come together as: https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-ai-studio/v1/models/{model}:{generative_ai_rest_resource}.

## Examples

### cURL

Example fetch request ```
curl "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_name}/google-ai-studio/v1/models/gemini-1.0-pro:generateContent" \ --header 'content-type: application/json' \ --header 'x-goog-api-key: {google_studio_api_key}' \ --data '{      "contents": [          {            "role":"user",            "parts": [              {"text":"What is Cloudflare?"}            ]          }        ]      }'
```

### Use @google/generative-ai with JavaScript

If you are using the @google/generative-ai package, you can set your endpoint like this:

JavaScript example ```
import { GoogleGenerativeAI } from "@google/generative-ai";
const api_token = env.GOOGLE_AI_STUDIO_TOKEN;const account_id = "";const gateway_name = "";
const genAI = new GoogleGenerativeAI(api_token);const model = genAI.getGenerativeModel(  { model: "gemini-1.5-flash" },  {    baseUrl: `https://gateway.ai.cloudflare.com/v1/${account_id}/${gateway_name}/google-ai-studio`,  },);
await model.generateContent(["What is Cloudflare?"]);
```

## OpenAI-Compatible Endpoint

You can also use the OpenAI-compatible endpoint (/ai-gateway/usage/chat-completion/) to access Google AI Studio models using the OpenAI API schema. To do so, send your requests to:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```
{"model": "google-ai-studio/{model}"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Google Vertex AI

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/vertex/](https://developers.cloudflare.com/ai-gateway/usage/providers/vertex/)

Page options # Google Vertex AI

Google Vertex AI ↗ enables developers to easily build and deploy enterprise ready generative AI experiences.

Below is a quick guide on how to set your Google Cloud Account:

1. Google Cloud Platform (GCP) Account

Sign up for a GCP account ↗. New users may be eligible for credits (valid for 90 days).
2. Sign up for a GCP account ↗. New users may be eligible for credits (valid for 90 days).
3. Enable the Vertex AI API

Navigate to Enable Vertex AI API ↗ and activate the API for your project.
4. Navigate to Enable Vertex AI API ↗ and activate the API for your project.
5. Apply for access to desired models.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-vertex-ai
```

## Prerequisites

When making requests to Google Vertex, you will need:

- AI Gateway account tag
- AI Gateway gateway name
- Google Vertex API key
- Google Vertex Project Name
- Google Vertex Region (for example, us-east4)
- Google Vertex model

## URL structure

Your new base URL will use the data above in this structure: https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-vertex-ai/v1/projects/{project_name}/locations/{region}.

Then you can append the endpoint you want to hit, for example: /publishers/google/models/{model}:{generative_ai_rest_resource}

So your final URL will come together as: https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-vertex-ai/v1/projects/{project_name}/locations/{region}/publishers/google/models/gemini-1.0-pro-001:generateContent

## Example

### cURL

Example fetch request ```
curl "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-vertex-ai/v1/projects/{project_name}/locations/{region}/publishers/google/models/gemini-1.0-pro-001:generateContent" \    -H "Authorization: Bearer {vertex_api_key}" \    -H 'Content-Type: application/json' \    -d '{        "contents": {          "role": "user",          "parts": [            {              "text": "Tell me more about Cloudflare"            }          ]        }'
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Groq

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/groq/](https://developers.cloudflare.com/ai-gateway/usage/providers/groq/)

Page options # Groq

Groq ↗ delivers high-speed processing and low-latency performance.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/groq
```

## URL structure

When making requests to Groq ↗, replace https://api.groq.com/openai/v1 in the URL you're currently using with https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/groq.

## Prerequisites

When making requests to Groq, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active Groq API token.
- The name of the Groq model you want to use.

## Examples

### cURL

Example fetch request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/groq/chat/completions \  --header 'Authorization: Bearer {groq_api_key}' \  --header 'Content-Type: application/json' \  --data '{    "messages": [      {        "role": "user",        "content": "What is Cloudflare?"      }    ],    "model": "llama3-8b-8192"}'
```

### Use Groq SDK with JavaScript

If using the groq-sdk ↗, set your endpoint like this:

JavaScript ```
import Groq from "groq-sdk";
const apiKey = env.GROQ_API_KEY;const accountId = "{account_id}";const gatewayId = "{gateway_id}";const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/groq`;
const groq = new Groq({  apiKey,  baseURL,});
const messages = [{ role: "user", content: "What is Cloudflare?" }];const model = "llama3-8b-8192";
const chatCompletion = await groq.chat.completions.create({  messages,  model,});
```

## OpenAI-Compatible Endpoint

You can also use the OpenAI-compatible endpoint (/ai-gateway/usage/chat-completion/) to access Groq models using the OpenAI API schema. To do so, send your requests to:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```
{"model": "groq/{model}"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## HuggingFace

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/huggingface/](https://developers.cloudflare.com/ai-gateway/usage/providers/huggingface/)

Page options # HuggingFace

HuggingFace ↗ helps users build, deploy and train machine learning models.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/huggingface
```

## URL structure

When making requests to HuggingFace Inference API, replace https://api-inference.huggingface.co/models/ in the URL you're currently using with https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/huggingface. Note that the model you're trying to access should come right after, for example https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/huggingface/bigcode/starcoder.

## Prerequisites

When making requests to HuggingFace, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active HuggingFace API token.
- The name of the HuggingFace model you want to use.

## Examples

### cURL

Request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/huggingface/bigcode/starcoder \  --header 'Authorization: Bearer {hf_api_token}' \  --header 'Content-Type: application/json' \  --data '{    "inputs": "console.log"}'
```

### Use HuggingFace.js library with JavaScript

If you are using the HuggingFace.js library, you can set your inference endpoint like this:

JavaScript ```
import { HfInferenceEndpoint } from "@huggingface/inference";
const accountId = "{account_id}";const gatewayId = "{gateway_id}";const model = "gpt2";const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/huggingface/${model}`;const apiToken = env.HF_API_TOKEN;
const hf = new HfInferenceEndpoint(baseURL, apiToken);
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Mistral AI

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/mistral/](https://developers.cloudflare.com/ai-gateway/usage/providers/mistral/)

Page options # Mistral AI

Mistral AI ↗ helps you build quickly with Mistral's advanced AI models.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/mistral
```

## Prerequisites

When making requests to the Mistral AI, you will need:

- AI Gateway Account ID
- AI Gateway gateway name
- Mistral AI API token
- Mistral AI model name

## URL structure

Your new base URL will use the data above in this structure: https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/mistral/.

Then you can append the endpoint you want to hit, for example: v1/chat/completions

So your final URL will come together as: https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/mistral/v1/chat/completions.

## Examples

### cURL

Example fetch request ```
curl -X POST https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/mistral/v1/chat/completions \ --header 'content-type: application/json' \ --header 'Authorization: Bearer MISTRAL_TOKEN' \ --data '{    "model": "mistral-large-latest",    "messages": [        {            "role": "user",            "content": "What is Cloudflare?"        }    ]}'
```

### Use @mistralai/mistralai package with JavaScript

If you are using the @mistralai/mistralai package, you can set your endpoint like this:

JavaScript example ```
import { Mistral } from "@mistralai/mistralai";
const client = new Mistral({  apiKey: MISTRAL_TOKEN,  serverURL: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/mistral`,});
await client.chat.create({  model: "mistral-large-latest",  messages: [    {      role: "user",      content: "What is Cloudflare?",    },  ],});
```

## OpenAI-Compatible Endpoint

You can also use the OpenAI-compatible endpoint (/ai-gateway/usage/chat-completion/) to access Mistral models using the OpenAI API schema. To do so, send your requests to:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```
{"model": "mistral/{model}"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## OpenAI

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/openai/](https://developers.cloudflare.com/ai-gateway/usage/providers/openai/)

Page options # OpenAI

OpenAI ↗ helps you build with ChatGPT.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai
```

### Chat completions endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \
```

### Responses endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/responses \
```

## URL structure

When making requests to OpenAI, replace https://api.openai.com/v1 in the URL you are currently using with https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai.

## Prerequisites

When making requests to OpenAI, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active OpenAI API token.
- The name of the OpenAI model you want to use.

## Chat completions endpoint

### cURL example

Terminal window ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \--header 'Authorization: Bearer {openai_token}' \--header 'Content-Type: application/json' \--data '{  "model": "gpt-4o-mini",  "messages": [    {      "role": "user",      "content": "What is Cloudflare?"    }  ]}'
```

### JavaScript SDK example

```
import OpenAI from "openai";
const apiKey = "my api key"; // or process.env["OPENAI_API_KEY"]const accountId = "{account_id}";const gatewayId = "{gateway_id}";const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/openai`;
const openai = new OpenAI({  apiKey,  baseURL,});
try {  const model = "gpt-3.5-turbo-0613";  const messages = [{ role: "user", content: "What is a neuron?" }];  const maxTokens = 100;  const chatCompletion = await openai.chat.completions.create({    model,    messages,    max_tokens: maxTokens,  });  const response = chatCompletion.choices[0].message;  console.log(response);} catch (e) {  console.error(e);}
```

## OpenAI Responses endpoint

### cURL example

Terminal window ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/responses \--header 'Authorization: Bearer {openai_token}' \--header 'Content-Type: application/json' \--data '{  "model": "gpt-4.1",  "input": [    {      "role": "user",      "content": "Write a one-sentence bedtime story about a unicorn."    }  ]}'
```

### JavaScript SDK example

```
import OpenAI from "openai";
const apiKey = "my api key"; // or process.env["OPENAI_API_KEY"]const accountId = "{account_id}";const gatewayId = "{gateway_id}";const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/openai`;
const openai = new OpenAI({  apiKey,  baseURL,});
try {  const model = "gpt-4.1";  const input = [    {      role: "user",      content: "Write a one-sentence bedtime story about a unicorn.",    },  ];  const response = await openai.responses.create({    model,    input,  });  console.log(response.output_text);} catch (e) {  console.error(e);}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## OpenRouter

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/openrouter/](https://developers.cloudflare.com/ai-gateway/usage/providers/openrouter/)

Page options # OpenRouter

OpenRouter ↗ is a platform that provides a unified interface for accessing and using large language models (LLMs).

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openrouter
```

## URL structure

When making requests to OpenRouter ↗, replace https://openrouter.ai/api/v1/chat/completions in the URL you are currently using with https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openrouter.

## Prerequisites

When making requests to OpenRouter, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active OpenRouter API token or a token from the original model provider.
- The name of the OpenRouter model you want to use.

## Examples

### cURL

Request ```
curl -X POST https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openrouter/v1/chat/completions \ --header 'content-type: application/json' \ --header 'Authorization: Bearer OPENROUTER_TOKEN' \ --data '{    "model": "openai/gpt-3.5-turbo",    "messages": [        {            "role": "user",            "content": "What is Cloudflare?"        }    ]}'
```

### Use OpenAI SDK with JavaScript

If you are using the OpenAI SDK with JavaScript, you can set your endpoint like this:

JavaScript ```
import OpenAI from "openai";
const openai = new OpenAI({  apiKey: env.OPENROUTER_TOKEN,  baseURL:    "https://gateway.ai.cloudflare.com/v1/ACCOUNT_TAG/GATEWAY/openrouter",});
try {  const chatCompletion = await openai.chat.completions.create({    model: "openai/gpt-3.5-turbo",    messages: [{ role: "user", content: "What is Cloudflare?" }],  });
  const response = chatCompletion.choices[0].message;
  return new Response(JSON.stringify(response));} catch (e) {  return new Response(e);}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Perplexity

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/perplexity/](https://developers.cloudflare.com/ai-gateway/usage/providers/perplexity/)

Page options # Perplexity

Perplexity ↗ is an AI powered answer engine.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/perplexity-ai
```

## Prerequisites

When making requests to Perplexity, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active Perplexity API token.
- The name of the Perplexity model you want to use.

## Examples

### cURL

Example fetch request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/perplexity-ai/chat/completions \     --header 'accept: application/json' \     --header 'content-type: application/json' \     --header 'Authorization: Bearer {perplexity_token}' \     --data '{      "model": "mistral-7b-instruct",      "messages": [        {          "role": "user",          "content": "What is Cloudflare?"        }      ]    }'
```

### Use Perplexity through OpenAI SDK with JavaScript

Perplexity does not have their own SDK, but they have compatibility with the OpenAI SDK. You can use the OpenAI SDK to make a Perplexity call through AI Gateway as follows:

JavaScript ```
import OpenAI from "openai";
const apiKey = env.PERPLEXITY_API_KEY;const accountId = "{account_id}";const gatewayId = "{gateway_id}";const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/perplexity-ai`;
const perplexity = new OpenAI({  apiKey,  baseURL,});
const model = "mistral-7b-instruct";const messages = [{ role: "user", content: "What is Cloudflare?" }];const maxTokens = 20;
const chatCompletion = await perplexity.chat.completions.create({  model,  messages,  max_tokens: maxTokens,});
```

## OpenAI-Compatible Endpoint

You can also use the OpenAI-compatible endpoint (/ai-gateway/usage/chat-completion/) to access Perplexity models using the OpenAI API schema. To do so, send your requests to:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```
{"model": "perplexity/{model}"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Replicate

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/replicate/](https://developers.cloudflare.com/ai-gateway/usage/providers/replicate/)

Page options # Replicate

Replicate ↗ runs and fine tunes open-source models.

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/replicate
```

## URL structure

When making requests to Replicate, replace https://api.replicate.com/v1 in the URL you're currently using with https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/replicate.

## Prerequisites

When making requests to Replicate, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active Replicate API token.
- The name of the Replicate model you want to use.

## Example

### cURL

Request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/replicate/predictions \  --header 'Authorization: Token {replicate_api_token}' \  --header 'Content-Type: application/json' \  --data '{    "input":      {        "prompt": "What is Cloudflare?"      }    }'
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## xAI

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/grok/](https://developers.cloudflare.com/ai-gateway/usage/providers/grok/)

Page options # xAI

## Endpoint

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok
```

## URL structure

When making requests to Grok ↗, replace https://api.x.ai/v1 in the URL you are currently using with https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok.

## Prerequisites

When making requests to Grok, ensure you have the following:

- Your AI Gateway Account ID.
- Your AI Gateway gateway name.
- An active xAI API token.
- The name of the xAI model you want to use.

## Examples

### cURL

Request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok/v1/chat/completions \  --header 'content-type: application/json' \  --header 'Authorization: Bearer {xai_api_token}' \  --data '{    "model": "grok-4",    "messages": [        {            "role": "user",            "content": "What is Cloudflare?"        }    ]}'
```

### Use OpenAI SDK with JavaScript

If you are using the OpenAI SDK with JavaScript, you can set your endpoint like this:

JavaScript ```
import OpenAI from "openai";
const openai = new OpenAI({  apiKey: "<api key>",  baseURL:    "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok",});
const completion = await openai.chat.completions.create({  model: "grok-4",  messages: [    {      role: "system",      content:        "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",    },    {      role: "user",      content: "What is the meaning of life, the universe, and everything?",    },  ],});
console.log(completion.choices[0].message);
```

### Use OpenAI SDK with Python

If you are using the OpenAI SDK with Python, you can set your endpoint like this:

Python ```
import osfrom openai import OpenAI
XAI_API_KEY = os.getenv("XAI_API_KEY")client = OpenAI(    api_key=XAI_API_KEY,    base_url="https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok",)
completion = client.chat.completions.create(    model="grok-4",    messages=[        {"role": "system", "content": "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy."},        {"role": "user", "content": "What is the meaning of life, the universe, and everything?"},    ],)
print(completion.choices[0].message)
```

### Use Anthropic SDK with JavaScript

If you are using the Anthropic SDK with JavaScript, you can set your endpoint like this:

JavaScript ```
import Anthropic from "@anthropic-ai/sdk";
const anthropic = new Anthropic({  apiKey: "<api key>",  baseURL:    "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok",});
const msg = await anthropic.messages.create({  model: "grok-beta",  max_tokens: 128,  system:    "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",  messages: [    {      role: "user",      content: "What is the meaning of life, the universe, and everything?",    },  ],});
console.log(msg);
```

### Use Anthropic SDK with Python

If you are using the Anthropic SDK with Python, you can set your endpoint like this:

Python ```
import osfrom anthropic import Anthropic
XAI_API_KEY = os.getenv("XAI_API_KEY")client = Anthropic(    api_key=XAI_API_KEY,    base_url="https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok",)
message = client.messages.create(    model="grok-beta",    max_tokens=128,    system="You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",    messages=[        {            "role": "user",            "content": "What is the meaning of life, the universe, and everything?",        },    ],)
print(message.content)
```

## OpenAI-Compatible Endpoint

You can also use the OpenAI-compatible endpoint (/ai-gateway/usage/chat-completion/) to access Grok models using the OpenAI API schema. To do so, send your requests to:

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```
{"model": "grok/{model}"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## WebSockets API

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/websockets-api/](https://developers.cloudflare.com/ai-gateway/usage/websockets-api/)

Page options # WebSockets API

The AI Gateway WebSockets API provides a persistent connection for AI interactions, eliminating repeated handshakes and reducing latency. This API is divided into two categories:

- Realtime APIs - Designed for AI providers that offer low-latency, multimodal interactions over WebSockets.
- Non-Realtime APIs - Supports standard WebSocket communication for AI providers, including those that do not natively support WebSockets.

## When to use WebSockets

WebSockets are long-lived TCP connections that enable bi-directional, real-time and non realtime communication between client and server. Unlike HTTP connections, which require repeated handshakes for each request, WebSockets maintain the connection, supporting continuous data exchange with reduced overhead. WebSockets are ideal for applications needing low-latency, real-time data, such as voice assistants.

## Key benefits

- Reduced overhead: Avoid overhead of repeated handshakes and TLS negotiations by maintaining a single, persistent connection.
- Provider compatibility: Works with all AI providers in AI Gateway. Even if your chosen provider does not support WebSockets, Cloudflare handles it for you, managing the requests to your preferred AI provider.

## Key differences

| Feature | Realtime APIs | Non-Realtime APIs |
| --- | --- | --- |
| Purpose | Enables real-time, multimodal AI interactions for providers that offer dedicated WebSocket endpoints. | Supports WebSocket-based AI interactions with providers that do not natively support WebSockets. |
| Use Case | Streaming responses for voice, video, and live interactions. | Text-based queries and responses, such as LLM requests. |
| AI Provider Support | Limited to providers offering real-time WebSocket APIs. | All AI providers in AI Gateway. |
| Streaming Support | Providers natively support real-time data streaming. | AI Gateway handles streaming via WebSockets. |

For details on implementation, refer to the next sections:

- Realtime WebSockets API
- Non-Realtime WebSockets API

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Realtime WebSockets API

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/websockets-api/realtime-api/](https://developers.cloudflare.com/ai-gateway/usage/websockets-api/realtime-api/)

Page options # Realtime WebSockets API

Some AI providers support real-time, low-latency interactions over WebSockets. AI Gateway allows seamless integration with these APIs, supporting multimodal interactions such as text, audio, and video.

## Supported Providers

- OpenAI ↗
- Google AI Studio ↗
- Cartesia ↗
- ElevenLabs ↗

## Authentication

For real-time WebSockets, authentication can be done using:

- Headers (for non-browser environments)
- sec-websocket-protocol (for browsers)

## Examples

### OpenAI

```
import WebSocket from "ws";
const url =  "wss://gateway.ai.cloudflare.com/v1/<account_id>/<gateway>/openai?model=gpt-4o-realtime-preview-2024-12-17";const ws = new WebSocket(url, {  headers: {    "cf-aig-authorization": process.env.CLOUDFLARE_API_KEY,    Authorization: "Bearer " + process.env.OPENAI_API_KEY,    "OpenAI-Beta": "realtime=v1",  },});
ws.on("open", () => console.log("Connected to server."));ws.on("message", (message) => console.log(JSON.parse(message.toString())));
ws.send(  JSON.stringify({    type: "response.create",    response: { modalities: ["text"], instructions: "Tell me a joke" },  }),);
```

### Google AI Studio

```
const ws = new WebSocket(  "wss://gateway.ai.cloudflare.com/v1/<account_id>/<gateway>/google?api_key=<google_api_key>",  ["cf-aig-authorization.<cloudflare_token>"],);
ws.on("open", () => console.log("Connected to server."));ws.on("message", (message) => console.log(message.data));
ws.send(  JSON.stringify({    setup: {      model: "models/gemini-2.0-flash-exp",      generationConfig: { responseModalities: ["TEXT"] },    },  }),);
```

### Cartesia

```
const ws = new WebSocket(  "wss://gateway.ai.cloudflare.com/v1/<account_id>/<gateway>/cartesia?cartesia_version=2024-06-10&api_key=<cartesia_api_key>",  ["cf-aig-authorization.<cloudflare_token>"],);
ws.on("open", function open() {  console.log("Connected to server.");});
ws.on("message", function incoming(message) {  console.log(message.data);});
ws.send(  JSON.stringify({    model_id: "sonic",    transcript: "Hello, world! I'm generating audio on ",    voice: { mode: "id", id: "a0e99841-438c-4a64-b679-ae501e7d6091" },    language: "en",    context_id: "happy-monkeys-fly",    output_format: {      container: "raw",      encoding: "pcm_s16le",      sample_rate: 8000,    },    add_timestamps: true,    continue: true,  }),);
```

### ElevenLabs

```
const ws = new WebSocket(  "wss://gateway.ai.cloudflare.com/v1/<account_id>/<gateway>/elevenlabs?agent_id=<elevenlabs_agent_id>",  [    "xi-api-key.<elevenlabs_api_key>",    "cf-aig-authorization.<cloudflare_token>",  ],);
ws.on("open", function open() {  console.log("Connected to server.");});
ws.on("message", function incoming(message) {  console.log(message.data);});
ws.send(  JSON.stringify({    text: "This is a sample text ",    voice_settings: { stability: 0.8, similarity_boost: 0.8 },    generation_config: { chunk_length_schedule: [120, 160, 250, 290] },  }),);
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Non-realtime WebSockets API

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/websockets-api/non-realtime-api/](https://developers.cloudflare.com/ai-gateway/usage/websockets-api/non-realtime-api/)

Page options # Non-realtime WebSockets API

The Non-realtime WebSockets API allows you to establish persistent connections for AI requests without requiring repeated handshakes. This approach is ideal for applications that do not require real-time interactions but still benefit from reduced latency and continuous communication.

## Set up WebSockets API

1. Generate an AI Gateway token with appropriate AI Gateway Run and opt in to using an authenticated gateway.
2. Modify your Universal Endpoint URL by replacing https:// with wss:// to initiate a WebSocket connection:
wss://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}
3. Open a WebSocket connection authenticated with a Cloudflare token with the AI Gateway Run permission.

Note

Alternatively, we also support authentication via the sec-websocket-protocol header if you are using a browser WebSocket.

## Example request

```
import WebSocket from "ws";
const ws = new WebSocket(  "wss://gateway.ai.cloudflare.com/v1/my-account-id/my-gateway/",  {    headers: {      "cf-aig-authorization": "Bearer AI_GATEWAY_TOKEN",    },  },);
ws.send(  JSON.stringify({    type: "universal.create",    request: {      eventId: "my-request",      provider: "workers-ai",      endpoint: "@cf/meta/llama-3.1-8b-instruct",      headers: {        Authorization: "Bearer WORKERS_AI_TOKEN",        "Content-Type": "application/json",      },      query: {        prompt: "tell me a joke",      },    },  }),);
ws.on("message", function incoming(message) {  console.log(message.toString());});
```

## Example response

```
{  "type": "universal.created",  "metadata": {    "cacheStatus": "MISS",    "eventId": "my-request",    "logId": "01JC3R94FRD97JBCBX3S0ZAXKW",    "step": "0",    "contentType": "application/json"  },  "response": {    "result": {      "response": "Why was the math book sad? Because it had too many problems. Would you like to hear another one?"    },    "success": true,    "errors": [],    "messages": []  }}
```

## Example streaming request

For streaming requests, AI Gateway sends an initial message with request metadata indicating the stream is starting:

```
{  "type": "universal.created",  "metadata": {    "cacheStatus": "MISS",    "eventId": "my-request",    "logId": "01JC40RB3NGBE5XFRZGBN07572",    "step": "0",    "contentType": "text/event-stream"  }}
```

After this initial message, all streaming chunks are relayed in real-time to the WebSocket connection as they arrive from the inference provider. Only the eventId field is included in the metadata for these streaming chunks. The eventId allows AI Gateway to include a client-defined ID with each message, even in a streaming WebSocket environment.

```
{  "type": "universal.stream",  "metadata": {    "eventId": "my-request"  },  "response": {    "response": "would"  }}
```

Once all chunks for a request have been streamed, AI Gateway sends a final message to signal the completion of the request. For added flexibility, this message includes all the metadata again, even though it was initially provided at the start of the streaming process.

```
{  "type": "universal.done",  "metadata": {    "cacheStatus": "MISS",    "eventId": "my-request",    "logId": "01JC40RB3NGBE5XFRZGBN07572",    "step": "0",    "contentType": "text/event-stream"  }}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Features

**來源**: [https://developers.cloudflare.com/ai-gateway/features/](https://developers.cloudflare.com/ai-gateway/features/)

Page options # Features

AI Gateway provides a comprehensive set of features to help you build, deploy, and manage AI applications with confidence. From performance optimization to security and observability, these features work together to create a robust AI infrastructure.

## Core Features

### Performance & Cost Optimization

### Caching

Serve identical requests directly from Cloudflare's global cache, reducing latency by up to 90% and significantly cutting costs by avoiding repeated API calls to AI providers.

Key benefits:

- Reduced response times for repeated queries
- Lower API costs through cache hits
- Configurable TTL and per-request cache control
- Works across all supported AI providers

Use Caching ### Rate Limiting

Control application scaling and protect against abuse with flexible rate limiting options. Set limits based on requests per time window with sliding or fixed window techniques.

Key benefits:

- Prevent API quota exhaustion
- Control costs and usage patterns
- Configurable per gateway or per request
- Multiple rate limiting techniques available

Use Rate Limiting ### Dynamic Routing

Create sophisticated request routing flows without code changes. Route requests based on user segments, geography, content analysis, or A/B testing requirements through a visual interface.

Key benefits:

- Visual flow-based configuration
- User-based and geographic routing
- A/B testing and fractional traffic splitting
- Context-aware routing based on request content
- Dynamic rate limiting with automatic fallbacks

Use Dynamic Routing ### Security & Safety

### Guardrails

Deploy AI applications safely with real-time content moderation. Automatically detect and block harmful content in both user prompts and model responses across all providers.

Key benefits:

- Consistent moderation across all AI providers
- Real-time prompt and response evaluation
- Configurable content categories and actions
- Compliance and audit capabilities
- Enhanced user safety and trust

Use Guardrails ### Data Loss Prevention (DLP)

Protect your organization from inadvertent exposure of sensitive data through AI interactions. Scan prompts and responses for PII, financial data, and other sensitive information.

Key benefits:

- Real-time scanning of AI prompts and responses
- Detection of PII, financial, healthcare, and custom data patterns
- Configurable actions: flag or block sensitive content
- Integration with Cloudflare's enterprise DLP solution
- Compliance support for GDPR, HIPAA, and PCI DSS

Use Data Loss Prevention (DLP) ### Authentication

Secure your AI Gateway with token-based authentication. Control access to your gateways and protect against unauthorized usage.

Key benefits:

- Token-based access control
- Configurable per gateway
- Integration with Cloudflare's security infrastructure
- Audit trail for access attempts

Use Authentication ### Bring Your Own Keys (BYOK)

Securely store and manage AI provider API keys in Cloudflare's encrypted infrastructure. Remove hardcoded keys from your applications while maintaining full control.

Key benefits:

- Encrypted key storage at rest and in transit
- Centralized key management across providers
- Easy key rotation without code changes
- Support for 20+ AI providers
- Enhanced security and compliance

Use Bring Your Own Keys (BYOK) ### Observability & Analytics

### Analytics

Gain deep insights into your AI application usage with comprehensive analytics. Track requests, tokens, costs, errors, and performance across all providers.

Key benefits:

- Real-time usage metrics and trends
- Cost tracking and estimation across providers
- Error monitoring and troubleshooting
- Cache hit rates and performance insights
- GraphQL API for custom dashboards

Use Analytics ### Logging

Capture detailed logs of all AI requests and responses for debugging, compliance, and analysis. Configure log retention and export options.

Key benefits:

- Complete request/response logging
- Configurable log retention policies
- Export capabilities via Logpush
- Custom metadata support
- Compliance and audit support

Use Logging ### Custom Metadata

Enrich your logs and analytics with custom metadata. Tag requests with user IDs, team information, or any custom data for enhanced filtering and analysis.

Key benefits:

- Enhanced request tracking and filtering
- User and team-based analytics
- Custom business logic integration
- Improved debugging and troubleshooting

Use Custom Metadata ### Advanced Configuration

### Custom Costs

Override default pricing with your negotiated rates or custom cost models. Apply custom costs at the request level for accurate cost tracking.

Key benefits:

- Accurate cost tracking with negotiated rates
- Per-request cost customization
- Better budget planning and forecasting
- Support for enterprise pricing agreements

Use Custom Costs ## Feature Comparison by Use Case

| Use Case | Recommended Features |
| --- | --- |
| Cost Optimization | Caching, Rate Limiting, Custom Costs |
| High Availability | Fallbacks using Dynamic Routing |
| Security & Compliance | Guardrails, DLP, Authentication, BYOK, Logging |
| Performance Monitoring | Analytics, Logging, Custom Metadata |
| A/B Testing | Dynamic Routing, Custom Metadata, Analytics |

## Getting Started with Features

1. Start with the basics: Enable Caching and Analytics for immediate benefits
2. Add reliability: Configure Fallbacks and Rate Limiting using Dynamic routing
3. Enhance security: Implement Guardrails, DLP, and Authentication

All features work seamlessly together and across all 20+ supported AI providers. Get started with AI Gateway to begin using these features in your applications.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Unified Billing

**來源**: [https://developers.cloudflare.com/ai-gateway/features/unified-billing/](https://developers.cloudflare.com/ai-gateway/features/unified-billing/)

Page options # Unified Billing

Warning

Unified Billing is in closed beta. Request for access.

Unified Billing allows users to connect to various AI providers (e.g. OpenAI, Anthropic) and receive a single Cloudflare bill. To use Unified Billing, users must purchase and load credits into their Cloudflare account, via the Dashboard, which can then be spent via the AI Gateway.

### Load credits

- Navigate to AI Gateway ↗ on Cloudflare dashboard
- The "Credits Available" card on the top right shows how many AI gateway credits you have on your account currently.
- Click "Manage" to navigate to the new billing page
- If you don't have a payment method already on your account, you will be prompted to "Add a payment method to purchase credits" on top of page.
- Once you have a card added, you will be able to do a credit top up on your account by clicking "Top-up credits", and then adding the required amount on the next popup.

### Auto-top up

- Navigate to AI Gateway ↗ on Cloudflare dashboard
- Click "Manage"  on the "Credits Available" card on the top right to navigate to the new billing page
- Click the "Setup auto top-up credits" option on the dashboard, and set up a threshold and a recharge amount for auto topup.

When your balance falls below the given threshold, we will automatically apply the auto topup on your account.

### Using Unified Billing

#### Pre-requisites

- Ensure your gateway is authenticated.

Call any supported provider without passing any API Key. The request will automatically use Cloudflare's key and deduct credits from your account.

Example with Unified API:

Terminal window ```
curl -X POST https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions \  --header 'cf-aig-authorization: Bearer {CLOUDFLARE_TOKEN}' \  --header 'Content-Type: application/json' \  --data '{    "model": "google-ai-studio/gemini-2.5-pro",    "messages": [      {        "role": "user",        "content": "What is Cloudflare?"      }    ]  }'
```

### Spend limit

Set spend limits to prevent unexpected charges on your loaded credits. You can define daily, weekly, or monthly limits. When a limit is reached, the AI Gateway automatically stops processing requests until the period resets or you increase the limit.

### Supported Providers

- OpenAI
- Anthropic
- Google AI Studio
- xAI
- Groq

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Caching

**來源**: [https://developers.cloudflare.com/ai-gateway/features/caching/](https://developers.cloudflare.com/ai-gateway/features/caching/)

Page options # Caching

AI Gateway can cache responses from your AI model providers, serving them directly from Cloudflare's cache for identical requests.

## Benefits of Using Caching

- Reduced Latency: Serve responses faster to your users by avoiding a round trip to the origin AI provider for repeated requests.
- Cost Savings: Minimize the number of paid requests made to your AI provider, especially for frequently accessed or non-dynamic content.
- Increased Throughput: Offload repetitive requests from your AI provider, allowing it to handle unique requests more efficiently.

Note

Currently caching is supported only for text and image responses, and it applies only to identical requests.

This configuration benefits use cases with limited prompt options. For example, a support bot that asks "How can I help you?" and lets the user select an answer from a limited set of options works well with the current caching configuration.
We plan on adding semantic search for caching in the future to improve cache hit rates.

## Default configuration

- Dashboard
- API

To set the default caching configuration in the dashboard:

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Select AI > AI Gateway.
3. Select Settings.
4. Enable Cache Responses.
5. Change the default caching to whatever value you prefer.

To set the default caching configuration using the API:

1. Create an API token with the following permissions:

- AI Gateway - Read
- AI Gateway - Edit

1. Get your Account ID.
2. Using that API token and Account ID, send a POST request to create a new Gateway and include a value for the cache_ttl.

This caching behavior will be uniformly applied to all requests that support caching. If you need to modify the cache settings for specific requests, you have the flexibility to override this setting on a per-request basis.

To check whether a response comes from cache or not, cf-aig-cache-status will be designated as HIT or MISS.

## Per-request caching

While your gateway's default cache settings provide a good baseline, you might need more granular control. These situations could be data freshness, content with varying lifespans, or dynamic or personalized responses.

To address these needs, AI Gateway allows you to override default cache behaviors on a per-request basis using specific HTTP headers. This gives you the precision to optimize caching for individual API calls.

The following headers allow you to define this per-request cache behavior:

Note

The following headers have been updated to new names, though the old headers will still function. We recommend updating to the new headers to ensure future compatibility:

cf-cache-ttl is now cf-aig-cache-ttl

cf-skip-cache is now cf-aig-skip-cache

### Skip cache (cf-aig-skip-cache)

Skip cache refers to bypassing the cache and fetching the request directly from the original provider, without utilizing any cached copy.

You can use the header cf-aig-skip-cache to bypass the cached version of the request.

As an example, when submitting a request to OpenAI, include the header in the following manner:

Request skipping the cache ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  --header "Authorization: Bearer $TOKEN" \  --header 'Content-Type: application/json' \  --header 'cf-aig-skip-cache: true' \  --data ' {        "model": "gpt-4o-mini",        "messages": [          {            "role": "user",            "content": "how to build a wooden spoon in 3 short steps? give as short as answer as possible"          }        ]      }'
```

### Cache TTL (cf-aig-cache-ttl)

Cache TTL, or Time To Live, is the duration a cached request remains valid before it expires and is refreshed from the original source. You can use cf-aig-cache-ttl to set the desired caching duration in seconds. The minimum TTL is 60 seconds and the maximum TTL is one month.

For example, if you set a TTL of one hour, it means that a request is kept in the cache for an hour. Within that hour, an identical request will be served from the cache instead of the original API. After an hour, the cache expires and the request will go to the original API for a fresh response, and that response will repopulate the cache for the next hour.

As an example, when submitting a request to OpenAI, include the header in the following manner:

Request to be cached for an hour ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  --header "Authorization: Bearer $TOKEN" \  --header 'Content-Type: application/json' \  --header 'cf-aig-cache-ttl: 3600' \  --data ' {        "model": "gpt-4o-mini",        "messages": [          {            "role": "user",            "content": "how to build a wooden spoon in 3 short steps? give as short as answer as possible"          }        ]      }'
```

### Custom cache key (cf-aig-cache-key)

Custom cache keys let you override the default cache key in order to precisely set the cacheability setting for any resource. To override the default cache key, you can use the header cf-aig-cache-key.

When you use the cf-aig-cache-key header for the first time, you will receive a response from the provider. Subsequent requests with the same header will return the cached response. If the cf-aig-cache-ttl header is used, responses will be cached according to the specified Cache Time To Live. Otherwise, responses will be cached according to the cache settings in the dashboard. If caching is not enabled for the gateway, responses will be cached for 5 minutes by default.

As an example, when submitting a request to OpenAI, include the header in the following manner:

Request with custom cache key ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  --header 'Authorization: Bearer {openai_token}' \  --header 'Content-Type: application/json' \  --header 'cf-aig-cache-key: responseA' \  --data ' {        "model": "gpt-4o-mini",        "messages": [          {            "role": "user",            "content": "how to build a wooden spoon in 3 short steps? give as short as answer as possible"          }        ]      }'
```

AI Gateway caching behavior

Cache in AI Gateway is volatile. If two identical requests are sent simultaneously, the first request may not cache in time for the second request to use it, which may result in the second request retrieving data from the original source.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Rate limiting

**來源**: [https://developers.cloudflare.com/ai-gateway/features/rate-limiting/](https://developers.cloudflare.com/ai-gateway/features/rate-limiting/)

Page options # Rate limiting

Rate limiting controls the traffic that reaches your application, which prevents expensive bills and suspicious activity.

## Parameters

You can define rate limits as the number of requests that get sent in a specific time frame. For example, you can limit your application to 100 requests per 60 seconds.

You can also select if you would like a fixed or sliding rate limiting technique. With rate limiting, we allow a certain number of requests within a window of time. For example, if it is a fixed rate, the window is based on time, so there would be no more than x requests in a ten minute window. If it is a sliding rate, there would be no more than x requests in the last ten minutes.

To illustrate this, let us say you had a limit of ten requests per ten minutes, starting at 12:00. So the fixed window is 12:00-12:10, 12:10-12:20, and so on. If you sent ten requests at 12:09 and ten requests at 12:11, all 20 requests would be successful in a fixed window strategy. However, they would fail in a sliding window strategy since there were more than ten requests in the last ten minutes.

## Handling rate limits

When your requests exceed the allowed rate, you will encounter rate limiting. This means the server will respond with a 429 Too Many Requests status code and your request will not be processed.

## Default configuration

- Dashboard
- API

To set the default rate limiting configuration in the dashboard:

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Go to AI > AI Gateway.
3. Go to Settings.
4. Enable Rate-limiting.
5. Adjust the rate, time period, and rate limiting method as desired.

To set the default rate limiting configuration using the API:

1. Create an API token with the following permissions:

- AI Gateway - Read
- AI Gateway - Edit

1. Get your Account ID.
2. Using that API token and Account ID, send a POST request to create a new Gateway and include a value for the rate_limiting_interval, rate_limiting_limit, and rate_limiting_technique.

This rate limiting behavior will be uniformly applied to all requests for that gateway.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Dynamic routing

**來源**: [https://developers.cloudflare.com/ai-gateway/features/dynamic-routing/](https://developers.cloudflare.com/ai-gateway/features/dynamic-routing/)

Page options # Dynamic routing

## Introduction

Dynamic routing enables you to create request routing flows through a visual interface or a JSON-based configuration. Instead of hard-coding a single model, with Dynamic Routing you compose a small flow that evaluates conditions, enforces quotas, and chooses models with fallbacks. You can iterate without touching application code—publish a new route version and you’re done. With dynamic routing, you can easily implement advanced use cases such as:

- Directing different segments (paid/not-paid user) to different models
- Restricting each user/project/team with budget/rate limits
- A/B and gradual rollouts

while making it accessible to both developers and non-technical team members.

## Core Concepts

- Route: A named, versioned flow (for example, dynamic/support) that you can use as instead of the model name in your requests.
- Nodes

Start: Entry point for the route.
Conditional: If/Else branch based on expressions that reference request body, headers, or metadata (for example, user_plan == "paid").
Percentage: Routes requests probabilistically across multiple outputs, useful for A/B testing and gradual rollouts.
Model: Calls a provider/model with the request parameters
Rate Limit: Enforces number of requests quotas (per your key, per period) and switches to fallback when exceeded.
Budget Limit: Enforces cost quotas (per your key, per period) and switches to fallback when exceeded.
End: Terminates the flow and returns the final model response.
- Start: Entry point for the route.
- Conditional: If/Else branch based on expressions that reference request body, headers, or metadata (for example, user_plan == "paid").
- Percentage: Routes requests probabilistically across multiple outputs, useful for A/B testing and gradual rollouts.
- Model: Calls a provider/model with the request parameters
- Rate Limit: Enforces number of requests quotas (per your key, per period) and switches to fallback when exceeded.
- Budget Limit: Enforces cost quotas (per your key, per period) and switches to fallback when exceeded.
- End: Terminates the flow and returns the final model response.
- Metadata: Arbitrary key-value context attached to the request (for example, userId, orgId, plan). You can pass this from your app so rules can reference it.
- Versions: Each change produces a new draft. Deploy to make it live with instant rollback.

## Getting Started

Warning

Ensure your gateway has authentication turned on, and you have your upstream providers keys stored with BYOK.

1. Create a route.

Go to (Select your gateway) > Dynamic Routes > Add Route, and name it (for example, support).
Open Editor.
2. Go to (Select your gateway) > Dynamic Routes > Add Route, and name it (for example, support).
3. Open Editor.
4. Define conditionals, limits and other settings.
5. Configure model nodes.

Example:

Node A: Provider OpenAI, Model o4-mini-high
Node B: Provider OpenAI, Model gpt-4.1
6. Example:

Node A: Provider OpenAI, Model o4-mini-high
Node B: Provider OpenAI, Model gpt-4.1
7. Node A: Provider OpenAI, Model o4-mini-high
8. Node B: Provider OpenAI, Model gpt-4.1
9. Save a version.

Click Save to save the state. You can always roll back to earlier versions from Versions.
Deploy the version to make it live.
10. Click Save to save the state. You can always roll back to earlier versions from Versions.
11. Deploy the version to make it live.
12. Call the route from your code.

Use the OpenAI compatible endpoint, and use the route name in place of the model, for example, dynamic/support.
13. Use the OpenAI compatible endpoint, and use the route name in place of the model, for example, dynamic/support.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Using a dynamic route

**來源**: [https://developers.cloudflare.com/ai-gateway/features/dynamic-routing/usage/](https://developers.cloudflare.com/ai-gateway/features/dynamic-routing/usage/)

Page options # Using a dynamic route

Warning

Ensure your gateway has authentication turned, on and you have your upstream providers keys stored with BYOK.

## Examples

### OpenAI SDK

```
import OpenAI from "openai";
const cloudflareToken = "CF_AIG_TOKEN";const accountId = "{account_id}";const gatewayId = "{gateway_id}";const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}`;
const openai = new OpenAI({  apiKey: cloudflareToken,  baseURL,});
try {  const model = "dynamic/<your-dynamic-route-name>";  const messages = [{ role: "user", content: "What is a neuron?" }];  const chatCompletion = await openai.chat.completions.create({    model,    messages,  });  const response = chatCompletion.choices[0].message;  console.log(response);} catch (e) {  console.error(e);}
```

### Fetch

Terminal window ```
curl -X POST https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions \  --header 'cf-aig-authorization: Bearer {CF_AIG_TOKEN}' \  --header 'Content-Type: application/json' \  --data '{    "model": "dynamic/gemini-2.0-flash",    "messages": [      {        "role": "user",        "content": "What is Cloudflare?"      }    ]  }'
```

### Workers

index.ts ```
export interface Env {  AI: Ai;}
export default {  async fetch(request: Request, env: Env) {    const response = await env.AI.gateway("dfD").run({      provider: "compat",      endpoint: "chat/completion",      headers: {},      query: {        model: "dynamic/support",        messages: [          {            role: "user",            content: "What is Cloudflare?",          },        ],      },    });    return Response(response);  },};
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## JSON Configuration

**來源**: [https://developers.cloudflare.com/ai-gateway/features/dynamic-routing/json-configuration/](https://developers.cloudflare.com/ai-gateway/features/dynamic-routing/json-configuration/)

Page options # JSON Configuration

Instead of using the dashboard editor UI to define the route graph, you can do it using the REST API. Routes are internally represented using a simple JSON structure:

```
{  "id": "<route id>",  "name": "<route name>",  "elements": [<array of elements>]}
```

## Supported elements

Dynamic routing supports several types of elements that you can combine to create sophisticated routing flows. Each element has specific inputs, outputs, and configuration options.

### Start Element

Marks the beginning of a route. Every route must start with a Start element.

- Inputs: None
- Outputs:

next: Forwards the unchanged request to the next element
- next: Forwards the unchanged request to the next element

```
{  "id": "<id>",  "type": "start",  "outputs": {    "next": { "elementId": "<id>" }  }}
```

### Conditional Element (If/Else)

Evaluates a condition based on request parameters and routes the request accordingly.

- Inputs: Request
- Outputs:

true: Forwards request to provided element if condition evaluates to true
false: Forwards request to provided element if condition evaluates to false
- true: Forwards request to provided element if condition evaluates to true
- false: Forwards request to provided element if condition evaluates to false

```
{  "id": "<id>",  "type": "conditional",  "properties": {    "condition": {      "metadata.plan": { "$eq": "free" } // Supports MongoDB-like operators    }  },  "outputs": {    "true": { "elementId": "<id>" },    "false": { "elementId": "<id>" }  }}
```

### Percentage Split

Routes requests probabilistically across multiple outputs, useful for A/B testing and gradual rollouts.

- Inputs: Request
- Outputs: Up to 5 named percentage outputs, plus an optional else fallback

Each output has a fractional probability (must total 100%)
else output handles remaining percentage if other branches don't sum to 100%
- Each output has a fractional probability (must total 100%)
- else output handles remaining percentage if other branches don't sum to 100%

```
{  "id": "<id>",  "type": "percentage",  "outputs": {    "10%": { "elementId": "<id>" },    "50%": { "elementId": "<id>" },    "else": { "elementId": "<id>" }  }}
```

### Rate/Budget Limit

Apply limits based on request metadata. Supports both count-based and cost-based limits.

- Inputs: Request
- Outputs:

success: Forwards request to provided element if request is not rate limited
fallback: Optional output for rate-limited requests (route terminates if not provided)
- success: Forwards request to provided element if request is not rate limited
- fallback: Optional output for rate-limited requests (route terminates if not provided)

Properties:

- limitType: "count" or "cost"
- key: Request field to use for rate limiting (e.g. "metadata.user_id")
- limit: Maximum allowed requests/cost
- interval: Time window in seconds
- technique: "sliding" or "fixed" window

```
{  "id": "<id>",  "type": "rate_limit",  "properties": {    "limitType": "count",    "key": "metadata.user_id",    "limit": 100,    "interval": 3600,    "technique": "sliding"  },  "outputs": {    "success": { "elementId": "node_model_workers_ai" },    "fallback": { "elementId": "node_model_openai_mini" }  }}
```

### Model

Executes inference using a specified model and provider with configurable timeout and retry settings.

- Inputs: Request
- Outputs:

success: Forwards request to provided element if model successfully starts streaming a response
fallback: Optional output if model fails after all retries or times out
- success: Forwards request to provided element if model successfully starts streaming a response
- fallback: Optional output if model fails after all retries or times out

Properties:

- provider: AI provider (e.g. "openai", "anthropic")
- model: Specific model name
- timeout: Request timeout in milliseconds
- retries: Number of retry attempts

```
{  "id": "<id>",  "type": "model",  "properties": {    "provider": "openai",    "model": "gpt-4o-mini",    "timeout": 60000,    "retries": 4  },  "outputs": {    "success": { "elementId": "<id>" },    "fallback": { "elementId": "<id>" }  }}
```

### End element

Marks the end of a route. Returns the last successful model response, or an error if no model response was generated.

- Inputs: Request
- Outputs: None

```
{  "id": "<id>",  "type": "end"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Data Loss Prevention (DLP)

**來源**: [https://developers.cloudflare.com/ai-gateway/features/dlp/](https://developers.cloudflare.com/ai-gateway/features/dlp/)

Page options # Data Loss Prevention (DLP)

Data Loss Prevention (DLP) for AI Gateway helps protect your organization from inadvertent exposure of sensitive data through AI interactions. By integrating with Cloudflare's proven DLP technology, AI Gateway can scan both incoming prompts and outgoing AI responses for sensitive information, ensuring your AI applications maintain security and compliance standards.

## How it works

AI Gateway DLP leverages the same powerful detection engines used in Cloudflare's Data Loss Prevention solution to scan AI traffic in real-time. The system analyzes both user prompts sent to AI models and responses received from AI providers, identifying sensitive data patterns and taking appropriate protective actions.

## Key benefits

- Prevent data leakage: Stop sensitive information from being inadvertently shared with AI providers or exposed in AI responses
- Maintain compliance: Help meet regulatory requirements like GDPR, HIPAA, and PCI DSS
- Consistent protection: Apply the same DLP policies across all AI providers and models
- Audit visibility: Comprehensive logging and reporting for security and compliance teams
- Zero-code integration: Enable protection without modifying existing AI applications

## Supported AI traffic

AI Gateway DLP can scan:

- User prompts - Content submitted to AI models, including text, code, and structured data
- AI responses - Output generated by AI models before being returned to users

The system works with all AI providers supported by AI Gateway, providing consistent protection regardless of which models or services you use.

## Integration with Cloudflare DLP

AI Gateway DLP uses the same detection profiles and policies as Cloudflare's enterprise DLP solution. This means:

- Unified management - Configure DLP policies once and apply them across web traffic, email, SaaS applications, and AI interactions
- Consistent detection - The same sensitive data patterns are detected across all channels
- Centralized reporting - All DLP events appear in the same dashboard and logs
- Shared profiles - Reuse existing DLP detection profiles for AI traffic

For more information about Cloudflare's DLP capabilities, refer to the Data Loss Prevention documentation.

## Getting started

To enable DLP for your AI Gateway:

1. Set up DLP policies for your AI Gateway
2. Configure detection profiles and response actions
3. Monitor DLP events through the Cloudflare dashboard

## Related resources

- Set up DLP for AI Gateway
- Cloudflare Data Loss Prevention
- AI Gateway Security Features
- DLP Detection Profiles

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Set up Data Loss Prevention (DLP)

**來源**: [https://developers.cloudflare.com/ai-gateway/features/dlp/set-up-dlp/](https://developers.cloudflare.com/ai-gateway/features/dlp/set-up-dlp/)

Page options # Set up Data Loss Prevention (DLP)

Add Data Loss Prevention (DLP) to any AI Gateway to start scanning AI prompts and responses for sensitive data.

## Prerequisites

- An existing AI Gateway

## Enable DLP for AI Gateway

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Go to AI > AI Gateway.
3. Select a gateway where you want to enable DLP.
4. Go to the Firewall tab.
5. Toggle Data Loss Prevention (DLP) to On.

## Add DLP policies

After enabling DLP, you can create policies to define how sensitive data should be handled:

1. Under the DLP section, click Add Policy.
2. Configure the following fields for each policy:


Policy ID: Enter a unique name for this policy (e.g., "Block-PII-Requests")


DLP Profiles: Select the DLP profiles to check against. AI requests/responses will be checked against each of the selected profiles. Available profiles include:

Financial Information - Credit cards, bank accounts, routing numbers
Personal Identifiable Information (PII) - Names, addresses, phone numbers
Government Identifiers - SSNs, passport numbers, driver's licenses
Healthcare Information - Medical record numbers, patient data
Custom Profiles - Organization-specific data patterns

NoteDLP profiles can be created and managed in the Zero Trust DLP dashboard.


Action: Choose the action to take when any of the selected profiles match:

Flag - Record the detection for audit purposes without blocking
Block - Prevent the request/response from proceeding



Check: Select what to scan:

Request - Scan user prompts sent to AI providers
Response - Scan AI model responses before returning to users
Both - Scan both requests and responses
3. Policy ID: Enter a unique name for this policy (e.g., "Block-PII-Requests")
4. DLP Profiles: Select the DLP profiles to check against. AI requests/responses will be checked against each of the selected profiles. Available profiles include:

Financial Information - Credit cards, bank accounts, routing numbers
Personal Identifiable Information (PII) - Names, addresses, phone numbers
Government Identifiers - SSNs, passport numbers, driver's licenses
Healthcare Information - Medical record numbers, patient data
Custom Profiles - Organization-specific data patterns

NoteDLP profiles can be created and managed in the Zero Trust DLP dashboard.
5. Financial Information - Credit cards, bank accounts, routing numbers
6. Personal Identifiable Information (PII) - Names, addresses, phone numbers
7. Government Identifiers - SSNs, passport numbers, driver's licenses
8. Healthcare Information - Medical record numbers, patient data
9. Custom Profiles - Organization-specific data patterns
10. Action: Choose the action to take when any of the selected profiles match:

Flag - Record the detection for audit purposes without blocking
Block - Prevent the request/response from proceeding
11. Flag - Record the detection for audit purposes without blocking
12. Block - Prevent the request/response from proceeding
13. Check: Select what to scan:

Request - Scan user prompts sent to AI providers
Response - Scan AI model responses before returning to users
Both - Scan both requests and responses
14. Request - Scan user prompts sent to AI providers
15. Response - Scan AI model responses before returning to users
16. Both - Scan both requests and responses
17. Click Save to save your policy configuration.

## Manage DLP policies

You can create multiple DLP policies with different configurations:

- Add multiple policies: Click Add Policy to create additional policies with different profile combinations or actions
- Enable/disable policies: Use the toggle next to each policy to individually enable or disable them without deleting the configuration
- Edit policies: Click on any existing policy to modify its settings
- Save changes: Always click Save after making any changes to apply them

## Test your configuration

After configuring DLP settings:

1. Make a test AI request through your gateway that contains sample sensitive data.
2. Check the AI Gateway Logs to verify DLP scanning is working.
3. Review the detection results and adjust profiles or actions as needed.

## Monitor DLP events

### Viewing DLP logs in AI Gateway

DLP events are integrated into your AI Gateway logs:

1. Go to AI > AI Gateway > your gateway > Logs.
2. Click on any log entry to view detailed information. For requests where DLP policies were triggered, additional details are included:

DLP Action Taken: Shows whether the action was "Flag" or "Block"
DLP Policies Matched: Detailed information about each policy that matched, including:

Which DLP profiles triggered within each policy
Whether the match occurred in the request or response
Specific entries that matched within each DLP profile
3. DLP Action Taken: Shows whether the action was "Flag" or "Block"
4. DLP Policies Matched: Detailed information about each policy that matched, including:

Which DLP profiles triggered within each policy
Whether the match occurred in the request or response
Specific entries that matched within each DLP profile
5. Which DLP profiles triggered within each policy
6. Whether the match occurred in the request or response
7. Specific entries that matched within each DLP profile

### Filter DLP events

To view only DLP-related requests:

1. On the Logs tab, click Add Filter.
2. Select DLP Action from the filter options.
3. Choose to filter by:

FLAG - Show only requests where sensitive data was flagged
BLOCK - Show only requests that were blocked due to DLP policies
4. FLAG - Show only requests where sensitive data was flagged
5. BLOCK - Show only requests that were blocked due to DLP policies

## Error handling

When DLP policies are triggered, your application will receive additional information through response headers and error codes.

### DLP response header

When a request matches DLP policies (whether flagged or blocked), an additional cf-aig-dlp header is returned containing detailed information about the match:

#### Header schema

```
{  "findings": [    {      "profile": {        "context": {},        "entry_ids": ["string"],        "profile_id": "string"      },      "policy_ids": ["string"],      "check": "REQUEST" | "RESPONSE"    }  ],  "action": "BLOCK" | "FLAG"}
```

#### Example header value

```
{  "findings": [    {      "profile": {        "context": {},        "entry_ids": ["a1b2c3d4-e5f6-7890-abcd-ef1234567890", "f7e8d9c0-b1a2-3456-789a-bcdef0123456"],        "profile_id": "12345678-90ab-cdef-1234-567890abcdef"      },      "policy_ids": ["block_financial_data"],      "check": "REQUEST"    }  ],  "action": "BLOCK"}
```

Use this header to programmatically detect which DLP profiles and entries were matched, which policies triggered, and whether the match occurred in the request or response.

### Error codes for blocked requests

When DLP blocks a request, your application will receive structured error responses:

- Request blocked by DLP

"code": 2029
"message": "Request content blocked due to DLP policy violations"
- "code": 2029
- "message": "Request content blocked due to DLP policy violations"
- Response blocked by DLP

"code": 2030
"message": "Response content blocked due to DLP policy violations"
- "code": 2030
- "message": "Response content blocked due to DLP policy violations"

Handle these errors in your application:

```
try {  const res = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {    prompt: userInput  }, {    gateway: {id: 'your-gateway-id'}  })  return Response.json(res)} catch (e) {  if ((e as Error).message.includes('2029')) {    return new Response('Request contains sensitive data and cannot be processed.')  }  if ((e as Error).message.includes('2030')) {    return new Response('AI response was blocked due to sensitive content.')  }  return new Response('AI request failed')}
```

## Best practices

- Start with flagging: Begin with "Flag" actions to understand what data is being detected before implementing blocking
- Tune confidence levels: Adjust detection sensitivity based on your false positive tolerance
- Use appropriate profiles: Select DLP profiles that match your data protection requirements
- Monitor regularly: Review DLP events to ensure policies are working as expected
- Test thoroughly: Validate DLP behavior with sample sensitive data before production deployment

## Troubleshooting

### DLP not triggering

- Verify DLP toggle is enabled for your gateway
- Ensure selected DLP profiles are appropriate for your test data
- Confirm confidence levels aren't set too high

### Unexpected blocking

- Review DLP logs to see which profiles triggered
- Consider lowering confidence levels for problematic profiles
- Test with different sample data to understand detection patterns
- Adjust profile selections if needed

For additional support with DLP configuration, refer to the Cloudflare Data Loss Prevention documentation or contact your Cloudflare support team.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Guardrails

**來源**: [https://developers.cloudflare.com/ai-gateway/features/guardrails/](https://developers.cloudflare.com/ai-gateway/features/guardrails/)

Page options # Guardrails

Guardrails help you deploy AI applications safely by intercepting and evaluating both user prompts and model responses for harmful content. Acting as a proxy between your application and model providers (such as OpenAI, Anthropic, DeepSeek, and others), AI Gateway's Guardrails ensure a consistent and secure experience across your entire AI ecosystem.

Guardrails proactively monitor interactions between users and AI models, giving you:

- Consistent moderation: Uniform moderation layer that works across models and providers.
- Enhanced safety and user trust: Proactively protect users from harmful or inappropriate interactions.
- Flexibility and control over allowed content: Specify which categories to monitor and choose between flagging or outright blocking.
- Auditing and compliance capabilities: Receive updates on evolving regulatory requirements with logs of user prompts, model responses, and enforced guardrails.

## Video demo

## How Guardrails work

AI Gateway inspects all interactions in real time by evaluating content against predefined safety parameters. Guardrails work by:

1. Intercepting interactions:
AI Gateway proxies requests and responses, sitting between the user and the AI model.
2. Inspecting content:

User prompts: AI Gateway checks prompts against safety parameters (for example, violence, hate, or sexual content). Based on your settings, prompts can be flagged or blocked before reaching the model.
Model responses: Once processed, the AI model response is inspected. If hazardous content is detected, it can be flagged or blocked before being delivered to the user.
3. User prompts: AI Gateway checks prompts against safety parameters (for example, violence, hate, or sexual content). Based on your settings, prompts can be flagged or blocked before reaching the model.
4. Model responses: Once processed, the AI model response is inspected. If hazardous content is detected, it can be flagged or blocked before being delivered to the user.
5. Applying actions:
Depending on your configuration, flagged content is logged for review, while blocked content is prevented from proceeding.

## Related resource

- Cloudflare Blog: Keep AI interactions secure and risk-free with Guardrails in AI Gateway ↗

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Set up Guardrails

**來源**: [https://developers.cloudflare.com/ai-gateway/features/guardrails/set-up-guardrail/](https://developers.cloudflare.com/ai-gateway/features/guardrails/set-up-guardrail/)

Page options # Set up Guardrails

Add Guardrails to any gateway to start evaluating and potentially modifying responses.

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Go to AI > AI Gateway.
3. Select a gateway.
4. Go to Guardrails.
5. Switch the toggle to On.
6. To customize categories, select Change > Configure specific categories.
7. Update your choices for how Guardrails works on specific prompts or responses (Flag, Ignore, Block).

For Prompts: Guardrails will evaluate and transform incoming prompts based on your security policies.
For Responses: Guardrails will inspect the model's responses to ensure they meet your content and formatting guidelines.
8. For Prompts: Guardrails will evaluate and transform incoming prompts based on your security policies.
9. For Responses: Guardrails will inspect the model's responses to ensure they meet your content and formatting guidelines.
10. Select Save.

Usage considerations

For additional details about how to implement Guardrails, refer to Usage considerations.

## Viewing Guardrail results in Logs

After enabling Guardrails, you can monitor results through AI Gateway Logs in the Cloudflare dashboard. Guardrail logs are marked with a green shield icon, and each logged request includes an eventID, which links to its corresponding Guardrail evaluation log(s) for easy tracking. Logs are generated for all requests, including those that pass Guardrail checks.

## Error handling and blocked requests

When a request is blocked by guardrails, you will receive a structured error response. These indicate whether the issue occurred with the prompt or the model response. Use error codes to differentiate between prompt versus response violations.

- Prompt blocked

"code": 2016
"message": "Prompt blocked due to security configurations"
- "code": 2016
- "message": "Prompt blocked due to security configurations"
- Response blocked

"code": 2017
"message": "Response blocked due to security configurations"
- "code": 2017
- "message": "Response blocked due to security configurations"

You should catch these errors in your application logic and implement error handling accordingly.

For example, when using Workers AI with a binding:

```
try {  const res = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {    prompt: "how to build a gun?"  }, {    gateway: {id: 'gateway_id'}  })  return Response.json(res)} catch (e) {  if ((e as Error).message.includes('2016')) {    return new Response('Prompt was blocked by guardrails.')  }  if ((e as Error).message.includes('2017')) {    return new Response('Response was blocked by guardrails.')  }  return new Response('Unknown AI error')}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Supported model types

**來源**: [https://developers.cloudflare.com/ai-gateway/features/guardrails/supported-model-types/](https://developers.cloudflare.com/ai-gateway/features/guardrails/supported-model-types/)

Page options # Supported model types

AI Gateway's Guardrails detects the type of AI model being used and applies safety checks accordingly:

- Text generation models: Both prompts and responses are evaluated.
- Embedding models: Only the prompt is evaluated, as the response consists of numerical embeddings, which are not meaningful for moderation.
- Unknown models: If the model type cannot be determined, only the prompt is evaluated, while the response bypass Guardrails.

Note

Guardrails does not yet support streaming responses. Support for streaming is planned for a future update.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Usage considerations

**來源**: [https://developers.cloudflare.com/ai-gateway/features/guardrails/usage-considerations/](https://developers.cloudflare.com/ai-gateway/features/guardrails/usage-considerations/)

Page options # Usage considerations

Guardrails currently uses Llama Guard 3 8B ↗ on Workers AI to perform content evaluations. The underlying model may be updated in the future, and we will reflect those changes within Guardrails.

Since Guardrails runs on Workers AI, enabling it incurs usage on Workers AI. You can monitor usage through the Workers AI Dashboard.

## Additional considerations

- Model availability: If at least one hazard category is set to block, but AI Gateway is unable to receive a response from Workers AI, the request will be blocked. Conversely, if a hazard category is set to flag and AI Gateway cannot obtain a response from Workers AI, the request will proceed without evaluation. This approach prioritizes availability, allowing requests to continue even when content evaluation is not possible.
- Latency impact: Enabling Guardrails adds some latency. Enabling Guardrails introduces additional latency to requests. Typically, evaluations using Llama Guard 3 8B on Workers AI add approximately 500 milliseconds per request. However, larger requests may experience increased latency, though this increase is not linear. Consider this when balancing safety and performance.
- Handling long content: When evaluating long prompts or responses, Guardrails automatically segments the content into smaller chunks, processing each through separate Guardrail requests. This approach ensures comprehensive moderation but may result in increased latency for longer inputs.
- Supported languages: Llama Guard 3.3 8B supports content safety classification in the following languages: English, French, German, Hindi, Italian, Portuguese, Spanish, and Thai.
- Streaming support: Streaming is not supported when using Guardrails.

Note

Llama Guard is provided as-is without any representations, warranties, or guarantees. Any rules or examples contained in blogs, developer docs, or other reference materials are provided for informational purposes only. You acknowledge and understand that you are responsible for the results and outcomes of your use of AI Gateway.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## BYOK (Store Keys)

**來源**: [https://developers.cloudflare.com/ai-gateway/configuration/bring-your-own-keys/](https://developers.cloudflare.com/ai-gateway/configuration/bring-your-own-keys/)

Page options # BYOK (Store Keys)

## Introduction

Bring your own keys (BYOK) is a feature in Cloudflare AI Gateway that allows you to securely store your AI provider API keys directly in the Cloudflare dashboard. Instead of including API keys in every request to your AI models, you can configure them once in the dashboard, and reference them in your gateway configuration.

The keys are stored securely with Secrets Store and allows for:

- Secure storage and limit exposure
- Easier key rotation
- Rate limit, budget limit and other restrictions with Dynamic Routes

## Setting up BYOK

### Prerequisites

- Ensure your gateway is authenticated.
- Ensure you have appropriate permissions to create and deploy secrets on Secrets Store.

### Configure API keys

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Go to AI > AI Gateway.
3. Select your gateway or create a new one.
4. Go to the Provider Keys section.
5. Click Add API Key.
6. Select your AI provider from the dropdown.
7. Enter your API key and optionally provide a description.
8. Click Save.

### Update your applications

Once you've configured your API keys in the dashboard:

1. Remove API keys from your code: Delete any hardcoded API keys or environment variables.
2. Update request headers: Remove provider authorization headers from your requests. Note that you still need to pass cf-aig-authorization.
3. Test your integration: Verify that requests work without including API keys.

## Example

With BYOK enabled, your workflow changes from:

1. Traditional approach: Include API key in every request header
Terminal windowcurl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  -H 'cf-aig-authorization: Bearer {CF_AIG_TOKEN}' \  -H "Authorization: Bearer YOUR_OPENAI_API_KEY" \  -H "Content-Type: application/json" \  -d '{"model": "gpt-4", "messages": [...]}'
2. BYOK approach: Configure key once in dashboard, make requests without exposing keys
Terminal windowcurl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  -H 'cf-aig-authorization: Bearer {CF_AIG_TOKEN}' \  -H "Content-Type: application/json" \  -d '{"model": "gpt-4", "messages": [...]}'

## Managing API keys

### Viewing configured keys

In the AI Gateway dashboard, you can:

- View all configured API keys by provider
- See when each key was last used
- Check the status of each key (active, expired, invalid)

### Rotating keys

To rotate an API key:

1. Generate a new API key from your AI provider
2. In the Cloudflare dashboard, edit the existing key entry
3. Replace the old key with the new one
4. Save the changes

Your applications will immediately start using the new key without any code changes or downtime.

### Revoking access

To remove an API key:

1. In the AI Gateway dashboard, find the key you want to remove
2. Click the Delete button
3. Confirm the deletion

Impact of key deletion

Deleting an API key will immediately stop all requests that depend on it. Make sure to update your applications or configure alternative keys before deletion.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Custom costs

**來源**: [https://developers.cloudflare.com/ai-gateway/configuration/custom-costs/](https://developers.cloudflare.com/ai-gateway/configuration/custom-costs/)

Page options # Custom costs

AI Gateway allows you to set custom costs at the request level. By using this feature, the cost metrics can accurately reflect your unique pricing, overriding the default or public model costs.

Note

Custom costs will only apply to requests that pass tokens in their response. Requests without token information will not have costs calculated.

## Custom cost

To add custom costs to your API requests, use the cf-aig-custom-cost header. This header enables you to specify the cost per token for both input (tokens sent) and output (tokens received).

- per_token_in: The negotiated input token cost (per token).
- per_token_out: The negotiated output token cost (per token).

There is no limit to the number of decimal places you can include, ensuring precise cost calculations, regardless of how small the values are.

Custom costs will appear in the logs with an underline, making it easy to identify when custom pricing has been applied.

In this example, if you have a negotiated price of $1 per million input tokens and $2 per million output tokens, include the cf-aig-custom-cost header as shown below.

Request with custom cost ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  --header "Authorization: Bearer $TOKEN" \  --header 'Content-Type: application/json' \  --header 'cf-aig-custom-cost: {"per_token_in":0.000001,"per_token_out":0.000002}' \  --data ' {        "model": "gpt-4o-mini",        "messages": [          {            "role": "user",            "content": "When is Cloudflare’s Birthday Week?"          }        ]      }'
```

Note

If a response is served from cache (cache hit), the cost is always 0, even if you specified a custom cost. Custom costs only apply when the request reaches the model provider.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Manage gateways

**來源**: [https://developers.cloudflare.com/ai-gateway/configuration/manage-gateway/](https://developers.cloudflare.com/ai-gateway/configuration/manage-gateway/)

Page options # Manage gateways

You have several different options for managing an AI Gateway.

## Create gateway

- Dashboard
- API

Create a Gateway

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Go to AI > AI Gateway.
3. Select Create Gateway.
4. Enter your Gateway name. Note: Gateway name has a 64 character limit.
5. Select Create.

To set up an AI Gateway using the API:

1. Create an API token with the following permissions:

AI Gateway - Read
AI Gateway - Edit
2. AI Gateway - Read
3. AI Gateway - Edit
4. Get your Account ID.
5. Using that API token and Account ID, send a POST request to the Cloudflare API.

## Edit gateway

- Dashboard
- API

To edit an AI Gateway in the dashboard:

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Go to AI > AI Gateway.
3. Select your gateway.
4. Go to Settings and update as needed.

To edit an AI Gateway, send a PUT request to the Cloudflare API.

Note

For more details about what settings are available for editing, refer to Configuration.

## Delete gateway

Deleting your gateway is permanent and can not be undone.

- Dashboard
- API

To delete an AI Gateway in the dashboard:

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Go to AI > AI Gateway.
3. Select your gateway from the list of available options.
4. Go to Settings.
5. For Delete Gateway, select Delete (and confirm your deletion).

To delete an AI Gateway, send a DELETE request to the Cloudflare API.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Request handling

**來源**: [https://developers.cloudflare.com/ai-gateway/configuration/request-handling/](https://developers.cloudflare.com/ai-gateway/configuration/request-handling/)

Page options # Request handling

Deprecated

While the request handling features described on this page still work, Dynamic Routing is now the preferred way to achieve advanced request handling, including timeouts, retries, and fallbacks. Dynamic Routing provides a more powerful and flexible approach with a visual interface for managing complex routing scenarios.

Your AI gateway supports different strategies for handling requests to providers, which allows you to manage AI interactions effectively and ensure your applications remain responsive and reliable.

## Request timeouts

A request timeout allows you to trigger fallbacks or a retry if a provider takes too long to respond.

These timeouts help:

- Improve user experience, by preventing users from waiting too long for a response
- Proactively handle errors, by detecting unresponsive providers and triggering a fallback option

Request timeouts can be set on a Universal Endpoint or directly on a request to any provider.

### Definitions

A timeout is set in milliseconds. Additionally, the timeout is based on when the first part of the response comes back. As long as the first part of the response returns within the specified timeframe - such as when streaming a response - your gateway will wait for the response.

### Configuration

#### Universal Endpoint

If set on a Universal Endpoint, a request timeout specifies the timeout duration for requests and triggers a fallback.

For a Universal Endpoint, configure the timeout value by setting a requestTimeout property within the provider-specific config object. Each provider can have a different requestTimeout value for granular customization.

Provider-level config ```
curl 'https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}' \  --header 'Content-Type: application/json' \  --data '[    {        "provider": "workers-ai",        "endpoint": "@cf/meta/llama-3.1-8b-instruct",        "headers": {            "Authorization": "Bearer {cloudflare_token}",            "Content-Type": "application/json"        },        "config": {            "requestTimeout": 1000        },        "query": {34 collapsed lines            "messages": [                {                    "role": "system",                    "content": "You are a friendly assistant"                },                {                    "role": "user",                    "content": "What is Cloudflare?"                }            ]        }    },    {        "provider": "workers-ai",        "endpoint": "@cf/meta/llama-3.1-8b-instruct-fast",        "headers": {            "Authorization": "Bearer {cloudflare_token}",            "Content-Type": "application/json"        },        "query": {            "messages": [                {                    "role": "system",                    "content": "You are a friendly assistant"                },                {                    "role": "user",                    "content": "What is Cloudflare?"                }            ]        },        "config": {            "requestTimeout": 3000        },    }]'
```

#### Direct provider

If set on a provider request, request timeout specifies the timeout duration for a request and - if exceeded - returns an error.

For a provider-specific endpoint, configure the timeout value by adding a cf-aig-request-timeout header.

Provider-specific endpoint example ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/@cf/meta/llama-3.1-8b-instruct \ --header 'Authorization: Bearer {cf_api_token}' \ --header 'Content-Type: application/json' \ --header 'cf-aig-request-timeout: 5000' --data '{"prompt": "What is Cloudflare?"}'
```

## Request retries

AI Gateway also supports automatic retries for failed requests, with a maximum of five retry attempts.

This feature improves your application's resiliency, ensuring you can recover from temporary issues without manual intervention.

Request timeouts can be set on a Universal Endpoint or directly on a request to any provider.

### Definitions

With request retries, you can adjust a combination of three properties:

- Number of attempts (maximum of 5 tries)
- How long before retrying (in milliseconds, maximum of 5 seconds)
- Backoff method (constant, linear, or exponential)

On the final retry attempt, your gateway will wait until the request completes, regardless of how long it takes.

### Configuration

#### Universal endpoint

If set on a Universal Endpoint, a request retry will automatically retry failed requests up to five times before triggering any configured fallbacks.

For a Universal Endpoint, configure the retry settings with the following properties in the provider-specific config:

```
config:{  maxAttempts?: number;  retryDelay?: number;  backoff?: "constant" | "linear" | "exponential";}
```

As with the request timeout, each provider can have a different retry settings for granular customization.

Provider-level config ```
curl 'https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}' \  --header 'Content-Type: application/json' \  --data '[    {        "provider": "workers-ai",        "endpoint": "@cf/meta/llama-3.1-8b-instruct",        "headers": {            "Authorization": "Bearer {cloudflare_token}",            "Content-Type": "application/json"        },        "config": {            "maxAttempts": 2,            "retryDelay": 1000,            "backoff": "constant"        },39 collapsed lines        "query": {            "messages": [                {                    "role": "system",                    "content": "You are a friendly assistant"                },                {                    "role": "user",                    "content": "What is Cloudflare?"                }            ]        }    },    {        "provider": "workers-ai",        "endpoint": "@cf/meta/llama-3.1-8b-instruct-fast",        "headers": {            "Authorization": "Bearer {cloudflare_token}",            "Content-Type": "application/json"        },        "query": {            "messages": [                {                    "role": "system",                    "content": "You are a friendly assistant"                },                {                    "role": "user",                    "content": "What is Cloudflare?"                }            ]        },        "config": {            "maxAttempts": 4,            "retryDelay": 1000,            "backoff": "exponential"        },    }]'
```

#### Direct provider

If set on a provider request, a request retry will automatically retry failed requests up to five times. On the final retry attempt, your gateway will wait until the request completes, regardless of how long it takes.

For a provider-specific endpoint, configure the retry settings by adding different header values:

- cf-aig-max-attempts (number)
- cf-aig-retry-delay (number)
- cf-aig-backoff ("constant" | "linear" | "exponential)

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Authenticated Gateway

**來源**: [https://developers.cloudflare.com/ai-gateway/configuration/authentication/](https://developers.cloudflare.com/ai-gateway/configuration/authentication/)

Page options # Authenticated Gateway

Using an Authenticated Gateway in AI Gateway adds security by requiring a valid authorization token for each request. This feature is especially useful when storing logs, as it prevents unauthorized access and protects against invalid requests that can inflate log storage usage and make it harder to find the data you need. With Authenticated Gateway enabled, only requests with the correct token are processed.

Note

We recommend enabling Authenticated Gateway when opting to store logs with AI Gateway.

If Authenticated Gateway is enabled but a request does not include the required cf-aig-authorization header, the request will fail. This setting ensures that only verified requests pass through the gateway. To bypass the need for the cf-aig-authorization header, make sure to disable Authenticated Gateway.

## Setting up Authenticated Gateway using the Dashboard

1. Go to the Settings for the specific gateway you want to enable authentication for.
2. Select Create authentication token to generate a custom token with the required Run permissions. Be sure to securely save this token, as it will not be displayed again.
3. Include the cf-aig-authorization header with your API token in each request for this gateway.
4. Return to the settings page and toggle on Authenticated Gateway.

## Example requests with OpenAI

Terminal window ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  --header 'cf-aig-authorization: Bearer {CF_AIG_TOKEN}' \  --header 'Authorization: Bearer OPENAI_TOKEN' \  --header 'Content-Type: application/json' \  --data '{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "What is Cloudflare?"}]}'
```

Using the OpenAI SDK:

```
import OpenAI from "openai";
const openai = new OpenAI({  apiKey: process.env.OPENAI_API_KEY,  baseURL: "https://gateway.ai.cloudflare.com/v1/account-id/gateway/openai",  defaultHeaders: {    "cf-aig-authorization": `Bearer {token}`,  },});
```

## Example requests with the Vercel AI SDK

```
import { createOpenAI } from "@ai-sdk/openai";
const openai = createOpenAI({  baseURL: "https://gateway.ai.cloudflare.com/v1/account-id/gateway/openai",  headers: {    "cf-aig-authorization": `Bearer {token}`,  },});
```

## Expected behavior

Note

When an AI Gateway is accessed from a Cloudflare Worker using a binding, the cf-aig-authorization header does not need to be manually included.
Requests made through bindings are pre-authenticated within the associated Cloudflare account.

The following table outlines gateway behavior based on the authentication settings and header status:

| Authentication Setting | Header Info | Gateway State | Response |
| --- | --- | --- | --- |
| On | Header present | Authenticated gateway | Request succeeds |
| On | No header | Error | Request fails due to missing authorization |
| Off | Header present | Unauthenticated gateway | Request succeeds |
| Off | No header | Unauthenticated gateway | Request succeeds |

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Costs

**來源**: [https://developers.cloudflare.com/ai-gateway/observability/costs/](https://developers.cloudflare.com/ai-gateway/observability/costs/)

Page options # Costs

Cost metrics are only available for endpoints where the models return token data and the model name in their responses.

## Track costs across AI providers

AI Gateway makes it easier to monitor and estimate token based costs across all your AI providers. This can help you:

- Understand and compare usage costs between providers.
- Monitor trends and estimate spend using consistent metrics.
- Apply custom pricing logic to match negotiated rates.

Note

The cost metric is an estimation based on the number of tokens sent and received in requests. While this metric can help you monitor and predict cost trends, refer to your provider's dashboard for the most accurate cost details.

Caution

Providers may introduce new models or change their pricing. If you notice outdated cost data or are using a model not yet supported by our cost tracking, please submit a request ↗

## Custom costs

AI Gateway allows users to set custom costs when operating under special pricing agreements or negotiated rates. Custom costs can be applied at the request level, and when applied, they will override the default or public model costs.
For more information on configuration of custom costs, please visit the Custom Costs configuration page.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Custom metadata

**來源**: [https://developers.cloudflare.com/ai-gateway/observability/custom-metadata/](https://developers.cloudflare.com/ai-gateway/observability/custom-metadata/)

Page options # Custom metadata

Custom metadata in AI Gateway allows you to tag requests with user IDs or other identifiers, enabling better tracking and analysis of your requests. Metadata values can be strings, numbers, or booleans, and will appear in your logs, making it easy to search and filter through your data.

## Key Features

- Custom Tagging: Add user IDs, team names, test indicators, and other relevant information to your requests.
- Enhanced Logging: Metadata appears in your logs, allowing for detailed inspection and troubleshooting.
- Search and Filter: Use metadata to efficiently search and filter through logged requests.

Note

AI Gateway allows you to pass up to five custom metadata entries per request. If more than five entries are provided, only the first five will be saved; additional entries will be ignored. Ensure your custom metadata is limited to five entries to avoid unprocessed or lost data.

## Supported Metadata Types

- String
- Number
- Boolean

Note

Objects are not supported as metadata values.

## Implementations

### Using cURL

To include custom metadata in your request using cURL:

Terminal window ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  --header 'Authorization: Bearer {api_token}' \  --header 'Content-Type: application/json' \  --header 'cf-aig-metadata: {"team": "AI", "user": 12345, "test":true}' \  --data '{"model": "gpt-4o", "messages": [{"role": "user", "content": "What should I eat for lunch?"}]}'
```

### Using SDK

To include custom metadata in your request using the OpenAI SDK:

```
import OpenAI from "openai";
export default { async fetch(request, env, ctx) {   const openai = new OpenAI({     apiKey: env.OPENAI_API_KEY,     baseURL: "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai",   });
   try {     const chatCompletion = await openai.chat.completions.create(       {         model: "gpt-4o",         messages: [{ role: "user", content: "What should I eat for lunch?" }],         max_tokens: 50,       },       {         headers: {           "cf-aig-metadata": JSON.stringify({             user: "JaneDoe",             team: 12345,             test: true           }),         },       }     );
     const response = chatCompletion.choices[0].message;     return new Response(JSON.stringify(response));   } catch (e) {     console.log(e);     return new Response(e);   } },};
```

### Using Binding

To include custom metadata in your request using Bindings:

```
export default { async fetch(request, env, ctx) {   const aiResp = await env.AI.run(       '@cf/mistral/mistral-7b-instruct-v0.1',       { prompt: 'What should I eat for lunch?' },       { gateway: { id: 'gateway_id', metadata: { "team": "AI", "user": 12345, "test": true} } }   );
   return new Response(aiResp); },};
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Analytics

**來源**: [https://developers.cloudflare.com/ai-gateway/observability/analytics/](https://developers.cloudflare.com/ai-gateway/observability/analytics/)

Page options # Analytics

Your AI Gateway dashboard shows metrics on requests, tokens, caching, errors, and cost. You can filter these metrics by time.
These analytics help you understand traffic patterns, token consumption, and
potential issues across AI providers. You can
view the following analytics:

- Requests: Track the total number of requests processed by AI Gateway.
- Token Usage: Analyze token consumption across requests, giving insight into usage patterns.
- Costs: Gain visibility into the costs associated with using different AI providers, allowing you to track spending, manage budgets, and optimize resources.
- Errors: Monitor the number of errors across the gateway, helping to identify and troubleshoot issues.
- Cached Responses: View the percentage of responses served from cache, which can help reduce costs and improve speed.

## View analytics

- Dashboard
- graphql

To view analytics in the dashboard:

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Go to AI > AI Gateway.
3. Make sure you have your gateway selected.

You can use GraphQL to query your usage data outside of the AI Gateway dashboard. See the example query below. You will need to use your Cloudflare token when making the request, and change {account_id} to match your account tag.

Request ```
curl https://api.cloudflare.com/client/v4/graphql \  --header 'Authorization: Bearer TOKEN \  --header 'Content-Type: application/json' \  --data '{    "query": "query{\n  viewer {\n  accounts(filter: { accountTag: \"{account_id}\" }) {\n  requests: aiGatewayRequestsAdaptiveGroups(\n      limit: $limit\n      filter: { datetimeHour_geq: $start, datetimeHour_leq: $end }\n      orderBy: [datetimeMinute_ASC]\n    ) {\n      count,\n      dimensions {\n          model,\n          provider,\n          gateway,\n          ts: datetimeMinute\n      }\n      \n    }\n      \n  }\n  }\n}",    "variables": {      "limit": 1000,      "start": "2023-09-01T10:00:00.000Z",      "end": "2023-09-30T10:00:00.000Z",      "orderBy": "date_ASC"    }}'
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Logging

**來源**: [https://developers.cloudflare.com/ai-gateway/observability/logging/](https://developers.cloudflare.com/ai-gateway/observability/logging/)

Page options # Logging

Logging is a fundamental building block for application development. Logs provide insights during the early stages of development and are often critical to understanding issues occurring in production.

Your AI Gateway dashboard shows logs of individual requests, including the user prompt, model response, provider, timestamp, request status, token usage, cost, and duration. These logs persist, giving you the flexibility to store them for your preferred duration and do more with valuable request data.

By default, each gateway can store up to 10 million logs. You can customize this limit per gateway in your gateway settings to align with your specific requirements. If your storage limit is reached, new logs will stop being saved. To continue saving logs, you must delete older logs to free up space for new logs.
To learn more about your plan limits, refer to Limits.

We recommend using an authenticated gateway when storing logs to prevent unauthorized access and protects against invalid requests that can inflate log storage usage and make it harder to find the data you need. Learn more about setting up an authenticated gateway.

## Default configuration

Logs, which include metrics as well as request and response data, are enabled by default for each gateway. This logging behavior will be uniformly applied to all requests in the gateway. If you are concerned about privacy or compliance and want to turn log collection off, you can go to settings and opt out of logs. If you need to modify the log settings for specific requests, you can override this setting on a per-request basis.

To change the default log configuration in the dashboard:

1. In the Cloudflare dashboard, go to the AI Gateway page.
  Go to AI Gateway
2. Select Settings.
3. Change the Logs setting to your preference.

## Per-request logging

To override the default logging behavior set in the settings tab, you can define headers on a per-request basis.

### Collect logs (cf-aig-collect-log)

The cf-aig-collect-log header allows you to bypass the default log setting for the gateway. If the gateway is configured to save logs, the header will exclude the log for that specific request. Conversely, if logging is disabled at the gateway level, this header will save the log for that request.

In the example below, we use cf-aig-collect-log to bypass the default setting to avoid saving the log.

Terminal window ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  --header "Authorization: Bearer $TOKEN" \  --header 'Content-Type: application/json' \  --header 'cf-aig-collect-log: false \  --data ' {        "model": "gpt-4o-mini",        "messages": [          {            "role": "user",            "content": "What is the email address and phone number of user123?"          }        ]      }'
```

## Managing log storage

To manage your log storage effectively, you can:

- Set Storage Limits: Configure a limit on the number of logs stored per gateway in your gateway settings to ensure you only pay for what you need.
- Enable Automatic Log Deletion: Activate the Automatic Log Deletion feature in your gateway settings to automatically delete the oldest logs once the log limit you've set or the default storage limit of 10 million logs is reached. This ensures new logs are always saved without manual intervention.

## How to delete logs

To manage your log storage effectively and ensure continuous logging, you can delete logs using the following methods:

### Automatic Log Deletion

​To maintain continuous logging within your gateway's storage constraints, enable Automatic Log Deletion in your Gateway settings. This feature automatically deletes the oldest logs once the log limit you've set or the default storage limit of 10 million logs is reached, ensuring new logs are saved without manual intervention.

### Manual deletion

To manually delete logs through the dashboard, navigate to the Logs tab in the dashboard. Use the available filters such as status, cache, provider, cost, or any other options in the dropdown to refine the logs you wish to delete. Once filtered, select Delete logs to complete the action.

See full list of available filters and their descriptions below:

| Filter category | Filter options | Filter by description |
| --- | --- | --- |
| Status | error, status | error type or status. |
| Cache | cached, not cached | based on whether they were cached or not. |
| Provider | specific providers | the selected AI provider. |
| AI Models | specific models | the selected AI model. |
| Cost | less than, greater than | cost, specifying a threshold. |
| Request type | Universal, Workers AI Binding, WebSockets | the type of request. |
| Tokens | Total tokens, Tokens In, Tokens Out | token count (less than or greater than). |
| Duration | less than, greater than | request duration. |
| Feedback | equals, does not equal (thumbs up, thumbs down, no feedback) | feedback type. |
| Metadata Key | equals, does not equal | specific metadata keys. |
| Metadata Value | equals, does not equal | specific metadata values. |
| Log ID | equals, does not equal | a specific Log ID. |
| Event ID | equals, does not equal | a specific Event ID. |

### API deletion

You can programmatically delete logs using the AI Gateway API. For more comprehensive information on the DELETE logs endpoint, check out the Cloudflare API documentation.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Workers Logpush

**來源**: [https://developers.cloudflare.com/ai-gateway/observability/logging/logpush/](https://developers.cloudflare.com/ai-gateway/observability/logging/logpush/)

Page options # Workers Logpush

AI Gateway allows you to securely export logs to an external storage location, where you can decrypt and process them.
You can toggle Workers Logpush on and off in the Cloudflare dashboard ↗ settings. This product is available on the Workers Paid plan. For pricing information, refer to Pricing.

This guide explains how to set up Workers Logpush for AI Gateway, generate an RSA key pair for encryption, and decrypt the logs once they are received.

You can store up to 10 million logs per gateway. If your limit is reached, new logs will stop being saved and will not be exported through Workers Logpush. To continue saving and exporting logs, you must delete older logs to free up space for new logs. Workers Logpush has a limit of 4 jobs and a maximum request size of 1 MB per log.

Note

To export logs using Workers Logpush, you must have logs turned on for the gateway.

Need a higher limit?

To request an increase to a limit, complete the Limit Increase Request Form ↗. If the limit can be increased, Cloudflare will contact you with next steps.

## How logs are encrypted

We employ a hybrid encryption model efficiency and security. Initially, an AES key is generated for each log. This AES key is what actually encrypts the bulk of your data, chosen for its speed and security in handling large datasets efficiently.

Now, for securely sharing this AES key, we use RSA encryption. Here's what happens: the AES key, although lightweight, needs to be transmitted securely to the recipient. We encrypt this key with the recipient's RSA public key. This step leverages RSA's strength in secure key distribution, ensuring that only someone with the corresponding RSA private key can decrypt and use the AES key.

Once encrypted, both the AES-encrypted data and the RSA-encrypted AES key are sent together. Upon arrival, the recipient's system uses the RSA private key to decrypt the AES key. With the AES key now accessible, it is straightforward to decrypt the main data payload.

This method combines the best of both worlds: the efficiency of AES for data encryption with the secure key exchange capabilities of RSA, ensuring data integrity, confidentiality, and performance are all optimally maintained throughout the data lifecycle.

## Setting up Workers Logpush

To configure Workers Logpush for AI Gateway, follow these steps:

## 1. Generate an RSA key pair locally

You need to generate a key pair to encrypt and decrypt the logs. This script will output your RSA privateKey and publicKey. Keep the private key secure, as it will be used to decrypt the logs. Below is a sample script to generate the keys using Node.js and OpenSSL.

- JavaScript
- OpenSSL

JavaScript ```
const crypto = require("crypto");
const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {  modulusLength: 4096,  publicKeyEncoding: {    type: "spki",    format: "pem",  },  privateKeyEncoding: {    type: "pkcs8",    format: "pem",  },});
console.log(publicKey);console.log(privateKey);
```

Run the script by executing the below code on your terminal. Replace file name with the name of your JavaScript file.

Terminal window ```
node {file name}
```

1. Generate private key:
Use the following command to generate a RSA private key:
Terminal windowopenssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:4096
2. Generate public key:
After generating the private key, you can extract the corresponding public key using:
Terminal windowopenssl rsa -pubout -in private_key.pem -out public_key.pem

## 2. Upload public key to gateway settings

Once you have generated the key pair, upload the public key to your AI Gateway settings. This key will be used to encrypt your logs. In order to enable Workers Logpush, you will need logs enabled for that gateway.

## 3. Set up Logpush

To set up Logpush, refer to Logpush documentation.

## 4. Receive encrypted logs

After configuring Workers Logpush, logs will be sent encrypted using the public key you uploaded. To access the data, you will need to decrypt it using your private key. The logs will be sent to the object storage provider that you have selected.

## 5. Decrypt logs

To decrypt the encrypted log bodies and metadata from AI Gateway, you can use the following Node.js script or OpenSSL:

- JavaScript
- OpenSSL

To decrypt the encrypted log bodies and metadata from AI Gateway, download the logs to a folder, in this case its named my_log.log.gz.

Then copy this JavaScript file into the same folder and place your private key in the top variable.

JavaScript ```
const privateKeyStr = `-----BEGIN RSA PRIVATE KEY-----....-----END RSA PRIVATE KEY-----`;
const crypto = require("crypto");const privateKey = crypto.createPrivateKey(privateKeyStr);
const fs = require("fs");const zlib = require("zlib");const readline = require("readline");
async function importAESGCMKey(keyBuffer) {  try {    // Ensure the key length is valid for AES    if ([128, 192, 256].includes(256)) {      return await crypto.webcrypto.subtle.importKey(        "raw",        keyBuffer,        {          name: "AES-GCM",          length: 256,        },        true, // Whether the key is extractable (true in this case to allow for export later if needed)        ["encrypt", "decrypt"], // Use for encryption and decryption      );    } else {      throw new Error("Invalid AES key length. Must be 128, 12, or 256 bits.");    }  } catch (error) {    console.error("Failed to import key:", error);    throw error;  }}
async function decryptData(encryptedData, aesKey, iv) {  const decryptedData = await crypto.subtle.decrypt(    { name: "AES-GCM", iv: iv },    aesKey,    encryptedData,  );  return new TextDecoder().decode(decryptedData);}
async function decryptBase64(privateKey, data) {  if (data.key === undefined) {    return data;  }
  const aesKeyBuf = crypto.privateDecrypt(    {      key: privateKey,      oaepHash: "SHA256",    },    Buffer.from(data.key, "base64"),  );  const aesKey = await importAESGCMKey(aesKeyBuf);
  const decryptedData = await decryptData(    Buffer.from(data.data, "base64"),    aesKey,    Buffer.from(data.iv, "base64"),  );
  return decryptedData.toString();}
async function run() {  let lineReader = readline.createInterface({    input: fs.createReadStream("my_log.log.gz").pipe(zlib.createGunzip()),  });
  lineReader.on("line", async (line) => {    line = JSON.parse(line);
    const { Metadata, RequestBody, ResponseBody, ...remaining } = line;
    console.log({      ...remaining,      Metadata: await decryptBase64(privateKey, Metadata),      RequestBody: await decryptBase64(privateKey, RequestBody),      ResponseBody: await decryptBase64(privateKey, ResponseBody),    });    console.log("--");  });}
run();
```

Run the script by executing the below code on your terminal. Replace file name with the name of your JavaScript file.

Terminal window ```
node {file name}
```

The script reads the encrypted log file (my_log.log.gz), decrypts the metadata, request body, and response body, and prints the decrypted data.
Ensure you replace the privateKey variable with your actual private RSA key that you generated in step 1.

1. Decrypt the encrypted log file using the private key.

Assuming that the logs were encrypted with the public key (for example public_key.pem), you can use the private key (private_key.pem) to decrypt the log file.

For example, if the encrypted logs are in a file named encrypted_logs.bin, you can decrypt it like this:

Terminal window ```
openssl rsautl -decrypt -inkey private_key.pem -in encrypted_logs.bin -out decrypted_logs.txt
```

- -decrypt tells OpenSSL that we want to decrypt the file.
- -inkey private_key.pem specifies the private key that will be used to decrypt the logs.
- -in encrypted_logs.bin is the encrypted log file.
- -out decrypted_logs.txtdecrypted logs will be saved into this file.

1. View the decrypted logs
Once decrypted, you can view the logs by simply running:

Terminal window ```
cat decrypted_logs.txt
```

This command will output the decrypted logs to the terminal.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Vercel AI SDK

**來源**: [https://developers.cloudflare.com/ai-gateway/integrations/vercel-ai-sdk/](https://developers.cloudflare.com/ai-gateway/integrations/vercel-ai-sdk/)

Page options # Vercel AI SDK

The Vercel AI SDK ↗ is a TypeScript library for building AI applications. The SDK supports many different AI providers, tools for streaming completions, and more.

To use Cloudflare AI Gateway inside of the AI SDK, you can configure a custom "Gateway URL" for most supported providers. Below are a few examples of how it works.

## Examples

### OpenAI

If you're using the openai provider in AI SDK, you can create a customized setup with createOpenAI, passing your OpenAI-compatible AI Gateway URL:

```
import { createOpenAI } from "@ai-sdk/openai";
const openai = createOpenAI({  baseURL: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai`,});
```

### Anthropic

If you're using the anthropic provider in AI SDK, you can create a customized setup with createAnthropic, passing your Anthropic-compatible AI Gateway URL:

```
import { createAnthropic } from "@ai-sdk/anthropic";
const anthropic = createAnthropic({  baseURL: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/anthropic`,});
```

### Google AI Studio

If you're using the Google AI Studio provider in AI SDK, you need to append /v1beta to your Google AI Studio-compatible AI Gateway URL to avoid errors. The /v1beta path is required because Google AI Studio's API includes this in its endpoint structure, and the AI SDK sets the model name separately. This ensures compatibility with Google's API versioning.

```
import { createGoogleGenerativeAI } from "@ai-sdk/google";
const google = createGoogleGenerativeAI({  baseURL: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-ai-studio/v1beta`,});
```

### Retrieve log id from AI SDK

You can access the AI Gateway log id from the response headers when invoking the SDK.

```
const result = await generateText({  model: anthropic("claude-3-sonnet-20240229"),  messages: [],});console.log(result.response.headers["cf-aig-log-id"]);
```

### Other providers

For other providers that are not listed above, you can follow a similar pattern by creating a custom instance for any AI provider, and passing your AI Gateway URL. For help finding your provider-specific AI Gateway URL, refer to the Supported providers page.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## AI Gateway Binding Methods

**來源**: [https://developers.cloudflare.com/ai-gateway/integrations/worker-binding-methods/](https://developers.cloudflare.com/ai-gateway/integrations/worker-binding-methods/)

Page options # AI Gateway Binding Methods

Last reviewed: 5 months ago This guide provides an overview of how to use the latest Cloudflare Workers AI Gateway binding methods. You will learn how to set up an AI Gateway binding, access new methods, and integrate them into your Workers.

## 1. Add an AI Binding to your Worker

To connect your Worker to Workers AI, add the following to your Wrangler configuration file:

- wrangler.jsonc
- wrangler.toml

```
{  "ai": {    "binding": "AI"  }}
```

```
[ai]binding = "AI"
```

This configuration sets up the AI binding accessible in your Worker code as env.AI.

If you're using TypeScript, run wrangler types whenever you modify your Wrangler configuration file. This generates types for the env object based on your bindings, as well as runtime types.

## 2. Basic Usage with Workers AI + Gateway

To perform an inference task using Workers AI and an AI Gateway, you can use the following code:

src/index.ts ```
const resp = await env.AI.run(  "@cf/meta/llama-3.1-8b-instruct",  {    prompt: "tell me a joke",  },  {    gateway: {      id: "my-gateway",    },  },);
```

Additionally, you can access the latest request log ID with:

```
const myLogId = env.AI.aiGatewayLogId;
```

## 3. Access the Gateway Binding

You can access your AI Gateway binding using the following code:

```
const gateway = env.AI.gateway("my-gateway");
```

Once you have the gateway instance, you can use the following methods:

### 3.1. patchLog: Send Feedback

The patchLog method allows you to send feedback, score, and metadata for a specific log ID. All object properties are optional, so you can include any combination of the parameters:

```
gateway.patchLog("my-log-id", {  feedback: 1,  score: 100,  metadata: {    user: "123",  },});
```

- Returns: Promise<void> (Make sure to await the request.)
- Example Use Case: Update a log entry with user feedback or additional metadata.

### 3.2. getLog: Read Log Details

The getLog method retrieves details of a specific log ID. It returns an object of type Promise<AiGatewayLog>. If this type is missing, ensure you have run wrangler types.

```
const log = await gateway.getLog("my-log-id");
```

- Returns: Promise<AiGatewayLog>
- Example Use Case: Retrieve log information for debugging or analytics.

### 3.3. getUrl: Get Gateway URLs

The getUrl method allows you to retrieve the base URL for your AI Gateway, optionally specifying a provider to get the provider-specific endpoint.

```
// Get the base gateway URLconst baseUrl = await gateway.getUrl();// Output: https://gateway.ai.cloudflare.com/v1/my-account-id/my-gateway/
// Get a provider-specific URLconst openaiUrl = await gateway.getUrl("openai");// Output: https://gateway.ai.cloudflare.com/v1/my-account-id/my-gateway/openai
```

- Parameters: Optional provider (string or AIGatewayProviders enum)
- Returns: Promise<string>
- Example Use Case: Dynamically construct URLs for direct API calls or debugging configurations.

#### SDK Integration Examples

The getUrl method is particularly useful for integrating with popular AI SDKs:

OpenAI SDK:

```
import OpenAI from "openai";
const openai = new OpenAI({  apiKey: "my api key", // defaults to process.env["OPENAI_API_KEY"]  baseURL: await env.AI.gateway("my-gateway").getUrl("openai"),});
```

Vercel AI SDK with OpenAI:

```
import { createOpenAI } from "@ai-sdk/openai";
const openai = createOpenAI({  baseURL: await env.AI.gateway("my-gateway").getUrl("openai"),});
```

Vercel AI SDK with Anthropic:

```
import { createAnthropic } from "@ai-sdk/anthropic";
const anthropic = createAnthropic({  baseURL: await env.AI.gateway("my-gateway").getUrl("anthropic"),});
```

### 3.4. run: Universal Requests

The run method allows you to execute universal requests. Users can pass either a single universal request object or an array of them. This method supports all AI Gateway providers.

Refer to the Universal endpoint documentation for details about the available inputs.

```
const resp = await gateway.run({  provider: "workers-ai",  endpoint: "@cf/meta/llama-3.1-8b-instruct",  headers: {    authorization: "Bearer my-api-token",  },  query: {    prompt: "tell me a joke",  },});
```

- Returns: Promise<Response>
- Example Use Case: Perform a universal request to any supported provider.

## Conclusion

With these AI Gateway binding methods, you can now:

- Send feedback and update metadata with patchLog.
- Retrieve detailed log information using getLog.
- Get gateway URLs for direct API access with getUrl, making it easy to integrate with popular AI SDKs.
- Execute universal requests to any AI Gateway provider with run.

These methods offer greater flexibility and control over your AI integrations, empowering you to build more sophisticated applications on the Cloudflare Workers platform.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Workers AI

**來源**: [https://developers.cloudflare.com/ai-gateway/integrations/aig-workers-ai-binding/](https://developers.cloudflare.com/ai-gateway/integrations/aig-workers-ai-binding/)

Page options # Workers AI

Last reviewed: 11 months ago This guide will walk you through setting up and deploying a Workers AI project. You will use Workers, an AI Gateway binding, and a large language model (LLM), to deploy your first AI-powered application on the Cloudflare global network.

## Prerequisites

1. Sign up for a Cloudflare account ↗.
2. Install Node.js ↗.

Node.js version manager

Use a Node version manager like Volta ↗ or nvm ↗ to avoid permission issues and change Node.js versions. Wrangler, discussed later in this guide, requires a Node version of 16.17.0 or later.

## 1. Create a Worker Project

You will create a new Worker project using the create-Cloudflare CLI (C3). C3 is a command-line tool designed to help you set up and deploy new applications to Cloudflare.

Create a new project named hello-ai by running:

- npm
- yarn
- pnpm

Terminal window ```
npm create cloudflare@latest -- hello-ai
```

Terminal window ```
yarn create cloudflare hello-ai
```

Terminal window ```
pnpm create cloudflare@latest hello-ai
```

Running npm create cloudflare@latest will prompt you to install the create-cloudflare package and lead you through setup. C3 will also install Wrangler, the Cloudflare Developer Platform CLI.

For setup, select the following options:

- For What would you like to start with?, choose Hello World example.
- For Which template would you like to use?, choose Worker only.
- For Which language do you want to use?, choose TypeScript.
- For Do you want to use git for version control?, choose Yes.
- For Do you want to deploy your application?, choose No (we will be making some changes before deploying).

This will create a new hello-ai directory. Your new hello-ai directory will include:

- A "Hello World" Worker at src/index.ts.
- A Wrangler configuration file

Go to your application directory:

Terminal window ```
cd hello-ai
```

## 2. Connect your Worker to Workers AI

You must create an AI binding for your Worker to connect to Workers AI. Bindings allow your Workers to interact with resources, like Workers AI, on the Cloudflare Developer Platform.

To bind Workers AI to your Worker, add the following to the end of your Wrangler configuration file:

- wrangler.jsonc
- wrangler.toml

```
{  "ai": {    "binding": "AI"  }}
```

```
[ai]binding = "AI"
```

Your binding is available in your Worker code on env.AI.

You will need to have your gateway id for the next step. You can learn how to create an AI Gateway in this tutorial.

## 3. Run an inference task containing AI Gateway in your Worker

You are now ready to run an inference task in your Worker. In this case, you will use an LLM, llama-3.1-8b-instruct-fast, to answer a question. Your gateway ID is found on the dashboard.

Update the index.ts file in your hello-ai application directory with the following code:

src/index.ts ```
export interface Env {  // If you set another name in the [Wrangler configuration file](/workers/wrangler/configuration/) as the value for 'binding',  // replace "AI" with the variable name you defined.  AI: Ai;}
export default {  async fetch(request, env): Promise<Response> {    // Specify the gateway label and other options here    const response = await env.AI.run(      "@cf/meta/llama-3.1-8b-instruct-fast",      {        prompt: "What is the origin of the phrase Hello, World",      },      {        gateway: {          id: "GATEWAYID", // Use your gateway label here          skipCache: true, // Optional: Skip cache if needed        },      },    );
    // Return the AI response as a JSON object    return new Response(JSON.stringify(response), {      headers: { "Content-Type": "application/json" },    });  },} satisfies ExportedHandler<Env>;
```

Up to this point, you have created an AI binding for your Worker and configured your Worker to be able to execute the Llama 3.1 model. You can now test your project locally before you deploy globally.

## 4. Develop locally with Wrangler

While in your project directory, test Workers AI locally by running wrangler dev:

Terminal window ```
npx wrangler dev
```

Workers AI local development usage charges

Using Workers AI always accesses your Cloudflare account in order to run AI models and will incur usage charges even in local development.

You will be prompted to log in after you run wrangler dev. When you run npx wrangler dev, Wrangler will give you a URL (most likely localhost:8787) to review your Worker. After you go to the URL Wrangler provides, you will see a message that resembles the following example:

```
{  "response": "A fascinating question!\n\nThe phrase \"Hello, World!\" originates from a simple computer program written in the early days of programming. It is often attributed to Brian Kernighan, a Canadian computer scientist and a pioneer in the field of computer programming.\n\nIn the early 1970s, Kernighan, along with his colleague Dennis Ritchie, were working on the C programming language. They wanted to create a simple program that would output a message to the screen to demonstrate the basic structure of a program. They chose the phrase \"Hello, World!\" because it was a simple and recognizable message that would illustrate how a program could print text to the screen.\n\nThe exact code was written in the 5th edition of Kernighan and Ritchie's book \"The C Programming Language,\" published in 1988. The code, literally known as \"Hello, World!\" is as follows:\n\n```main(){  printf(\"Hello, World!\");}```\n\nThis code is still often used as a starting point for learning programming languages, as it demonstrates how to output a simple message to the console.\n\nThe phrase \"Hello, World!\" has since become a catch-all phrase to indicate the start of a new program or a small test program, and is widely used in computer science and programming education.\n\nSincerely, I'm glad I could help clarify the origin of this iconic phrase for you!"}
```

## 5. Deploy your AI Worker

Before deploying your AI Worker globally, log in with your Cloudflare account by running:

Terminal window ```
npx wrangler login
```

You will be directed to a web page asking you to log in to the Cloudflare dashboard. After you have logged in, you will be asked if Wrangler can make changes to your Cloudflare account. Scroll down and select Allow to continue.

Finally, deploy your Worker to make your project accessible on the Internet. To deploy your Worker, run:

Terminal window ```
npx wrangler deploy
```

Once deployed, your Worker will be available at a URL like:

Terminal window ```
https://hello-ai.<YOUR_SUBDOMAIN>.workers.dev
```

Your Worker will be deployed to your custom workers.dev subdomain. You can now visit the URL to run your AI Worker.

By completing this tutorial, you have created a Worker, connected it to Workers AI through an AI Gateway binding, and successfully ran an inference task using the Llama 3.1 model.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Tutorials

**來源**: [https://developers.cloudflare.com/ai-gateway/tutorials/](https://developers.cloudflare.com/ai-gateway/tutorials/)

Page options # Tutorials

View tutorials to help you get started with AI Gateway.

## Docs

| Name | Last Updated | Type | Difficulty |
| AI Gateway Binding Methods | 5 months ago | 📝 Tutorial |  |
| Workers AI | 11 months ago | 📝 Tutorial |  |
| Create your first AI Gateway using Workers AI | about 1 year ago | 📝 Tutorial | Beginner |
| Deploy a Worker that connects to OpenAI via AI Gateway | almost 2 years ago | 📝 Tutorial | Beginner |

## Videos

Play Cloudflare Workflows | Introduction (Part 1 of 3)

In this video, we introduce Cloudflare Workflows, the Newest Developer Platform Primitive at Cloudflare.

Play Cloudflare Workflows | Batching and Monitoring Your Durable Execution (Part 2 of 3)

Workflows exposes metrics such as execution, error rates, steps, and total duration!

Play Welcome to the Cloudflare Developer Channel

Welcome to the Cloudflare Developers YouTube channel. We've got tutorials and working demos and everything you need to level up your projects. Whether you're working on your next big thing or just dorking around with some side projects, we've got you covered! So why don't you come hang out, subscribe to our developer channel and together we'll build something awesome. You're gonna love it.

Play Optimize your AI App & fine-tune models (AI Gateway, R2)

In this workshop, Kristian Freeman, Cloudflare Developer Advocate, shows how to optimize your existing AI applications with Cloudflare AI Gateway, and how to finetune OpenAI models using R2.

Play How to use Cloudflare AI models and inference in Python with Jupyter Notebooks

Cloudflare Workers AI provides a ton of AI models and inference capabilities. In this video, we will explore how to make use of Cloudflare’s AI model catalog using a Python Jupyter Notebook.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Platform

**來源**: [https://developers.cloudflare.com/ai-gateway/reference/](https://developers.cloudflare.com/ai-gateway/reference/)

Page options # Platform

- Audit logs
- Limits
- Pricing

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Limits

**來源**: [https://developers.cloudflare.com/ai-gateway/reference/limits/](https://developers.cloudflare.com/ai-gateway/reference/limits/)

Page options # Limits

The following limits apply to gateway configurations, logs, and related features in Cloudflare's platform.

| Feature | Limit |
| --- | --- |
| Cacheable request size | 25 MB per request |
| Cache TTL | 1 month |
| Custom metadata | 5 entries per request |
| Datasets | 10 per gateway |
| Gateways free plan | 10 per account |
| Gateways paid plan | 20 per account |
| Gateway name length | 64 characters |
| Log storage rate limit | 500 logs per second per gateway |
| Logs stored paid plan | 10 million per gateway 1 |
| Logs stored free plan | 100,000 per account 2 |
| Log size stored | 10 MB per log 3 |
| Logpush jobs | 4 per account |
| Logpush size limit | 1MB per log |

1 If you have reached 10 million logs stored per gateway, new logs
will stop being saved. To continue saving logs, you must delete older logs in
that gateway to free up space or create a new gateway. Refer to Auto Log
Cleanup for more details
on how to automatically delete logs.

2 If you have reached 100,000 logs stored per account, across all
gateways, new logs will stop being saved. To continue saving logs, you must
delete older logs. Refer to Auto Log
Cleanup for more details
on how to automatically delete logs.

3 Logs larger than 10 MB will not be stored.

Need a higher limit?

To request an increase to a limit, complete the Limit Increase Request Form ↗. If the limit can be increased, Cloudflare will contact you with next steps.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Pricing

**來源**: [https://developers.cloudflare.com/ai-gateway/reference/pricing/](https://developers.cloudflare.com/ai-gateway/reference/pricing/)

Page options # Pricing

AI Gateway is available to use on all plans.

AI Gateway's core features available today are offered for free, and all it takes is a Cloudflare account and one line of code to get started. Core features include: dashboard analytics, caching, and rate limiting.

We will continue to build and expand AI Gateway. Some new features may be additional core features that will be free while others may be part of a premium plan. We will announce these as they become available.

You can monitor your usage in the AI Gateway dashboard.

## Persistent logs

Note

Billing for persistent logs has not yet started. Users on paid plans can store logs beyond the included volume of 200,000 logs stored a month without being charged during this period. (Users on the free plan remain limited to the 100,000 logs cap for their plan.) We will provide plenty of advanced notice before charging begins for persistent log storage.

Persistent logs are available on all plans, with a free allocation for both free and paid plans. Charges for additional logs beyond those limits are based on the number of logs stored per month.

### Free allocation and overage pricing

| Plan | Free logs stored | Overage pricing |
| --- | --- | --- |
| Workers Free | 100,000 logs total | N/A - Upgrade to Workers Paid |
| Workers Paid | 200,000 logs total | $8 per 100,000 logs stored per month |

Allocations are based on the total logs stored across all gateways. For guidance on managing or deleting logs, please see our documentation.

For example, if you are a Workers Paid plan user storing 300,000 logs, you will be charged for the excess 100,000 logs (300,000 total logs - 200,000 free logs), resulting in an $8/month charge.

## Logpush

Logpush is only available on the Workers Paid plan.

|  | Paid plan |
| --- | --- |
| Requests | 10 million / month, +$0.05/million |

## Fine print

Prices subject to change. If you are an Enterprise customer, reach out to your account team to confirm pricing details.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Audit logs

**來源**: [https://developers.cloudflare.com/ai-gateway/reference/audit-logs/](https://developers.cloudflare.com/ai-gateway/reference/audit-logs/)

Page options # Audit logs

Audit logs provide a comprehensive summary of changes made within your Cloudflare account, including those made to gateways in AI Gateway. This functionality is available on all plan types, free of charge, and is enabled by default.

## Viewing Audit Logs

To view audit logs for AI Gateway, in the Cloudflare dashboard, go to the Audit logs page.

Go to Audit logs For more information on how to access and use audit logs, refer to review audit logs documentation.

## Logged Operations

The following configuration actions are logged:

| Operation | Description |
| --- | --- |
| gateway created | Creation of a new gateway. |
| gateway deleted | Deletion of an existing gateway. |
| gateway updated | Edit of an existing gateway. |

## Example Log Entry

Below is an example of an audit log entry showing the creation of a new gateway:

```
{ "action": {     "info": "gateway created",     "result": true,     "type": "create" }, "actor": {     "email": "<ACTOR_EMAIL>",     "id": "3f7b730e625b975bc1231234cfbec091",     "ip": "fe32:43ed:12b5:526::1d2:13",     "type": "user" }, "id": "5eaeb6be-1234-406a-87ab-1971adc1234c", "interface": "UI", "metadata": {}, "newValue": "", "newValueJson": {     "cache_invalidate_on_update": false,     "cache_ttl": 0,     "collect_logs": true,     "id": "test",     "rate_limiting_interval": 0,     "rate_limiting_limit": 0,     "rate_limiting_technique": "fixed" }, "oldValue": "", "oldValueJson": {}, "owner": {     "id": "1234d848c0b9e484dfc37ec392b5fa8a" }, "resource": {     "id": "89303df8-1234-4cfa-a0f8-0bd848e831ca",     "type": "ai_gateway.gateway" }, "when": "2024-07-17T14:06:11.425Z"}
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Header Glossary

**來源**: [https://developers.cloudflare.com/ai-gateway/glossary/](https://developers.cloudflare.com/ai-gateway/glossary/)

Page options # Header Glossary

AI Gateway supports a variety of headers to help you configure, customize, and manage your API requests. This page provides a complete list of all supported headers, along with a short description

| Term | Definition |
| --- | --- |
| cf-aig-backoff | Header to customize the backoff type for request retries of a request. |
| cf-aig-cache-key | The cf-aig-cache-key-aig-cache-key let you override the default cache key in order to precisely set the cacheability setting for any resource. |
| cf-aig-cache-status | Status indicator for caching, showing if a request was served from cache. |
| cf-aig-cache-ttl | Specifies the cache time-to-live for responses. |
| cf-aig-collect-log | The cf-aig-collect-log header allows you to bypass the default log setting for the gateway. |
| cf-aig-custom-cost | Allows the customization of request cost to reflect user-defined parameters. |
| cf-aig-event-id | cf-aig-event-id is a unique identifier for an event, used to trace specific events through the system. |
| cf-aig-log-id | The cf-aig-log-id is a unique identifier for the specific log entry to which you want to add feedback. |
| cf-aig-max-attempts | Header to customize the number of max attempts for request retries of a request. |
| cf-aig-metadata | Custom metadataallows you to tag requests with user IDs or other identifiers, enabling better tracking and analysis of your requests. |
| cf-aig-request-timeout | Header to trigger a fallback provider based on a predetermined response time (measured in milliseconds). |
| cf-aig-retry-delay | Header to customize the retry delay for request retries of a request. |
| cf-aig-skip-cache | Header to bypass caching for a specific request. |
| cf-aig-step | cf-aig-step identifies the processing step in the AI Gateway flow for better tracking and debugging. |
| cf-cache-ttl | Deprecated: This header is replaced by cf-aig-cache-ttl. It specifies cache time-to-live. |
| cf-skip-cache | Deprecated: This header is replaced by cf-aig-skip-cache. It bypasses caching for a specific request. |

## Configuration hierarchy

Settings in AI Gateway can be configured at three levels: Provider, Request, and Gateway. Since the same settings can be configured in multiple locations, the following hierarchy determines which value is applied:

1. Provider-level headers:
Relevant only when using the Universal Endpoint, these headers take precedence over all other configurations.
2. Request-level headers:
Apply if no provider-level headers are set.
3. Gateway-level settings:
Act as the default if no headers are set at the provider or request levels.

This hierarchy ensures consistent behavior, prioritizing the most specific configurations. Use provider-level and request-level headers for more fine-tuned control, and gateway settings for general defaults.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Architectures

**來源**: [https://developers.cloudflare.com/ai-gateway/demos/](https://developers.cloudflare.com/ai-gateway/demos/)

Page options # Architectures

Learn how you can use AI Gateway within your existing architecture.

## Reference architectures

Explore the following reference architectures that use AI Gateway:

Multi-vendor AI observability and control

By shifting features such as rate limiting, caching, and error handling to the proxy layer, organizations can apply unified configurations across services and inference service providers. Fullstack applications

A practical example of how these services come together in a real fullstack application architecture. ## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## 未知標題

**來源**: [https://developers.cloudflare.com/ai-gateway/llms-full.txt](https://developers.cloudflare.com/ai-gateway/llms-full.txt)

---
title: Overview · Cloudflare AI Gateway docs
description: Cloudflare's AI Gateway allows you to gain visibility and control
  over your AI apps. By connecting your apps to AI Gateway, you can gather
  insights on how people are using your application with analytics and logging
  and then control how your application scales with features such as caching,
  rate limiting, as well as request retries, model fallback, and more. Better
  yet - it only takes one line of code to get started.
lastUpdated: 2025-05-14T14:20:47.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/
  md: https://developers.cloudflare.com/ai-gateway/index.md
---

Observe and control your AI applications.

Available on all plans

Cloudflare's AI Gateway allows you to gain visibility and control over your AI apps. By connecting your apps to AI Gateway, you can gather insights on how people are using your application with analytics and logging and then control how your application scales with features such as caching, rate limiting, as well as request retries, model fallback, and more. Better yet - it only takes one line of code to get started.

Check out the [Get started guide](https://developers.cloudflare.com/ai-gateway/get-started/) to learn how to configure your applications with AI Gateway.

## Features

### Analytics

View metrics such as the number of requests, tokens, and the cost it takes to run your application.

[View Analytics](https://developers.cloudflare.com/ai-gateway/observability/analytics/)

### Logging

Gain insight on requests and errors.

[View Logging](https://developers.cloudflare.com/ai-gateway/observability/logging/)

### Caching

Serve requests directly from Cloudflare's cache instead of the original model provider for faster requests and cost savings.

[Use Caching](https://developers.cloudflare.com/ai-gateway/configuration/caching/)

### Rate limiting

Control how your application scales by limiting the number of requests your application receives.

[Use Rate limiting](https://developers.cloudflare.com/ai-gateway/configuration/rate-limiting)

### Request retry and fallback

Improve resilience by defining request retry and model fallbacks in case of an error.

[Use Request retry and fallback](https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/)

### Your favorite providers

Workers AI, OpenAI, Azure OpenAI, HuggingFace, Replicate, and more work with AI Gateway.

[Use Your favorite providers](https://developers.cloudflare.com/ai-gateway/providers/)

***

## Related products

**[Workers AI](https://developers.cloudflare.com/workers-ai/)**

Run machine learning models, powered by serverless GPUs, on Cloudflare’s global network.

**[Vectorize](https://developers.cloudflare.com/vectorize/)**

Build full-stack AI applications with Vectorize, Cloudflare's vector database. Adding Vectorize enables you to perform tasks such as semantic search, recommendations, anomaly detection or can be used to provide context and memory to an LLM.

## More resources

[Developer Discord](https://discord.cloudflare.com)

Connect with the Workers community on Discord to ask questions, show what you are building, and discuss the platform with other developers.

[Use cases](https://developers.cloudflare.com/use-cases/ai/)

Learn how you can build and deploy ambitious AI applications to Cloudflare's global network.

[@CloudflareDev](https://x.com/cloudflaredev)

Follow @CloudflareDev on Twitter to learn about product announcements, and what is new in Cloudflare Workers. ---
title: 404 - Page Not Found · Cloudflare AI Gateway docs
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/404/
  md: https://developers.cloudflare.com/ai-gateway/404/index.md
---

# 404

Check the URL, try using our [search](https://developers.cloudflare.com/search/) or try our LLM-friendly [llms.txt directory](https://developers.cloudflare.com/llms.txt). ---
title: AI Assistant · Cloudflare AI Gateway docs
lastUpdated: 2024-10-30T16:07:34.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/ai/
  md: https://developers.cloudflare.com/ai-gateway/ai/index.md
--- ---
title: REST API reference · Cloudflare AI Gateway docs
lastUpdated: 2024-12-18T13:12:05.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/api-reference/
  md: https://developers.cloudflare.com/ai-gateway/api-reference/index.md
--- ---
title: Changelog · Cloudflare AI Gateway docs
description: Subscribe to RSS
lastUpdated: 2025-05-09T15:42:57.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/changelog/
  md: https://developers.cloudflare.com/ai-gateway/changelog/index.md
---

[Subscribe to RSS](https://developers.cloudflare.com/ai-gateway/changelog/index.xml)

## 2025-06-18

**New GA providers**

We have moved the following providers out of beta and into GA:

* [Cartesia](https://developers.cloudflare.com/ai-gateway/providers/cartesia/)
* [Cerebras](https://developers.cloudflare.com/ai-gateway/providers/cerebras/)
* [DeepSeek](https://developers.cloudflare.com/ai-gateway/providers/deepseek/)
* [ElevenLabs](https://developers.cloudflare.com/ai-gateway/providers/elevenlabs/)
* [OpenRouter](https://developers.cloudflare.com/ai-gateway/providers/openrouter/)

## 2025-05-28

**OpenAI Compatibility**

* Introduced a new [OpenAI-compatible chat completions endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) to simplify switching between different AI providers without major code modifications.

## 2025-04-22

* Increased Max Number of Gateways per account: Raised the maximum number of gateways per account from 10 to 20 for paid users. This gives you greater flexibility in managing your applications as you build and scale.
* Streaming WebSocket Bug Fix: Resolved an issue affecting streaming responses over [WebSockets](https://developers.cloudflare.com/ai-gateway/configuration/websockets-api/). This fix ensures more reliable and consistent streaming behavior across all supported AI providers.
* Increased Timeout Limits: Extended the default timeout for AI Gateway requests beyond the previous 100-second limit. This enhancement improves support for long-running requests.

## 2025-04-02

**Cache Key Calculation Changes**

* We have updated how [cache](https://developers.cloudflare.com/ai-gateway/configuration/caching/) keys are calculated. As a result, new cache entries will be created, and you may experience more cache misses than usual during this transition. Please monitor your traffic and performance, and let us know if you encounter any issues.

## 2025-03-18

**WebSockets**

* Added [WebSockets API](https://developers.cloudflare.com/ai-gateway/configuration/websockets-api/) to provide a persistent connection for AI interactions, eliminating repeated handshakes and reducing latency.

## 2025-02-26

**Guardrails**

* Added [Guardrails](https://developers.cloudflare.com/ai-gateway/guardrails/) help deploy AI applications safely by intercepting and evaluating both user prompts and model responses for harmful content.

## 2025-02-19

**Updated Log Storage Settings**

* Introduced customizable log storage settings, enabling users to:

  * Define the maximum number of logs stored per gateway.

  * Choose how logs are handled when the storage limit is reached:

    * **On** - Automatically delete the oldest logs to ensure new logs are always saved.
    * **Off** - Stop saving new logs when the storage limit is reached.

## 2025-02-06

**Added request handling**

* Added [request handling options](https://developers.cloudflare.com/ai-gateway/configuration/request-handling/) to help manage AI provider interactions effectively, ensuring your applications remain responsive and reliable.

## 2025-02-05

**New AI Gateway providers**

* **Configuration**: Added [ElevenLabs](https://elevenlabs.io/), [Cartesia](https://docs.cartesia.ai/), and [Cerebras](https://inference-docs.cerebras.ai/) as new providers.

## 2025-01-02

**DeepSeek**

* **Configuration**: Added [DeepSeek](https://developers.cloudflare.com/ai-gateway/providers/deepseek/) as a new provider.

## 2024-12-17

**AI Gateway Dashboard**

* Updated dashboard to view performance, costs, and stats across all gateways.

## 2024-12-13

**Bug Fixes**

* **Bug Fixes**: Fixed Anthropic errors being cached.
* **Bug Fixes**: Fixed `env.AI.run()` requests using authenticated gateways returning authentication error.

## 2024-11-28

**OpenRouter**

* **Configuration**: Added [OpenRouter](https://developers.cloudflare.com/ai-gateway/providers/openrouter/) as a new provider.

## 2024-11-19

**WebSockets API**

* **Configuration**: Added [WebSockets API](https://developers.cloudflare.com/ai-gateway/configuration/websockets-api/) which provides a single persistent connection, enabling continuous communication.

## 2024-11-19

**Authentication**

* **Configuration**: Added [Authentication](https://developers.cloudflare.com/ai-gateway/configuration/authentication/) which adds security by requiring a valid authorization token for each request.

## 2024-10-28

**Grok**

* **Providers**: Added [Grok](https://developers.cloudflare.com/ai-gateway/providers/grok/) as a new provider.

## 2024-10-17

**Vercel SDK**

Added [Vercel AI SDK](https://sdk.vercel.ai/). The SDK supports many different AI providers, tools for streaming completions, and more.

## 2024-09-26

**Persistent logs**

* **Logs**: AI Gateway now has [logs that persist](https://developers.cloudflare.com/ai-gateway/observability/logging/index), giving you the flexibility to store them for your preferred duration.

## 2024-09-26

**Logpush**

* **Logs**: Securely export logs to an external storage location using [Logpush](https://developers.cloudflare.com/ai-gateway/observability/logging/logpush).

## 2024-09-26

**Pricing**

* **Pricing**: Added [pricing](https://developers.cloudflare.com/ai-gateway/reference/pricing/) for storing logs persistently.

## 2024-09-26

**Evaluations**

* **Configurations**: Use AI Gateway’s [Evaluations](https://developers.cloudflare.com/ai-gateway/evaluations) to make informed decisions on how to optimize your AI application.

## 2024-09-10

**Custom costs**

* **Configuration**: AI Gateway now allows you to set custom costs at the request level [custom costs](https://developers.cloudflare.com/ai-gateway/configuration/custom-costs/) to requests, accurately reflect your unique pricing, overriding the default or public model costs.

## 2024-08-02

**Mistral AI**

* **Providers**: Added [Mistral AI](https://developers.cloudflare.com/ai-gateway/providers/mistral/) as a new provider.

## 2024-07-23

**Google AI Studio**

* **Providers**: Added [Google AI Studio](https://developers.cloudflare.com/ai-gateway/providers/google-ai-studio/) as a new provider.

## 2024-07-10

**Custom metadata**

AI Gateway now supports adding [custom metadata](https://developers.cloudflare.com/ai-gateway/configuration/custom-metadata/) to requests, improving tracking and analysis of incoming requests.

## 2024-07-09

**Logs**

[Logs](https://developers.cloudflare.com/ai-gateway/observability/analytics/#logging) are now available for the last 24 hours.

## 2024-06-24

**Custom cache key headers**

AI Gateway now supports [custom cache key headers](https://developers.cloudflare.com/ai-gateway/configuration/caching/#custom-cache-key-cf-aig-cache-key).

## 2024-06-18

**Access an AI Gateway through a Worker**

Workers AI now natively supports [AI Gateway](https://developers.cloudflare.com/ai-gateway/providers/workersai/#worker).

## 2024-05-22

**AI Gateway is now GA**

AI Gateway is moving from beta to GA.

## 2024-05-16

* **Providers**: Added [Cohere](https://developers.cloudflare.com/ai-gateway/providers/cohere/) and [Groq](https://developers.cloudflare.com/ai-gateway/providers/groq/) as new providers.

## 2024-05-09

* Added new endpoints to the [REST API](https://developers.cloudflare.com/api/resources/ai_gateway/methods/create/).

## 2024-03-26

* [LLM Side Channel vulnerability fixed](https://blog.cloudflare.com/ai-side-channel-attack-mitigated)
* **Providers**: Added Anthropic, Google Vertex, Perplexity as providers.

## 2023-10-26

* **Real-time Logs**: Logs are now real-time, showing logs for the last hour. If you have a need for persistent logs, please let the team know on Discord. We are building out a persistent logs feature for those who want to store their logs for longer.
* **Providers**: Azure OpenAI is now supported as a provider!
* **Docs**: Added Azure OpenAI example.
* **Bug Fixes**: Errors with costs and tokens should be fixed.

## 2023-10-09

* **Logs**: Logs will now be limited to the last 24h. If you have a use case that requires more logging, please reach out to the team on Discord.
* **Dashboard**: Logs now refresh automatically.
* **Docs**: Fixed Workers AI example in docs and dash.
* **Caching**: Embedding requests are now cacheable. Rate limit will not apply for cached requests.
* **Bug Fixes**: Identical requests to different providers are not wrongly served from cache anymore. Streaming now works as expected, including for the Universal endpoint.
* **Known Issues**: There's currently a bug with costs that we are investigating. ---
title: OpenAI Compatibility · Cloudflare AI Gateway docs
description: Cloudflare's AI Gateway offers an OpenAI-compatible
  /chat/completions endpoint, enabling integration with multiple AI providers
  using a single URL. This feature simplifies the integration process, allowing
  for seamless switching between different models without significant code
  modifications.
lastUpdated: 2025-06-19T13:27:22.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/chat-completion/
  md: https://developers.cloudflare.com/ai-gateway/chat-completion/index.md
---

Cloudflare's AI Gateway offers an OpenAI-compatible `/chat/completions` endpoint, enabling integration with multiple AI providers using a single URL. This feature simplifies the integration process, allowing for seamless switching between different models without significant code modifications.

## Endpoint URL

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Replace `{account_id}` and `{gateway_id}` with your Cloudflare account and gateway IDs.

## Parameters

Switch providers by changing the `model` and `apiKey` parameters.

Specify the model using `{provider}/{model}` format. For example:

* `openai/gpt-4o-mini`
* `google-ai-studio/gemini-2.0-flash`
* `anthropic/claude-3-haiku`

## Examples

### OpenAI SDK

```js
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: "YOUR_PROVIDER_API_KEY", // Provider API key
  // NOTE: the OpenAI client automatically adds /chat/completions to the end of the URL, you should not add it yourself.
  baseURL: "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat",
});


const response = await client.chat.completions.create({
  model: "google-ai-studio/gemini-2.0-flash",
  messages: [{ role: "user", content: "What is Cloudflare?" }],
});


console.log(response.choices[0].message.content);
```

### cURL

```bash
curl -X POST https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions \
  --header 'Authorization: Bearer {openai_token}' \
  --header 'Content-Type: application/json' \
  --data '{
    "model": "google-ai-studio/gemini-2.0-flash",
    "messages": [
      {
        "role": "user",
        "content": "What is Cloudflare?"
      }
    ]
  }'
```

### Universal provider

You can also use this pattern with the [Universal Endpoint](https://developers.cloudflare.com/ai-gateway/universal/) to add [fallbacks](https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/) across multiple providers. When used in combination, every request will return the same standardized format, whether from the primary or fallback model. This behavior means that you do not have to add extra parsing logic to your app.

```ts
export interface Env {
  AI: Ai;
}


export default {
  async fetch(request: Request, env: Env) {
    return env.AI.gateway("default").run({
      provider: "compat",
      endpoint: "chat/completions",
      headers: {
        authorization: "Bearer",
      },
      query: {
        model: "google-ai-studio/gemini-2.0-flash",
        messages: [
          {
            role: "user",
            content: "What is Cloudflare?",
          },
        ],
      },
    });
  },
};
```

## Supported Providers

The OpenAI-compatible endpoint supports models from the following providers:

* [Anthropic](https://developers.cloudflare.com/ai-gateway/providers/anthropic/)
* [OpenAI](https://developers.cloudflare.com/ai-gateway/providers/openai/)
* [Groq](https://developers.cloudflare.com/ai-gateway/providers/groq/)
* [Mistral](https://developers.cloudflare.com/ai-gateway/providers/mistral/)
* [Cohere](https://developers.cloudflare.com/ai-gateway/providers/cohere/)
* [Perplexity](https://developers.cloudflare.com/ai-gateway/providers/perplexity/)
* [Workers AI](https://developers.cloudflare.com/ai-gateway/providers/workersai/)
* [Google-AI-Studio](https://developers.cloudflare.com/ai-gateway/providers/google-ai-studio/)
* [Grok](https://developers.cloudflare.com/ai-gateway/providers/grok/)
* [DeepSeek](https://developers.cloudflare.com/ai-gateway/providers/deepseek/)
* [Cerebras](https://developers.cloudflare.com/ai-gateway/providers/cerebras/) ---
title: Configuration · Cloudflare AI Gateway docs
description: Configure your AI Gateway with multiple options and customizations.
lastUpdated: 2025-05-28T19:49:34.000Z
chatbotDeprioritize: true
source_url:
  html: https://developers.cloudflare.com/ai-gateway/configuration/
  md: https://developers.cloudflare.com/ai-gateway/configuration/index.md
---

Configure your AI Gateway with multiple options and customizations.

* [Caching](https://developers.cloudflare.com/ai-gateway/configuration/caching/)
* [Fallbacks](https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/)
* [Custom costs](https://developers.cloudflare.com/ai-gateway/configuration/custom-costs/)
* [Rate limiting](https://developers.cloudflare.com/ai-gateway/configuration/rate-limiting/)
* [Custom metadata](https://developers.cloudflare.com/ai-gateway/configuration/custom-metadata/)
* [Manage gateways](https://developers.cloudflare.com/ai-gateway/configuration/manage-gateway/)
* [Request handling](https://developers.cloudflare.com/ai-gateway/configuration/request-handling/)
* [Authentication](https://developers.cloudflare.com/ai-gateway/configuration/authentication/) ---
title: Architectures · Cloudflare AI Gateway docs
description: Learn how you can use AI Gateway within your existing architecture.
lastUpdated: 2024-12-18T13:12:05.000Z
chatbotDeprioritize: true
source_url:
  html: https://developers.cloudflare.com/ai-gateway/demos/
  md: https://developers.cloudflare.com/ai-gateway/demos/index.md
---

Learn how you can use AI Gateway within your existing architecture.

## Reference architectures

Explore the following reference architectures that use AI Gateway:

[Multi-vendor AI observability and control](https://developers.cloudflare.com/reference-architecture/diagrams/ai/ai-multivendor-observability-control/)

[By shifting features such as rate limiting, caching, and error handling to the proxy layer, organizations can apply unified configurations across services and inference service providers.](https://developers.cloudflare.com/reference-architecture/diagrams/ai/ai-multivendor-observability-control/)

[Fullstack applications](https://developers.cloudflare.com/reference-architecture/diagrams/serverless/fullstack-application/)

[A practical example of how these services come together in a real fullstack application architecture.](https://developers.cloudflare.com/reference-architecture/diagrams/serverless/fullstack-application/) ---
title: Evaluations · Cloudflare AI Gateway docs
description: Understanding your application's performance is essential for
  optimization. Developers often have different priorities, and finding the
  optimal solution involves balancing key factors such as cost, latency, and
  accuracy. Some prioritize low-latency responses, while others focus on
  accuracy or cost-efficiency.
lastUpdated: 2025-05-01T13:39:24.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/evaluations/
  md: https://developers.cloudflare.com/ai-gateway/evaluations/index.md
---

Understanding your application's performance is essential for optimization. Developers often have different priorities, and finding the optimal solution involves balancing key factors such as cost, latency, and accuracy. Some prioritize low-latency responses, while others focus on accuracy or cost-efficiency.

AI Gateway's Evaluations provide the data needed to make informed decisions on how to optimize your AI application. Whether it is adjusting the model, provider, or prompt, this feature delivers insights into key metrics around performance, speed, and cost. It empowers developers to better understand their application's behavior, ensuring improved accuracy, reliability, and customer satisfaction.

Evaluations use datasets which are collections of logs stored for analysis. You can create datasets by applying filters in the Logs tab, which help narrow down specific logs for evaluation.

Our first step toward comprehensive AI evaluations starts with human feedback (currently in open beta). We will continue to build and expand AI Gateway with additional evaluators.

[Learn how to set up an evaluation](https://developers.cloudflare.com/ai-gateway/evaluations/set-up-evaluations/) including creating datasets, selecting evaluators, and running the evaluation process. ---
title: Getting started · Cloudflare AI Gateway docs
description: In this guide, you will learn how to create your first AI Gateway.
  You can create multiple gateways to control different applications.
lastUpdated: 2025-05-09T13:19:26.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/get-started/
  md: https://developers.cloudflare.com/ai-gateway/get-started/index.md
---

In this guide, you will learn how to create your first AI Gateway. You can create multiple gateways to control different applications.

## Prerequisites

Before you get started, you need a Cloudflare account.

[Sign up](https://dash.cloudflare.com/sign-up)

## Create gateway

Then, create a new AI Gateway.

* Dashboard

  To set up an AI Gateway in the dashboard:

  1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
  2. Go to **AI** > **AI Gateway**.
  3. Select **Create Gateway**.
  4. Enter your **Gateway name**. Note: Gateway name has a 64 character limit.
  5. Select **Create**.

* API

  To set up an AI Gateway using the API:

  1. [Create an API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) with the following permissions:

     * `AI Gateway - Read`
     * `AI Gateway - Edit`

  2. Get your [Account ID](https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/).

  3. Using that API token and Account ID, send a [`POST` request](https://developers.cloudflare.com/api/resources/ai_gateway/methods/create/) to the Cloudflare API.

## Choosing gateway authentication

When setting up a new gateway, you can choose between an authenticated and unauthenticated gateway. Enabling an authenticated gateway requires each request to include a valid authorization token, adding an extra layer of security. We recommend using an authenticated gateway when storing logs to prevent unauthorized access and protect against invalid requests that can inflate log storage usage and make it harder to find the data you need. Learn more about setting up an [Authenticated Gateway](https://developers.cloudflare.com/ai-gateway/configuration/authentication/).

## Connect application

Next, connect your AI provider to your gateway.

AI Gateway offers multiple endpoints for each Gateway you create - one endpoint per provider, and one Universal Endpoint. To use AI Gateway, you will need to create your own account with each provider and provide your API key. AI Gateway acts as a proxy for these requests, enabling observability, caching, and more.

Additionally, AI Gateway has a [WebSockets API](https://developers.cloudflare.com/ai-gateway/websockets-api/) which provides a single persistent connection, enabling continuous communication. This API supports all AI providers connected to AI Gateway, including those that do not natively support WebSockets.

Below is a list of our supported model providers:

* [Amazon Bedrock](https://developers.cloudflare.com/ai-gateway/providers/bedrock/)
* [Anthropic](https://developers.cloudflare.com/ai-gateway/providers/anthropic/)
* [Azure OpenAI](https://developers.cloudflare.com/ai-gateway/providers/azureopenai/)
* [Cartesia](https://developers.cloudflare.com/ai-gateway/providers/cartesia/)
* [Cerebras](https://developers.cloudflare.com/ai-gateway/providers/cerebras/)
* [Cohere](https://developers.cloudflare.com/ai-gateway/providers/cohere/)
* [DeepSeek](https://developers.cloudflare.com/ai-gateway/providers/deepseek/)
* [ElevenLabs](https://developers.cloudflare.com/ai-gateway/providers/elevenlabs/)
* [Google AI Studio](https://developers.cloudflare.com/ai-gateway/providers/google-ai-studio/)
* [Google Vertex AI](https://developers.cloudflare.com/ai-gateway/providers/vertex/)
* [Grok](https://developers.cloudflare.com/ai-gateway/providers/grok/)
* [Groq](https://developers.cloudflare.com/ai-gateway/providers/groq/)
* [HuggingFace](https://developers.cloudflare.com/ai-gateway/providers/huggingface/)
* [Mistral AI](https://developers.cloudflare.com/ai-gateway/providers/mistral/)
* [OpenAI](https://developers.cloudflare.com/ai-gateway/providers/openai/)
* [OpenRouter](https://developers.cloudflare.com/ai-gateway/providers/openrouter/)
* [Perplexity](https://developers.cloudflare.com/ai-gateway/providers/perplexity/)
* [Replicate](https://developers.cloudflare.com/ai-gateway/providers/replicate/)
* [Workers AI](https://developers.cloudflare.com/ai-gateway/providers/workersai/)

If you do not have a provider preference, start with one of our dedicated tutorials:

* [OpenAI](https://developers.cloudflare.com/ai-gateway/tutorials/deploy-aig-worker/)
* [Workers AI](https://developers.cloudflare.com/ai-gateway/tutorials/create-first-aig-workers/)

## View analytics

Now that your provider is connected to the AI Gateway, you can view analytics for requests going through your gateway.

Your AI Gateway dashboard shows metrics on requests, tokens, caching, errors, and cost. You can filter these metrics by time and provider-type.



To view analytics in the dashboard:

1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com) and select your account.
2. Go to **AI** > **AI Gateway**.
3. Make sure you have your gateway selected.

Note

The cost metric is an estimation based on the number of tokens sent and received in requests. While this metric can help you monitor and predict cost trends, refer to your provider's dashboard for the most accurate cost details.

## Next steps

* Learn more about [caching](https://developers.cloudflare.com/ai-gateway/configuration/caching/) for faster requests and cost savings and [rate limiting](https://developers.cloudflare.com/ai-gateway/configuration/rate-limiting/) to control how your application scales.
* Explore how to specify model or provider [fallbacks](https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/) for resiliency.
* Learn how to use low-cost, open source models on [Workers AI](https://developers.cloudflare.com/ai-gateway/providers/workersai/) - our AI inference service. ---
title: Header Glossary · Cloudflare AI Gateway docs
description: AI Gateway supports a variety of headers to help you configure,
  customize, and manage your API requests. This page provides a complete list of
  all supported headers, along with a short description
lastUpdated: 2025-05-09T15:42:57.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/glossary/
  md: https://developers.cloudflare.com/ai-gateway/glossary/index.md
---

AI Gateway supports a variety of headers to help you configure, customize, and manage your API requests. This page provides a complete list of all supported headers, along with a short description

| Term | Definition |
| - | - |
| cf-aig-backoff | Header to customize the backoff type for [request retries](https://developers.cloudflare.com/ai-gateway/configuration/request-handling/#request-retries) of a request. |
| cf-aig-cache-key | The [cf-aig-cache-key-aig-cache-key](https://developers.cloudflare.com/ai-gateway/configuration/caching/#custom-cache-key-cf-aig-cache-key) let you override the default cache key in order to precisely set the cacheability setting for any resource. |
| cf-aig-cache-status | [Status indicator for caching](https://developers.cloudflare.com/ai-gateway/configuration/caching/#default-configuration), showing if a request was served from cache. |
| cf-aig-cache-ttl | Specifies the [cache time-to-live for responses](https://developers.cloudflare.com/ai-gateway/configuration/caching/#cache-ttl-cf-aig-cache-ttl). |
| cf-aig-collect-log | The [cf-aig-collect-log](https://developers.cloudflare.com/ai-gateway/observability/logging/#collect-logs-cf-aig-collect-log) header allows you to bypass the default log setting for the gateway. |
| cf-aig-custom-cost | Allows the [customization of request cost](https://developers.cloudflare.com/ai-gateway/configuration/custom-costs/#custom-cost) to reflect user-defined parameters. |
| cf-aig-event-id | [cf-aig-event-id](https://developers.cloudflare.com/ai-gateway/evaluations/add-human-feedback-api/#3-retrieve-the-cf-aig-log-id) is a unique identifier for an event, used to trace specific events through the system. |
| cf-aig-log-id | The [cf-aig-log-id](https://developers.cloudflare.com/ai-gateway/evaluations/add-human-feedback-api/#3-retrieve-the-cf-aig-log-id) is a unique identifier for the specific log entry to which you want to add feedback. |
| cf-aig-max-attempts | Header to customize the number of max attempts for [request retries](https://developers.cloudflare.com/ai-gateway/configuration/request-handling/#request-retries) of a request. |
| cf-aig-metadata | [Custom metadata](https://developers.cloudflare.com/ai-gateway/configuration/custom-metadata/)allows you to tag requests with user IDs or other identifiers, enabling better tracking and analysis of your requests. |
| cf-aig-request-timeout | Header to trigger a fallback provider based on a [predetermined response time](https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/#request-timeouts) (measured in milliseconds). |
| cf-aig-retry-delay | Header to customize the retry delay for [request retries](https://developers.cloudflare.com/ai-gateway/configuration/request-handling/#request-retries) of a request. |
| cf-aig-skip-cache | Header to [bypass caching for a specific request](https://developers.cloudflare.com/ai-gateway/configuration/caching/#skip-cache-cf-aig-skip-cache). |
| cf-aig-step | [cf-aig-step](https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/#response-headercf-aig-step) identifies the processing step in the AI Gateway flow for better tracking and debugging. |
| cf-cache-ttl | Deprecated: This header is replaced by `cf-aig-cache-ttl`. It specifies cache time-to-live. |
| cf-skip-cache | Deprecated: This header is replaced by `cf-aig-skip-cache`. It bypasses caching for a specific request. |

## Configuration hierarchy

Settings in AI Gateway can be configured at three levels: **Provider**, **Request**, and **Gateway**. Since the same settings can be configured in multiple locations, the following hierarchy determines which value is applied:

1. **Provider-level headers**: Relevant only when using the [Universal Endpoint](https://developers.cloudflare.com/ai-gateway/universal/), these headers take precedence over all other configurations.
2. **Request-level headers**: Apply if no provider-level headers are set.
3. **Gateway-level settings**: Act as the default if no headers are set at the provider or request levels.

This hierarchy ensures consistent behavior, prioritizing the most specific configurations. Use provider-level and request-level headers for more fine-tuned control, and gateway settings for general defaults. ---
title: Guardrails · Cloudflare AI Gateway docs
description: Guardrails help you deploy AI applications safely by intercepting
  and evaluating both user prompts and model responses for harmful content.
  Acting as a proxy between your application and model providers (such as
  OpenAI, Anthropic, DeepSeek, and others), AI Gateway's Guardrails ensure a
  consistent and secure experience across your entire AI ecosystem.
lastUpdated: 2025-05-09T15:42:57.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/guardrails/
  md: https://developers.cloudflare.com/ai-gateway/guardrails/index.md
---

Guardrails help you deploy AI applications safely by intercepting and evaluating both user prompts and model responses for harmful content. Acting as a proxy between your application and [model providers](https://developers.cloudflare.com/ai-gateway/providers/) (such as OpenAI, Anthropic, DeepSeek, and others), AI Gateway's Guardrails ensure a consistent and secure experience across your entire AI ecosystem.

Guardrails proactively monitor interactions between users and AI models, giving you:

* **Consistent moderation**: Uniform moderation layer that works across models and providers.
* **Enhanced safety and user trust**: Proactively protect users from harmful or inappropriate interactions.
* **Flexibility and control over allowed content**: Specify which categories to monitor and choose between flagging or outright blocking.
* **Auditing and compliance capabilities**: Receive updates on evolving regulatory requirements with logs of user prompts, model responses, and enforced guardrails.

## Video demo

## How Guardrails work

AI Gateway inspects all interactions in real time by evaluating content against predefined safety parameters. Guardrails work by:

1. Intercepting interactions: AI Gateway proxies requests and responses, sitting between the user and the AI model.

2. Inspecting content:

   * User prompts: AI Gateway checks prompts against safety parameters (for example, violence, hate, or sexual content). Based on your settings, prompts can be flagged or blocked before reaching the model.
   * Model responses: Once processed, the AI model response is inspected. If hazardous content is detected, it can be flagged or blocked before being delivered to the user.

3. Applying actions: Depending on your configuration, flagged content is logged for review, while blocked content is prevented from proceeding.

## Related resource

* [Cloudflare Blog: Keep AI interactions secure and risk-free with Guardrails in AI Gateway](https://blog.cloudflare.com/guardrails-in-ai-gateway/) ---
title: Integrations · Cloudflare AI Gateway docs
lastUpdated: 2025-05-09T15:42:57.000Z
chatbotDeprioritize: true
source_url:
  html: https://developers.cloudflare.com/ai-gateway/integrations/
  md: https://developers.cloudflare.com/ai-gateway/integrations/index.md
--- ---
title: Observability · Cloudflare AI Gateway docs
description: Observability is the practice of instrumenting systems to collect
  metrics, and logs enabling better monitoring, troubleshooting, and
  optimization of applications.
lastUpdated: 2025-05-09T15:42:57.000Z
chatbotDeprioritize: true
source_url:
  html: https://developers.cloudflare.com/ai-gateway/observability/
  md: https://developers.cloudflare.com/ai-gateway/observability/index.md
---

Observability is the practice of instrumenting systems to collect metrics, and logs enabling better monitoring, troubleshooting, and optimization of applications.

* [Analytics](https://developers.cloudflare.com/ai-gateway/observability/analytics/)
* [Costs](https://developers.cloudflare.com/ai-gateway/observability/costs/)
* [Logging](https://developers.cloudflare.com/ai-gateway/observability/logging/) ---
title: Model providers · Cloudflare AI Gateway docs
description: "Here is a quick list of the providers we support:"
lastUpdated: 2025-05-28T19:49:34.000Z
chatbotDeprioritize: true
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/
  md: https://developers.cloudflare.com/ai-gateway/providers/index.md
---

Here is a quick list of the providers we support:

* [Amazon Bedrock](https://developers.cloudflare.com/ai-gateway/providers/bedrock/)
* [Anthropic](https://developers.cloudflare.com/ai-gateway/providers/anthropic/)
* [Azure OpenAI](https://developers.cloudflare.com/ai-gateway/providers/azureopenai/)
* [Cartesia](https://developers.cloudflare.com/ai-gateway/providers/cartesia/)
* [Cerebras](https://developers.cloudflare.com/ai-gateway/providers/cerebras/)
* [Cohere](https://developers.cloudflare.com/ai-gateway/providers/cohere/)
* [DeepSeek](https://developers.cloudflare.com/ai-gateway/providers/deepseek/)
* [ElevenLabs](https://developers.cloudflare.com/ai-gateway/providers/elevenlabs/)
* [Google AI Studio](https://developers.cloudflare.com/ai-gateway/providers/google-ai-studio/)
* [Google Vertex AI](https://developers.cloudflare.com/ai-gateway/providers/vertex/)
* [Grok](https://developers.cloudflare.com/ai-gateway/providers/grok/)
* [Groq](https://developers.cloudflare.com/ai-gateway/providers/groq/)
* [HuggingFace](https://developers.cloudflare.com/ai-gateway/providers/huggingface/)
* [Mistral AI](https://developers.cloudflare.com/ai-gateway/providers/mistral/)
* [OpenAI](https://developers.cloudflare.com/ai-gateway/providers/openai/)
* [OpenRouter](https://developers.cloudflare.com/ai-gateway/providers/openrouter/)
* [Perplexity](https://developers.cloudflare.com/ai-gateway/providers/perplexity/)
* [Replicate](https://developers.cloudflare.com/ai-gateway/providers/replicate/)
* [Workers AI](https://developers.cloudflare.com/ai-gateway/providers/workersai/) ---
title: Platform · Cloudflare AI Gateway docs
lastUpdated: 2025-05-09T15:42:57.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/reference/
  md: https://developers.cloudflare.com/ai-gateway/reference/index.md
---

* [Audit logs](https://developers.cloudflare.com/ai-gateway/reference/audit-logs/)
* [Limits](https://developers.cloudflare.com/ai-gateway/reference/limits/)
* [Pricing](https://developers.cloudflare.com/ai-gateway/reference/pricing/) ---
title: Tutorials · Cloudflare AI Gateway docs
description: View tutorials to help you get started with AI Gateway.
lastUpdated: 2025-05-09T15:42:57.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/tutorials/
  md: https://developers.cloudflare.com/ai-gateway/tutorials/index.md
---

View tutorials to help you get started with AI Gateway.

## Docs

| Name | Last Updated | Type | Difficulty |
| - | - | - | - |
| [AI Gateway Binding Methods](https://developers.cloudflare.com/ai-gateway/integrations/worker-binding-methods/) | 4 months ago | 📝 Tutorial | |
| [Workers AI](https://developers.cloudflare.com/ai-gateway/integrations/aig-workers-ai-binding/) | 9 months ago | 📝 Tutorial | |
| [Create your first AI Gateway using Workers AI](https://developers.cloudflare.com/ai-gateway/tutorials/create-first-aig-workers/) | 12 months ago | 📝 Tutorial | Beginner |
| [Deploy a Worker that connects to OpenAI via AI Gateway](https://developers.cloudflare.com/ai-gateway/tutorials/deploy-aig-worker/) | almost 2 years ago | 📝 Tutorial | Beginner |

## Videos

Cloudflare Workflows | Introduction (Part 1 of 3)

In this video, we introduce Cloudflare Workflows, the Newest Developer Platform Primitive at Cloudflare.

Cloudflare Workflows | Batching and Monitoring Your Durable Execution (Part 2 of 3)

Workflows exposes metrics such as execution, error rates, steps, and total duration!

Welcome to the Cloudflare Developer Channel

Welcome to the Cloudflare Developers YouTube channel. We've got tutorials and working demos and everything you need to level up your projects. Whether you're working on your next big thing or just dorking around with some side projects, we've got you covered! So why don't you come hang out, subscribe to our developer channel and together we'll build something awesome. You're gonna love it.

Optimize your AI App & fine-tune models (AI Gateway, R2)

In this workshop, Kristian Freeman, Cloudflare Developer Advocate, shows how to optimize your existing AI applications with Cloudflare AI Gateway, and how to finetune OpenAI models using R2.

How to use Cloudflare AI models and inference in Python with Jupyter Notebooks

Cloudflare Workers AI provides a ton of AI models and inference capabilities. In this video, we will explore how to make use of Cloudflare’s AI model catalog using a Python Jupyter Notebook. ---
title: Universal Endpoint · Cloudflare AI Gateway docs
description: You can use the Universal Endpoint to contact every provider.
lastUpdated: 2025-06-04T13:11:02.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/universal/
  md: https://developers.cloudflare.com/ai-gateway/universal/index.md
---

You can use the Universal Endpoint to contact every provider.

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}
```

AI Gateway offers multiple endpoints for each Gateway you create - one endpoint per provider, and one Universal Endpoint. The Universal Endpoint requires some adjusting to your schema, but supports additional features. Some of these features are, for example, retrying a request if it fails the first time, or configuring a [fallback model/provider](https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/).

You can use the Universal endpoint to contact every provider. The payload is expecting an array of message, and each message is an object with the following parameters:

* `provider` : the name of the provider you would like to direct this message to. Can be OpenAI, workers-ai, or any of our supported providers.
* `endpoint`: the pathname of the provider API you’re trying to reach. For example, on OpenAI it can be `chat/completions`, and for Workers AI this might be [`@cf/meta/llama-3.1-8b-instruct`](https://developers.cloudflare.com/workers-ai/models/llama-3.1-8b-instruct/). See more in the sections that are specific to [each provider](https://developers.cloudflare.com/ai-gateway/providers/).
* `authorization`: the content of the Authorization HTTP Header that should be used when contacting this provider. This usually starts with 'Token' or 'Bearer'.
* `query`: the payload as the provider expects it in their official API.

## cURL example

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id} \
  --header 'Content-Type: application/json' \
  --data '[
  {
    "provider": "workers-ai",
    "endpoint": "@cf/meta/llama-3.1-8b-instruct",
    "headers": {
      "Authorization": "Bearer {cloudflare_token}",
      "Content-Type": "application/json"
    },
    "query": {
      "messages": [
        {
          "role": "system",
          "content": "You are a friendly assistant"
        },
        {
          "role": "user",
          "content": "What is Cloudflare?"
        }
      ]
    }
  },
  {
    "provider": "openai",
    "endpoint": "chat/completions",
    "headers": {
      "Authorization": "Bearer {open_ai_token}",
      "Content-Type": "application/json"
    },
    "query": {
      "model": "gpt-4o-mini",
      "stream": true,
      "messages": [
        {
          "role": "user",
          "content": "What is Cloudflare?"
        }
      ]
    }
  }
]'
```

The above will send a request to Workers AI Inference API, if it fails it will proceed to OpenAI. You can add as many fallbacks as you need, just by adding another JSON in the array.

## WebSockets API beta

The Universal Endpoint can also be accessed via a [WebSockets API](https://developers.cloudflare.com/ai-gateway/websockets-api/) which provides a single persistent connection, enabling continuous communication. This API supports all AI providers connected to AI Gateway, including those that do not natively support WebSockets.

## WebSockets example

```javascript
import WebSocket from "ws";
const ws = new WebSocket(
  "wss://gateway.ai.cloudflare.com/v1/my-account-id/my-gateway/",
  {
    headers: {
      "cf-aig-authorization": "Bearer AI_GATEWAY_TOKEN",
    },
  },
);


ws.send(
  JSON.stringify({
    type: "universal.create",
    request: {
      eventId: "my-request",
      provider: "workers-ai",
      endpoint: "@cf/meta/llama-3.1-8b-instruct",
      headers: {
        Authorization: "Bearer WORKERS_AI_TOKEN",
        "Content-Type": "application/json",
      },
      query: {
        prompt: "tell me a joke",
      },
    },
  }),
);


ws.on("message", function incoming(message) {
  console.log(message.toString());
});
```

## Workers Binding example

* wrangler.jsonc

  ```jsonc
  {
    "ai": {
      "binding": "AI"
    }
  }
  ```

* wrangler.toml

  ```toml
  [ai]
  binding = "AI"
  ```

```typescript
type Env = {
  AI: Ai;
};


export default {
  async fetch(request: Request, env: Env) {
    return env.AI.gateway('my-gateway').run({
      provider: "workers-ai",
      endpoint: "@cf/meta/llama-3.1-8b-instruct",
      headers: {
        authorization: "Bearer my-api-token",
      },
      query: {
        prompt: "tell me a joke",
      },
    });
  },
};
```

## Header configuration hierarchy

The Universal Endpoint allows you to set fallback models or providers and customize headers for each provider or request. You can configure headers at three levels:

1. **Provider level**: Headers specific to a particular provider.
2. **Request level**: Headers included in individual requests.
3. **Gateway settings**: Default headers configured in your gateway dashboard.

Since the same settings can be configured in multiple locations, AI Gateway applies a hierarchy to determine which configuration takes precedence:

* **Provider-level headers** override all other configurations.
* **Request-level headers** are used if no provider-level headers are set.
* **Gateway-level settings** are used only if no headers are configured at the provider or request levels.

This hierarchy ensures consistent behavior, prioritizing the most specific configurations. Use provider-level and request-level headers for fine-tuned control, and gateway settings for general defaults.

## Hierarchy example

This example demonstrates how headers set at different levels impact caching behavior:

* **Request-level header**: The `cf-aig-cache-ttl` is set to `3600` seconds, applying this caching duration to the request by default.
* **Provider-level header**: For the fallback provider (OpenAI), `cf-aig-cache-ttl` is explicitly set to `0` seconds, overriding the request-level header and disabling caching for responses when OpenAI is used as the provider.

This shows how provider-level headers take precedence over request-level headers, allowing for granular control of caching behavior.

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id} \
  --header 'Content-Type: application/json' \
  --header 'cf-aig-cache-ttl: 3600' \
  --data '[
    {
      "provider": "workers-ai",
      "endpoint": "@cf/meta/llama-3.1-8b-instruct",
      "headers": {
        "Authorization": "Bearer {cloudflare_token}",
        "Content-Type": "application/json"
      },
      "query": {
        "messages": [
          {
            "role": "system",
            "content": "You are a friendly assistant"
          },
          {
            "role": "user",
            "content": "What is Cloudflare?"
          }
        ]
      }
    },
    {
      "provider": "openai",
      "endpoint": "chat/completions",
      "headers": {
        "Authorization": "Bearer {open_ai_token}",
        "Content-Type": "application/json",
        "cf-aig-cache-ttl": "0"
      },
      "query": {
        "model": "gpt-4o-mini",
        "stream": true,
        "messages": [
          {
            "role": "user",
            "content": "What is Cloudflare?"
          }
        ]
      }
    }
  ]'
``` ---
title: WebSockets API · Cloudflare AI Gateway docs
description: "The AI Gateway WebSockets API provides a persistent connection for
  AI interactions, eliminating repeated handshakes and reducing latency. This
  API is divided into two categories:"
lastUpdated: 2025-05-28T19:49:34.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/websockets-api/
  md: https://developers.cloudflare.com/ai-gateway/websockets-api/index.md
---

The AI Gateway WebSockets API provides a persistent connection for AI interactions, eliminating repeated handshakes and reducing latency. This API is divided into two categories:

* **Realtime APIs** - Designed for AI providers that offer low-latency, multimodal interactions over WebSockets.
* **Non-Realtime APIs** - Supports standard WebSocket communication for AI providers, including those that do not natively support WebSockets.

## When to use WebSockets

WebSockets are long-lived TCP connections that enable bi-directional, real-time and non realtime communication between client and server. Unlike HTTP connections, which require repeated handshakes for each request, WebSockets maintain the connection, supporting continuous data exchange with reduced overhead. WebSockets are ideal for applications needing low-latency, real-time data, such as voice assistants.

## Key benefits

* **Reduced overhead**: Avoid overhead of repeated handshakes and TLS negotiations by maintaining a single, persistent connection.
* **Provider compatibility**: Works with all AI providers in AI Gateway. Even if your chosen provider does not support WebSockets, Cloudflare handles it for you, managing the requests to your preferred AI provider.

## Key differences

| Feature | Realtime APIs | Non-Realtime APIs |
| - | - | - |
| **Purpose** | Enables real-time, multimodal AI interactions for providers that offer dedicated WebSocket endpoints. | Supports WebSocket-based AI interactions with providers that do not natively support WebSockets. |
| **Use Case** | Streaming responses for voice, video, and live interactions. | Text-based queries and responses, such as LLM requests. |
| **AI Provider Support** | [Limited to providers offering real-time WebSocket APIs.](https://developers.cloudflare.com/ai-gateway/websockets-api/realtime-api/#supported-providers) | [All AI providers in AI Gateway.](https://developers.cloudflare.com/ai-gateway/providers/) |
| **Streaming Support** | Providers natively support real-time data streaming. | AI Gateway handles streaming via WebSockets. |

For details on implementation, refer to the next sections:

* [Realtime WebSockets API](https://developers.cloudflare.com/ai-gateway/websockets-api/realtime-api/)
* [Non-Realtime WebSockets API](https://developers.cloudflare.com/ai-gateway/websockets-api/non-realtime-api/) ---
title: Authentication · Cloudflare AI Gateway docs
description: Add security by requiring a valid authorization token for each request.
lastUpdated: 2025-01-07T01:04:02.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/configuration/authentication/
  md: https://developers.cloudflare.com/ai-gateway/configuration/authentication/index.md
---

Using an Authenticated Gateway in AI Gateway adds security by requiring a valid authorization token for each request. This feature is especially useful when storing logs, as it prevents unauthorized access and protects against invalid requests that can inflate log storage usage and make it harder to find the data you need. With Authenticated Gateway enabled, only requests with the correct token are processed.

Note

We recommend enabling Authenticated Gateway when opting to store logs with AI Gateway.

If Authenticated Gateway is enabled but a request does not include the required `cf-aig-authorization` header, the request will fail. This setting ensures that only verified requests pass through the gateway. To bypass the need for the `cf-aig-authorization` header, make sure to disable Authenticated Gateway.

## Setting up Authenticated Gateway using the Dashboard

1. Go to the Settings for the specific gateway you want to enable authentication for.
2. Select **Create authentication token** to generate a custom token with the required `Run` permissions. Be sure to securely save this token, as it will not be displayed again.
3. Include the `cf-aig-authorization` header with your API token in each request for this gateway.
4. Return to the settings page and toggle on Authenticated Gateway.

## Example requests with OpenAI

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \
  --header 'cf-aig-authorization: Bearer {CF_AIG_TOKEN}' \
  --header 'Authorization: Bearer OPENAI_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{"model": "gpt-3.5-turbo", "messages": [{"role": "user", "content": "What is Cloudflare?"}]}'
```

Using the OpenAI SDK:

```javascript
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://gateway.ai.cloudflare.com/v1/account-id/gateway/openai",
  defaultHeaders: {
    "cf-aig-authorization": `Bearer {token}`,
  },
});
```

## Example requests with the Vercel AI SDK

```javascript
import { createOpenAI } from "@ai-sdk/openai";


const openai = createOpenAI({
  baseURL: "https://gateway.ai.cloudflare.com/v1/account-id/gateway/openai",
  headers: {
    "cf-aig-authorization": `Bearer {token}`,
  },
});
```

## Expected behavior

The following table outlines gateway behavior based on the authentication settings and header status:

| Authentication Setting | Header Info | Gateway State | Response |
| - | - | - | - |
| On | Header present | Authenticated gateway | Request succeeds |
| On | No header | Error | Request fails due to missing authorization |
| Off | Header present | Unauthenticated gateway | Request succeeds |
| Off | No header | Unauthenticated gateway | Request succeeds | ---
title: Caching · Cloudflare AI Gateway docs
description: Override caching settings on a per-request basis.
lastUpdated: 2025-05-29T18:16:56.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/configuration/caching/
  md: https://developers.cloudflare.com/ai-gateway/configuration/caching/index.md
---

AI Gateway can cache responses from your AI model providers, serving them directly from Cloudflare's cache for identical requests.

## Benefits of Using Caching

* **Reduced Latency:** Serve responses faster to your users by avoiding a round trip to the origin AI provider for repeated requests.
* **Cost Savings:** Minimize the number of paid requests made to your AI provider, especially for frequently accessed or non-dynamic content.
* **Increased Throughput:** Offload repetitive requests from your AI provider, allowing it to handle unique requests more efficiently.

Note

Currently caching is supported only for text and image responses, and it applies only to identical requests.

This configuration benefits use cases with limited prompt options. For example, a support bot that asks "How can I help you?" and lets the user select an answer from a limited set of options works well with the current caching configuration. We plan on adding semantic search for caching in the future to improve cache hit rates.

## Default configuration

* Dashboard

  To set the default caching configuration in the dashboard:

  1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
  2. Select **AI** > **AI Gateway**.
  3. Select **Settings**.
  4. Enable **Cache Responses**.
  5. Change the default caching to whatever value you prefer.

* API

  To set the default caching configuration using the API:

  1. [Create an API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) with the following permissions:

  * `AI Gateway - Read`
  * `AI Gateway - Edit`

  1. Get your [Account ID](https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/).
  2. Using that API token and Account ID, send a [`POST` request](https://developers.cloudflare.com/api/resources/ai_gateway/methods/create/) to create a new Gateway and include a value for the `cache_ttl`.

This caching behavior will be uniformly applied to all requests that support caching. If you need to modify the cache settings for specific requests, you have the flexibility to override this setting on a per-request basis.

To check whether a response comes from cache or not, **cf-aig-cache-status** will be designated as `HIT` or `MISS`.

## Per-request caching

While your gateway's default cache settings provide a good baseline, you might need more granular control. These situations could be data freshness, content with varying lifespans, or dynamic or personalized responses.

To address these needs, AI Gateway allows you to override default cache behaviors on a per-request basis using specific HTTP headers. This gives you the precision to optimize caching for individual API calls.

The following headers allow you to define this per-request cache behavior:

Note

The following headers have been updated to new names, though the old headers will still function. We recommend updating to the new headers to ensure future compatibility:

`cf-cache-ttl` is now `cf-aig-cache-ttl`

`cf-skip-cache` is now `cf-aig-skip-cache`

### Skip cache (cf-aig-skip-cache)

Skip cache refers to bypassing the cache and fetching the request directly from the original provider, without utilizing any cached copy.

You can use the header **cf-aig-skip-cache** to bypass the cached version of the request.

As an example, when submitting a request to OpenAI, include the header in the following manner:

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \
  --header "Authorization: Bearer $TOKEN" \
  --header 'Content-Type: application/json' \
  --header 'cf-aig-skip-cache: true' \
  --data ' {
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "user",
            "content": "how to build a wooden spoon in 3 short steps? give as short as answer as possible"
          }
        ]
      }
'
```

### Cache TTL (cf-aig-cache-ttl)

Cache TTL, or Time To Live, is the duration a cached request remains valid before it expires and is refreshed from the original source. You can use **cf-aig-cache-ttl** to set the desired caching duration in seconds. The minimum TTL is 60 seconds and the maximum TTL is one month.

For example, if you set a TTL of one hour, it means that a request is kept in the cache for an hour. Within that hour, an identical request will be served from the cache instead of the original API. After an hour, the cache expires and the request will go to the original API for a fresh response, and that response will repopulate the cache for the next hour.

As an example, when submitting a request to OpenAI, include the header in the following manner:

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \
  --header "Authorization: Bearer $TOKEN" \
  --header 'Content-Type: application/json' \
  --header 'cf-aig-cache-ttl: 3600' \
  --data ' {
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "user",
            "content": "how to build a wooden spoon in 3 short steps? give as short as answer as possible"
          }
        ]
      }
'
```

### Custom cache key (cf-aig-cache-key)

Custom cache keys let you override the default cache key in order to precisely set the cacheability setting for any resource. To override the default cache key, you can use the header **cf-aig-cache-key**.

When you use the **cf-aig-cache-key** header for the first time, you will receive a response from the provider. Subsequent requests with the same header will return the cached response. If the **cf-aig-cache-ttl** header is used, responses will be cached according to the specified Cache Time To Live. Otherwise, responses will be cached according to the cache settings in the dashboard. If caching is not enabled for the gateway, responses will be cached for 5 minutes by default.

As an example, when submitting a request to OpenAI, include the header in the following manner:

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \
  --header 'Authorization: Bearer {openai_token}' \
  --header 'Content-Type: application/json' \
  --header 'cf-aig-cache-key: responseA' \
  --data ' {
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "user",
            "content": "how to build a wooden spoon in 3 short steps? give as short as answer as possible"
          }
        ]
      }
'
```

AI Gateway caching behavior

Cache in AI Gateway is volatile. If two identical requests are sent simultaneously, the first request may not cache in time for the second request to use it, which may result in the second request retrieving data from the original source. ---
title: Custom costs · Cloudflare AI Gateway docs
description: Override default or public model costs on a per-request basis.
lastUpdated: 2025-03-05T12:30:57.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/configuration/custom-costs/
  md: https://developers.cloudflare.com/ai-gateway/configuration/custom-costs/index.md
---

AI Gateway allows you to set custom costs at the request level. By using this feature, the cost metrics can accurately reflect your unique pricing, overriding the default or public model costs.

Note

Custom costs will only apply to requests that pass tokens in their response. Requests without token information will not have costs calculated.

## Custom cost

To add custom costs to your API requests, use the `cf-aig-custom-cost` header. This header enables you to specify the cost per token for both input (tokens sent) and output (tokens received).

* **per\_token\_in**: The negotiated input token cost (per token).
* **per\_token\_out**: The negotiated output token cost (per token).

There is no limit to the number of decimal places you can include, ensuring precise cost calculations, regardless of how small the values are.

Custom costs will appear in the logs with an underline, making it easy to identify when custom pricing has been applied.

In this example, if you have a negotiated price of $1 per million input tokens and $2 per million output tokens, include the `cf-aig-custom-cost` header as shown below.

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \
  --header "Authorization: Bearer $TOKEN" \
  --header 'Content-Type: application/json' \
  --header 'cf-aig-custom-cost: {"per_token_in":0.000001,"per_token_out":0.000002}' \
  --data ' {
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "user",
            "content": "When is Cloudflare’s Birthday Week?"
          }
        ]
      }'
```

Note

If a response is served from cache (cache hit), the cost is always `0`, even if you specified a custom cost. Custom costs only apply when the request reaches the model provider. ---
title: Custom metadata · Cloudflare AI Gateway docs
description: Custom metadata in AI Gateway allows you to tag requests with user
  IDs or other identifiers, enabling better tracking and analysis of your
  requests. Metadata values can be strings, numbers, or booleans, and will
  appear in your logs, making it easy to search and filter through your data.
lastUpdated: 2024-11-22T22:12:51.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/configuration/custom-metadata/
  md: https://developers.cloudflare.com/ai-gateway/configuration/custom-metadata/index.md
---

Custom metadata in AI Gateway allows you to tag requests with user IDs or other identifiers, enabling better tracking and analysis of your requests. Metadata values can be strings, numbers, or booleans, and will appear in your logs, making it easy to search and filter through your data.

## Key Features

* **Custom Tagging**: Add user IDs, team names, test indicators, and other relevant information to your requests.
* **Enhanced Logging**: Metadata appears in your logs, allowing for detailed inspection and troubleshooting.
* **Search and Filter**: Use metadata to efficiently search and filter through logged requests.

Note

AI Gateway allows you to pass up to five custom metadata entries per request. If more than five entries are provided, only the first five will be saved; additional entries will be ignored. Ensure your custom metadata is limited to five entries to avoid unprocessed or lost data.

## Supported Metadata Types

* String
* Number
* Boolean

Note

Objects are not supported as metadata values.

## Implementations

### Using cURL

To include custom metadata in your request using cURL:

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \
  --header 'Authorization: Bearer {api_token}' \
  --header 'Content-Type: application/json' \
  --header 'cf-aig-metadata: {"team": "AI", "user": 12345, "test":true}' \
  --data '{"model": "gpt-4o", "messages": [{"role": "user", "content": "What should I eat for lunch?"}]}'
```

### Using SDK

To include custom metadata in your request using the OpenAI SDK:

```javascript
import OpenAI from "openai";


export default {
 async fetch(request, env, ctx) {
   const openai = new OpenAI({
     apiKey: env.OPENAI_API_KEY,
     baseURL: "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai",
   });


   try {
     const chatCompletion = await openai.chat.completions.create(
       {
         model: "gpt-4o",
         messages: [{ role: "user", content: "What should I eat for lunch?" }],
         max_tokens: 50,
       },
       {
         headers: {
           "cf-aig-metadata": JSON.stringify({
             user: "JaneDoe",
             team: 12345,
             test: true
           }),
         },
       }
     );


     const response = chatCompletion.choices[0].message;
     return new Response(JSON.stringify(response));
   } catch (e) {
     console.log(e);
     return new Response(e);
   }
 },
};
```

### Using Binding

To include custom metadata in your request using [Bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/):

```javascript
export default {
 async fetch(request, env, ctx) {
   const aiResp = await env.AI.run(
       '@cf/mistral/mistral-7b-instruct-v0.1',
       { prompt: 'What should I eat for lunch?' },
       { gateway: { id: 'gateway_id', metadata: { "team": "AI", "user": 12345, "test": true} } }
   );


   return new Response(aiResp);
 },
};
``` ---
title: Fallbacks · Cloudflare AI Gateway docs
description: Specify model or provider fallbacks with your Universal endpoint to
  handle request failures and ensure reliability.
lastUpdated: 2025-05-09T15:42:57.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/
  md: https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/index.md
---

Specify model or provider fallbacks with your [Universal endpoint](https://developers.cloudflare.com/ai-gateway/universal/) to handle request failures and ensure reliability.

Cloudflare can trigger your fallback provider in response to [request errors](#request-failures) or [predetermined request timeouts](https://developers.cloudflare.com/ai-gateway/configuration/request-handling#request-timeouts). The [response header `cf-aig-step`](#response-headercf-aig-step) indicates which step successfully processed the request.

## Request failures

By default, Cloudflare triggers your fallback if a model request returns an error.

### Example

In the following example, a request first goes to the [Workers AI](https://developers.cloudflare.com/workers-ai/) Inference API. If the request fails, it falls back to OpenAI. The response header `cf-aig-step` indicates which provider successfully processed the request.

1. Sends a request to Workers AI Inference API.
2. If that request fails, proceeds to OpenAI.

```mermaid
graph TD
    A[AI Gateway] --> B[Request to Workers AI Inference API]
    B -->|Success| C[Return Response]
    B -->|Failure| D[Request to OpenAI API]
    D --> E[Return Response]
```



You can add as many fallbacks as you need, just by adding another object in the array.

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id} \
  --header 'Content-Type: application/json' \
  --data '[
  {
    "provider": "workers-ai",
    "endpoint": "@cf/meta/llama-3.1-8b-instruct",
    "headers": {
      "Authorization": "Bearer {cloudflare_token}",
      "Content-Type": "application/json"
    },
    "query": {
      "messages": [
        {
          "role": "system",
          "content": "You are a friendly assistant"
        },
        {
          "role": "user",
          "content": "What is Cloudflare?"
        }
      ]
    }
  },
  {
    "provider": "openai",
    "endpoint": "chat/completions",
    "headers": {
      "Authorization": "Bearer {open_ai_token}",
      "Content-Type": "application/json"
    },
    "query": {
      "model": "gpt-4o-mini",
      "stream": true,
      "messages": [
        {
          "role": "user",
          "content": "What is Cloudflare?"
        }
      ]
    }
  }
]'
```

## Response header(cf-aig-step)

When using the [Universal endpoint](https://developers.cloudflare.com/ai-gateway/universal/) with fallbacks, the response header `cf-aig-step` indicates which model successfully processed the request by returning the step number. This header provides visibility into whether a fallback was triggered and which model ultimately processed the response.

* `cf-aig-step:0` – The first (primary) model was used successfully.
* `cf-aig-step:1` – The request fell back to the second model.
* `cf-aig-step:2` – The request fell back to the third model.
* Subsequent steps – Each fallback increments the step number by 1. ---
title: Manage gateways · Cloudflare AI Gateway docs
description: You have several different options for managing an AI Gateway.
lastUpdated: 2025-07-14T15:52:57.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/configuration/manage-gateway/
  md: https://developers.cloudflare.com/ai-gateway/configuration/manage-gateway/index.md
---

You have several different options for managing an AI Gateway.

## Create gateway

* Dashboard

  To set up an AI Gateway in the dashboard:

  1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
  2. Go to **AI** > **AI Gateway**.
  3. Select **Create Gateway**.
  4. Enter your **Gateway name**. Note: Gateway name has a 64 character limit.
  5. Select **Create**.

* API

  To set up an AI Gateway using the API:

  1. [Create an API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) with the following permissions:

     * `AI Gateway - Read`
     * `AI Gateway - Edit`

  2. Get your [Account ID](https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/).

  3. Using that API token and Account ID, send a [`POST` request](https://developers.cloudflare.com/api/resources/ai_gateway/methods/create/) to the Cloudflare API.

## Edit gateway

* Dashboard

  To edit an AI Gateway in the dashboard:

  1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
  2. Go to **AI** > **AI Gateway**.
  3. Select your gateway.
  4. Go to **Settings** and update as needed.

* API

  To edit an AI Gateway, send a [`PUT` request](https://developers.cloudflare.com/api/resources/ai_gateway/methods/update/) to the Cloudflare API.

Note

For more details about what settings are available for editing, refer to [Configuration](https://developers.cloudflare.com/ai-gateway/configuration/).

## Delete gateway

Deleting your gateway is permanent and can not be undone.

* Dashboard

  To delete an AI Gateway in the dashboard:

  1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
  2. Go to **AI** > **AI Gateway**.
  3. Select your gateway from the list of available options.
  4. Go to **Settings**.
  5. For **Delete Gateway**, select **Delete** (and confirm your deletion).

* API

  To delete an AI Gateway, send a [`DELETE` request](https://developers.cloudflare.com/api/resources/ai_gateway/methods/delete/) to the Cloudflare API. ---
title: Rate limiting · Cloudflare AI Gateway docs
description: Rate limiting controls the traffic that reaches your application,
  which prevents expensive bills and suspicious activity.
lastUpdated: 2025-06-19T13:27:22.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/configuration/rate-limiting/
  md: https://developers.cloudflare.com/ai-gateway/configuration/rate-limiting/index.md
---

Rate limiting controls the traffic that reaches your application, which prevents expensive bills and suspicious activity.

## Parameters

You can define rate limits as the number of requests that get sent in a specific time frame. For example, you can limit your application to 100 requests per 60 seconds.

You can also select if you would like a **fixed** or **sliding** rate limiting technique. With rate limiting, we allow a certain number of requests within a window of time. For example, if it is a fixed rate, the window is based on time, so there would be no more than `x` requests in a ten minute window. If it is a sliding rate, there would be no more than `x` requests in the last ten minutes.

To illustrate this, let us say you had a limit of ten requests per ten minutes, starting at 12:00. So the fixed window is 12:00-12:10, 12:10-12:20, and so on. If you sent ten requests at 12:09 and ten requests at 12:11, all 20 requests would be successful in a fixed window strategy. However, they would fail in a sliding window strategy since there were more than ten requests in the last ten minutes.

## Handling rate limits

When your requests exceed the allowed rate, you will encounter rate limiting. This means the server will respond with a `429 Too Many Requests` status code and your request will not be processed.

## Default configuration

* Dashboard

  To set the default rate limiting configuration in the dashboard:

  1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
  2. Go to **AI** > **AI Gateway**.
  3. Go to **Settings**.
  4. Enable **Rate-limiting**.
  5. Adjust the rate, time period, and rate limiting method as desired.

* API

  To set the default rate limiting configuration using the API:

  1. [Create an API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) with the following permissions:

  * `AI Gateway - Read`
  * `AI Gateway - Edit`

  1. Get your [Account ID](https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/).
  2. Using that API token and Account ID, send a [`POST` request](https://developers.cloudflare.com/api/resources/ai_gateway/methods/create/) to create a new Gateway and include a value for the `rate_limiting_interval`, `rate_limiting_limit`, and `rate_limiting_technique`.

This rate limiting behavior will be uniformly applied to all requests for that gateway. ---
title: Request handling · Cloudflare AI Gateway docs
description: Your AI gateway supports different strategies for handling requests
  to providers, which allows you to manage AI interactions effectively and
  ensure your applications remain responsive and reliable.
lastUpdated: 2025-05-09T15:42:57.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/configuration/request-handling/
  md: https://developers.cloudflare.com/ai-gateway/configuration/request-handling/index.md
---

Your AI gateway supports different strategies for handling requests to providers, which allows you to manage AI interactions effectively and ensure your applications remain responsive and reliable.

## Request timeouts

A request timeout allows you to trigger fallbacks or a retry if a provider takes too long to respond.

These timeouts help:

* Improve user experience, by preventing users from waiting too long for a response
* Proactively handle errors, by detecting unresponsive providers and triggering a fallback option

Request timeouts can be set on a Universal Endpoint or directly on a request to any provider.

### Definitions

A timeout is set in milliseconds. Additionally, the timeout is based on when the first part of the response comes back. As long as the first part of the response returns within the specified timeframe - such as when streaming a response - your gateway will wait for the response.

### Configuration

#### Universal Endpoint

If set on a [Universal Endpoint](https://developers.cloudflare.com/ai-gateway/universal/), a request timeout specifies the timeout duration for requests and triggers a fallback.

For a Universal Endpoint, configure the timeout value by setting a `requestTimeout` property within the provider-specific `config` object. Each provider can have a different `requestTimeout` value for granular customization.

```bash
curl 'https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}' \
  --header 'Content-Type: application/json' \
  --data '[
    {
        "provider": "workers-ai",
        "endpoint": "@cf/meta/llama-3.1-8b-instruct",
        "headers": {
            "Authorization": "Bearer {cloudflare_token}",
            "Content-Type": "application/json"
        },
        "config": {
            "requestTimeout": 1000
        },
        "query": {
34 collapsed lines
            "messages": [
                {
                    "role": "system",
                    "content": "You are a friendly assistant"
                },
                {
                    "role": "user",
                    "content": "What is Cloudflare?"
                }
            ]
        }
    },
    {
        "provider": "workers-ai",
        "endpoint": "@cf/meta/llama-3.1-8b-instruct-fast",
        "headers": {
            "Authorization": "Bearer {cloudflare_token}",
            "Content-Type": "application/json"
        },
        "query": {
            "messages": [
                {
                    "role": "system",
                    "content": "You are a friendly assistant"
                },
                {
                    "role": "user",
                    "content": "What is Cloudflare?"
                }
            ]
        },
        "config": {
            "requestTimeout": 3000
        },
    }
]'
```

#### Direct provider

If set on a [provider](https://developers.cloudflare.com/ai-gateway/providers/) request, request timeout specifies the timeout duration for a request and - if exceeded - returns an error.

For a provider-specific endpoint, configure the timeout value by adding a `cf-aig-request-timeout` header.

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/@cf/meta/llama-3.1-8b-instruct \
 --header 'Authorization: Bearer {cf_api_token}' \
 --header 'Content-Type: application/json' \
 --header 'cf-aig-request-timeout: 5000'
 --data '{"prompt": "What is Cloudflare?"}'
```

***

## Request retries

AI Gateway also supports automatic retries for failed requests, with a maximum of five retry attempts.

This feature improves your application's resiliency, ensuring you can recover from temporary issues without manual intervention.

Request timeouts can be set on a Universal Endpoint or directly on a request to any provider.

### Definitions

With request retries, you can adjust a combination of three properties:

* Number of attempts (maximum of 5 tries)
* How long before retrying (in milliseconds, maximum of 5 seconds)
* Backoff method (constant, linear, or exponential)

On the final retry attempt, your gateway will wait until the request completes, regardless of how long it takes.

### Configuration

#### Universal endpoint

If set on a [Universal Endpoint](https://developers.cloudflare.com/ai-gateway/universal/), a request retry will automatically retry failed requests up to five times before triggering any configured fallbacks.

For a Universal Endpoint, configure the retry settings with the following properties in the provider-specific `config`:

```json
config:{
  maxAttempts?: number;
  retryDelay?: number;
  backoff?: "constant" | "linear" | "exponential";
}
```

As with the [request timeout](https://developers.cloudflare.com/ai-gateway/configuration/request-handling/#universal-endpoint), each provider can have a different retry settings for granular customization.

```bash
curl 'https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}' \
  --header 'Content-Type: application/json' \
  --data '[
    {
        "provider": "workers-ai",
        "endpoint": "@cf/meta/llama-3.1-8b-instruct",
        "headers": {
            "Authorization": "Bearer {cloudflare_token}",
            "Content-Type": "application/json"
        },
        "config": {
            "maxAttempts": 2,
            "retryDelay": 1000,
            "backoff": "constant"
        },
39 collapsed lines
        "query": {
            "messages": [
                {
                    "role": "system",
                    "content": "You are a friendly assistant"
                },
                {
                    "role": "user",
                    "content": "What is Cloudflare?"
                }
            ]
        }
    },
    {
        "provider": "workers-ai",
        "endpoint": "@cf/meta/llama-3.1-8b-instruct-fast",
        "headers": {
            "Authorization": "Bearer {cloudflare_token}",
            "Content-Type": "application/json"
        },
        "query": {
            "messages": [
                {
                    "role": "system",
                    "content": "You are a friendly assistant"
                },
                {
                    "role": "user",
                    "content": "What is Cloudflare?"
                }
            ]
        },
        "config": {
            "maxAttempts": 4,
            "retryDelay": 1000,
            "backoff": "exponential"
        },
    }
]'
```

#### Direct provider

If set on a [provider](https://developers.cloudflare.com/ai-gateway/universal/) request, a request retry will automatically retry failed requests up to five times. On the final retry attempt, your gateway will wait until the request completes, regardless of how long it takes.

For a provider-specific endpoint, configure the retry settings by adding different header values:

* `cf-aig-max-attempts` (number)
* `cf-aig-retry-delay` (number)
* `cf-aig-backoff` ("constant" | "linear" | "exponential) ---
title: Add Human Feedback using Dashboard · Cloudflare AI Gateway docs
description: Human feedback is a valuable metric to assess the performance of
  your AI models. By incorporating human feedback, you can gain deeper insights
  into how the model's responses are perceived and how well it performs from a
  user-centric perspective. This feedback can then be used in evaluations to
  calculate performance metrics, driving optimization and ultimately enhancing
  the reliability, accuracy, and efficiency of your AI application.
lastUpdated: 2024-10-29T21:29:14.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/evaluations/add-human-feedback/
  md: https://developers.cloudflare.com/ai-gateway/evaluations/add-human-feedback/index.md
---

Human feedback is a valuable metric to assess the performance of your AI models. By incorporating human feedback, you can gain deeper insights into how the model's responses are perceived and how well it performs from a user-centric perspective. This feedback can then be used in evaluations to calculate performance metrics, driving optimization and ultimately enhancing the reliability, accuracy, and efficiency of your AI application.

Human feedback measures the performance of your dataset based on direct human input. The metric is calculated as the percentage of positive feedback (thumbs up) given on logs, which are annotated in the Logs tab of the Cloudflare dashboard. This feedback helps refine model performance by considering real-world evaluations of its output.

This tutorial will guide you through the process of adding human feedback to your evaluations in AI Gateway using the [Cloudflare dashboard](https://dash.cloudflare.com/).

On the next guide, you can [learn how to add human feedback via the API](https://developers.cloudflare.com/ai-gateway/evaluations/add-human-feedback-api/).

## 1. Log in to the dashboard

1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
2. Go to **AI** > **AI Gateway**.

## 2. Access the Logs tab

1. Go to **Logs**.

2. The Logs tab displays all logs associated with your datasets. These logs show key information, including:

   * Timestamp: When the interaction occurred.
   * Status: Whether the request was successful, cached, or failed.
   * Model: The model used in the request.
   * Tokens: The number of tokens consumed by the response.
   * Cost: The cost based on token usage.
   * Duration: The time taken to complete the response.
   * Feedback: Where you can provide human feedback on each log.

## 3. Provide human feedback

1. Click on the log entry you want to review. This expands the log, allowing you to see more detailed information.

2. In the expanded log, you can view additional details such as:

   * The user prompt.
   * The model response.
   * HTTP response details.
   * Endpoint information.

3. You will see two icons:

   * Thumbs up: Indicates positive feedback.
   * Thumbs down: Indicates negative feedback.

4. Click either the thumbs up or thumbs down icon based on how you rate the model response for that particular log entry.

## 4. Evaluate human feedback

After providing feedback on your logs, it becomes a part of the evaluation process.

When you run an evaluation (as outlined in the [Set Up Evaluations](https://developers.cloudflare.com/ai-gateway/evaluations/set-up-evaluations/) guide), the human feedback metric will be calculated based on the percentage of logs that received thumbs-up feedback.

Note

You need to select human feedback as an evaluator to receive its metrics.

## 5. Review results

After running the evaluation, review the results on the Evaluations tab. You will be able to see the performance of the model based on cost, speed, and now human feedback, represented as the percentage of positive feedback (thumbs up).

The human feedback score is displayed as a percentage, showing the distribution of positively rated responses from the database.

For more information on running evaluations, refer to the documentation [Set Up Evaluations](https://developers.cloudflare.com/ai-gateway/evaluations/set-up-evaluations/). ---
title: Add Human Feedback using API · Cloudflare AI Gateway docs
description: This guide will walk you through the steps of adding human feedback
  to an AI Gateway request using the Cloudflare API. You will learn how to
  retrieve the relevant request logs, and submit feedback using the API.
lastUpdated: 2025-06-27T16:14:01.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/evaluations/add-human-feedback-api/
  md: https://developers.cloudflare.com/ai-gateway/evaluations/add-human-feedback-api/index.md
---

This guide will walk you through the steps of adding human feedback to an AI Gateway request using the Cloudflare API. You will learn how to retrieve the relevant request logs, and submit feedback using the API.

If you prefer to add human feedback via the dashboard, refer to [Add Human Feedback](https://developers.cloudflare.com/ai-gateway/evaluations/add-human-feedback/).

## 1. Create an API Token

1. [Create an API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) with the following permissions:

* `AI Gateway - Read`
* `AI Gateway - Edit`

1. Get your [Account ID](https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/).
2. Using that API token and Account ID, send a [`POST` request](https://developers.cloudflare.com/api/resources/ai_gateway/methods/create/) to the Cloudflare API.

## 2. Retrieve the `cf-aig-log-id`

The `cf-aig-log-id` is a unique identifier for the specific log entry to which you want to add feedback. Below are two methods to obtain this identifier.

### Method 1: Locate the `cf-aig-log-id` in the request response

This method allows you to directly find the `cf-aig-log-id` within the header of the response returned by the AI Gateway. This is the most straightforward approach if you have access to the original API response.

The steps below outline how to do this.

1. **Make a Request to the AI Gateway**: This could be a request your application sends to the AI Gateway. Once the request is made, the response will contain various pieces of metadata.
2. **Check the Response Headers**: The response will include a header named `cf-aig-log-id`. This is the identifier you will need to submit feedback.

In the example below, the `cf-aig-log-id` is `01JADMCQQQBWH3NXZ5GCRN98DP`.

```json
{
  "status": "success",
  "headers": {
    "cf-aig-log-id": "01JADMCQQQBWH3NXZ5GCRN98DP"
  },
  "data": {
    "response": "Sample response data"
  }
}
```

### Method 2: Retrieve the `cf-aig-log-id` via API (GET request)

If you do not have the `cf-aig-log-id` in the response body or you need to access it after the fact, you are able to retrieve it by querying the logs using the [Cloudflare API](https://developers.cloudflare.com/api/resources/ai_gateway/subresources/logs/methods/list/).

Send a `GET` request to get a list of logs and then find a specific ID

Required API token permissions

At least one of the following [token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/) is required:

* `AI Gateway Write`
* `AI Gateway Read`

```bash
curl "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/ai-gateway/gateways/$GATEWAY_ID/logs" \
  --request GET \
  --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

```json
{
  "result": [
    {
      "id": "01JADMCQQQBWH3NXZ5GCRN98DP",
      "cached": true,
      "created_at": "2019-08-24T14:15:22Z",
      "custom_cost": true,
      "duration": 0,
      "id": "string",
      "metadata": "string",
      "model": "string",
      "model_type": "string",
      "path": "string",
      "provider": "string",
      "request_content_type": "string",
      "request_type": "string",
      "response_content_type": "string",
      "status_code": 0,
      "step": 0,
      "success": true,
      "tokens_in": 0,
      "tokens_out": 0
    }
  ]
}
```

### Method 3: Retrieve the `cf-aig-log-id` via a binding

You can also retrieve the `cf-aig-log-id` using a binding, which streamlines the process. Here's how to retrieve the log ID directly:

```js
const resp = await env.AI.run(
  "@cf/meta/llama-3-8b-instruct",
  {
    prompt: "tell me a joke",
  },
  {
    gateway: {
      id: "my_gateway_id",
    },
  },
);


const myLogId = env.AI.aiGatewayLogId;
```

Note:

The `aiGatewayLogId` property, will only hold the last inference call log id.

## 3. Submit feedback via PATCH request

Once you have both the API token and the `cf-aig-log-id`, you can send a PATCH request to submit feedback.

Required API token permissions

At least one of the following [token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/) is required:

* `AI Gateway Write`

```bash
curl "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/ai-gateway/gateways/$GATEWAY_ID/logs/$ID" \
  --request PATCH \
  --header "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  --json '{
    "feedback": 1
  }'
```

If you had negative feedback, adjust the body of the request to be `-1`.

```json
{
  "feedback": -1
}
```

## 4. Verify the feedback submission

You can verify the feedback submission in two ways:

* **Through the [Cloudflare dashboard ](https://dash.cloudflare.com)**: check the updated feedback on the AI Gateway interface.
* **Through the API**: Send another GET request to retrieve the updated log entry and confirm the feedback has been recorded. ---
title: Add human feedback using Worker Bindings · Cloudflare AI Gateway docs
description: This guide explains how to provide human feedback for AI Gateway
  evaluations using Worker bindings.
lastUpdated: 2025-02-12T17:08:49.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/evaluations/add-human-feedback-bindings/
  md: https://developers.cloudflare.com/ai-gateway/evaluations/add-human-feedback-bindings/index.md
---

This guide explains how to provide human feedback for AI Gateway evaluations using Worker bindings.

## 1. Run an AI Evaluation

Start by sending a prompt to the AI model through your AI Gateway.

```javascript
const resp = await env.AI.run(
  "@cf/meta/llama-3.1-8b-instruct",
  {
    prompt: "tell me a joke",
  },
  {
    gateway: {
      id: "my-gateway",
    },
  },
);


const myLogId = env.AI.aiGatewayLogId;
```

Let the user interact with or evaluate the AI response. This interaction will inform the feedback you send back to the AI Gateway.

## 2. Send Human Feedback

Use the [`patchLog()`](https://developers.cloudflare.com/ai-gateway/integrations/worker-binding-methods/#31-patchlog-send-feedback) method to provide feedback for the AI evaluation.

```javascript
await env.AI.gateway("my-gateway").patchLog(myLogId, {
  feedback: 1, // all fields are optional; set values that fit your use case
  score: 100,
  metadata: {
    user: "123", // Optional metadata to provide additional context
  },
});
```

## Feedback parameters explanation

* `feedback`: is either `-1` for negative or `1` to positive, `0` is considered not evaluated.
* `score`: A number between 0 and 100.
* `metadata`: An object containing additional contextual information.

### patchLog: Send Feedback

The `patchLog` method allows you to send feedback, score, and metadata for a specific log ID. All object properties are optional, so you can include any combination of the parameters:

```javascript
gateway.patchLog("my-log-id", {
  feedback: 1,
  score: 100,
  metadata: {
    user: "123",
  },
});
```

Returns: `Promise ` (Make sure to `await` the request.) ---
title: Set up Evaluations · Cloudflare AI Gateway docs
description: This guide walks you through the process of setting up an
  evaluation in AI Gateway. These steps are done in the Cloudflare dashboard.
lastUpdated: 2025-01-29T21:21:01.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/evaluations/set-up-evaluations/
  md: https://developers.cloudflare.com/ai-gateway/evaluations/set-up-evaluations/index.md
---

This guide walks you through the process of setting up an evaluation in AI Gateway. These steps are done in the [Cloudflare dashboard](https://dash.cloudflare.com/).

## 1. Select or create a dataset

Datasets are collections of logs stored for analysis that can be used in an evaluation. You can create datasets by applying filters in the Logs tab. Datasets will update automatically based on the set filters.

### Set up a dataset from the Logs tab

1. Apply filters to narrow down your logs. Filter options include provider, number of tokens, request status, and more.
2. Select **Create Dataset** to store the filtered logs for future analysis.

You can manage datasets by selecting **Manage datasets** from the Logs tab.

Note

Please keep in mind that datasets currently use `AND` joins, so there can only be one item per filter (for example, one model or one provider). Future updates will allow more flexibility in dataset creation.

### List of available filters

| Filter category | Filter options | Filter by description |
| - | - | - |
| Status | error, status | error type or status. |
| Cache | cached, not cached | based on whether they were cached or not. |
| Provider | specific providers | the selected AI provider. |
| AI Models | specific models | the selected AI model. |
| Cost | less than, greater than | cost, specifying a threshold. |
| Request type | Universal, Workers AI Binding, WebSockets | the type of request. |
| Tokens | Total tokens, Tokens In, Tokens Out | token count (less than or greater than). |
| Duration | less than, greater than | request duration. |
| Feedback | equals, does not equal (thumbs up, thumbs down, no feedback) | feedback type. |
| Metadata Key | equals, does not equal | specific metadata keys. |
| Metadata Value | equals, does not equal | specific metadata values. |
| Log ID | equals, does not equal | a specific Log ID. |
| Event ID | equals, does not equal | a specific Event ID. |

## 2. Select evaluators

After creating a dataset, choose the evaluation parameters:

* Cost: Calculates the average cost of inference requests within the dataset (only for requests with [cost data](https://developers.cloudflare.com/ai-gateway/observability/costs/)).
* Speed: Calculates the average duration of inference requests within the dataset.
* Performance:
  * Human feedback: measures performance based on human feedback, calculated by the % of thumbs up on the logs, annotated from the Logs tab.

Note

Additional evaluators will be introduced in future updates to expand performance analysis capabilities.

## 3. Name, review, and run the evaluation

1. Create a unique name for your evaluation to reference it in the dashboard.
2. Review the selected dataset and evaluators.
3. Select **Run** to start the process.

## 4. Review and analyze results

Evaluation results will appear in the Evaluations tab. The results show the status of the evaluation (for example, in progress, completed, or error). Metrics for the selected evaluators will be displayed, excluding any logs with missing fields. You will also see the number of logs used to calculate each metric.

While datasets automatically update based on filters, evaluations do not. You will have to create a new evaluation if you want to evaluate new logs.

Use these insights to optimize based on your application's priorities. Based on the results, you may choose to:

* Change the model or [provider](https://developers.cloudflare.com/ai-gateway/providers/)
* Adjust your prompts
* Explore further optimizations, such as setting up [Retrieval Augmented Generation (RAG)](https://developers.cloudflare.com/reference-architecture/diagrams/ai/ai-rag/) ---
title: Set up Guardrails · Cloudflare AI Gateway docs
description: Add Guardrails to any gateway to start evaluating and potentially
  modifying responses.
lastUpdated: 2025-05-15T18:17:13.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/guardrails/set-up-guardrail/
  md: https://developers.cloudflare.com/ai-gateway/guardrails/set-up-guardrail/index.md
---

Add Guardrails to any gateway to start evaluating and potentially modifying responses.

1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.

2. Go to **AI** > **AI Gateway**.

3. Select a gateway.

4. Go to **Guardrails**.

5. Switch the toggle to **On**.

6. To customize categories, select **Change** > **Configure specific categories**.

7. Update your choices for how Guardrails works on specific prompts or responses (**Flag**, **Ignore**, **Block**).

   * For **Prompts**: Guardrails will evaluate and transform incoming prompts based on your security policies.
   * For **Responses**: Guardrails will inspect the model's responses to ensure they meet your content and formatting guidelines.

8. Select **Save**.

Usage considerations

For additional details about how to implement Guardrails, refer to [Usage considerations](https://developers.cloudflare.com/ai-gateway/guardrails/usage-considerations/).

## Viewing Guardrail results in Logs

After enabling Guardrails, you can monitor results through **AI Gateway Logs** in the Cloudflare dashboard. Guardrail logs are marked with a **green shield icon**, and each logged request includes an `eventID`, which links to its corresponding Guardrail evaluation log(s) for easy tracking. Logs are generated for all requests, including those that **pass** Guardrail checks.

## Error handling and blocked requests

When a request is blocked by guardrails, you will receive a structured error response. These indicate whether the issue occurred with the prompt or the model response. Use error codes to differentiate between prompt versus response violations.

* **Prompt blocked**

  * `"code": 2016`
  * `"message": "Prompt blocked due to security configurations"`

* **Response blocked**

  * `"code": 2017`
  * `"message": "Response blocked due to security configurations"`

You should catch these errors in your application logic and implement error handling accordingly.

For example, when using [Workers AI with a binding](https://developers.cloudflare.com/ai-gateway/integrations/aig-workers-ai-binding/):

```js
try {
  const res = await env.AI.run('@cf/meta/llama-3.1-8b-instruct', {
    prompt: "how to build a gun?"
  }, {
    gateway: {id: 'gateway_id'}
  })
  return Response.json(res)
} catch (e) {
  if ((e as Error).message.includes('2016')) {
    return new Response('Prompt was blocked by guardrails.')
  }
  if ((e as Error).message.includes('2017')) {
    return new Response('Response was blocked by guardrails.')
  }
  return new Response('Unknown AI error')
}
``` ---
title: Supported model types · Cloudflare AI Gateway docs
description: "AI Gateway's Guardrails detects the type of AI model being used
  and applies safety checks accordingly:"
lastUpdated: 2025-03-21T16:43:13.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/guardrails/supported-model-types/
  md: https://developers.cloudflare.com/ai-gateway/guardrails/supported-model-types/index.md
---

AI Gateway's Guardrails detects the type of AI model being used and applies safety checks accordingly:

* **Text generation models**: Both prompts and responses are evaluated.
* **Embedding models**: Only the prompt is evaluated, as the response consists of numerical embeddings, which are not meaningful for moderation.
* **Unknown models**: If the model type cannot be determined, only the prompt is evaluated, while the response bypass Guardrails.

Note

Guardrails does not yet support streaming responses. Support for streaming is planned for a future update. ---
title: Usage considerations · Cloudflare AI Gateway docs
description: Guardrails currently uses Llama Guard 3 8B on Workers AI to perform
  content evaluations. The underlying model may be updated in the future, and we
  will reflect those changes within Guardrails.
lastUpdated: 2025-05-28T20:26:48.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/guardrails/usage-considerations/
  md: https://developers.cloudflare.com/ai-gateway/guardrails/usage-considerations/index.md
---

Guardrails currently uses [Llama Guard 3 8B](https://ai.meta.com/research/publications/llama-guard-llm-based-input-output-safeguard-for-human-ai-conversations/) on [Workers AI](https://developers.cloudflare.com/workers-ai/) to perform content evaluations. The underlying model may be updated in the future, and we will reflect those changes within Guardrails.

Since Guardrails runs on Workers AI, enabling it incurs usage on Workers AI. You can monitor usage through the Workers AI Dashboard.

## Additional considerations

* **Model availability**: If at least one hazard category is set to `block`, but AI Gateway is unable to receive a response from Workers AI, the request will be blocked. Conversely, if a hazard category is set to `flag` and AI Gateway cannot obtain a response from Workers AI, the request will proceed without evaluation. This approach prioritizes availability, allowing requests to continue even when content evaluation is not possible.
* **Latency impact**: Enabling Guardrails adds some latency. Enabling Guardrails introduces additional latency to requests. Typically, evaluations using Llama Guard 3 8B on Workers AI add approximately 500 milliseconds per request. However, larger requests may experience increased latency, though this increase is not linear. Consider this when balancing safety and performance.
* **Handling long content**: When evaluating long prompts or responses, Guardrails automatically segments the content into smaller chunks, processing each through separate Guardrail requests. This approach ensures comprehensive moderation but may result in increased latency for longer inputs.
* **Supported languages**: Llama Guard 3.3 8B supports content safety classification in the following languages: English, French, German, Hindi, Italian, Portuguese, Spanish, and Thai.
* **Streaming support**: Streaming is not supported when using Guardrails.

Note

Llama Guard is provided as-is without any representations, warranties, or guarantees. Any rules or examples contained in blogs, developer docs, or other reference materials are provided for informational purposes only. You acknowledge and understand that you are responsible for the results and outcomes of your use of AI Gateway. ---
title: Agents · Cloudflare AI Gateway docs
description: Build AI-powered Agents on Cloudflare
lastUpdated: 2025-01-29T20:30:56.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/integrations/agents/
  md: https://developers.cloudflare.com/ai-gateway/integrations/agents/index.md
--- ---
title: Workers AI · Cloudflare AI Gateway docs
description: This guide will walk you through setting up and deploying a Workers
  AI project. You will use Workers, an AI Gateway binding, and a large language
  model (LLM), to deploy your first AI-powered application on the Cloudflare
  global network.
lastUpdated: 2025-03-19T09:17:37.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/integrations/aig-workers-ai-binding/
  md: https://developers.cloudflare.com/ai-gateway/integrations/aig-workers-ai-binding/index.md
---

This guide will walk you through setting up and deploying a Workers AI project. You will use [Workers](https://developers.cloudflare.com/workers/), an AI Gateway binding, and a large language model (LLM), to deploy your first AI-powered application on the Cloudflare global network.

## Prerequisites

1. Sign up for a [Cloudflare account](https://dash.cloudflare.com/sign-up/workers-and-pages).
2. Install [`Node.js`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Node.js version manager

Use a Node version manager like [Volta](https://volta.sh/) or [nvm](https://github.com/nvm-sh/nvm) to avoid permission issues and change Node.js versions. [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/), discussed later in this guide, requires a Node version of `16.17.0` or later.

## 1. Create a Worker Project

You will create a new Worker project using the create-Cloudflare CLI (C3). C3 is a command-line tool designed to help you set up and deploy new applications to Cloudflare.

Create a new project named `hello-ai` by running:

* npm

  ```sh
  npm create cloudflare@latest -- hello-ai
  ```

* yarn

  ```sh
  yarn create cloudflare hello-ai
  ```

* pnpm

  ```sh
  pnpm create cloudflare@latest hello-ai
  ```

Running `npm create cloudflare@latest` will prompt you to install the create-cloudflare package and lead you through setup. C3 will also install [Wrangler](https://developers.cloudflare.com/workers/wrangler/), the Cloudflare Developer Platform CLI.

For setup, select the following options:

* For *What would you like to start with?*, choose `Hello World example`.
* For *Which template would you like to use?*, choose `Worker only`.
* For *Which language do you want to use?*, choose `TypeScript`.
* For *Do you want to use git for version control?*, choose `Yes`.
* For *Do you want to deploy your application?*, choose `No` (we will be making some changes before deploying).

This will create a new `hello-ai` directory. Your new `hello-ai` directory will include:

* A "Hello World" Worker at `src/index.ts`.
* A [Wrangler configuration file](https://developers.cloudflare.com/workers/wrangler/configuration/)

Go to your application directory:

```bash
cd hello-ai
```

## 2. Connect your Worker to Workers AI

You must create an AI binding for your Worker to connect to Workers AI. Bindings allow your Workers to interact with resources, like Workers AI, on the Cloudflare Developer Platform.

To bind Workers AI to your Worker, add the following to the end of your [Wrangler configuration file](https://developers.cloudflare.com/workers/wrangler/configuration/):

* wrangler.jsonc

  ```jsonc
  {
    "ai": {
      "binding": "AI"
    }
  }
  ```

* wrangler.toml

  ```toml
  [ai]
  binding = "AI"
  ```

Your binding is [available in your Worker code](https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/#bindings-in-es-modules-format) on [`env.AI`](https://developers.cloudflare.com/workers/runtime-apis/handlers/fetch/).

You will need to have your `gateway id` for the next step. You can learn [how to create an AI Gateway in this tutorial](https://developers.cloudflare.com/ai-gateway/get-started/).

## 3. Run an inference task containing AI Gateway in your Worker

You are now ready to run an inference task in your Worker. In this case, you will use an LLM, [`llama-3.1-8b-instruct-fast`](https://developers.cloudflare.com/workers-ai/models/llama-3.1-8b-instruct-fast/), to answer a question. Your gateway ID is found on the dashboard.

Update the `index.ts` file in your `hello-ai` application directory with the following code:

```typescript
export interface Env {
  // If you set another name in the [Wrangler configuration file](/workers/wrangler/configuration/) as the value for 'binding',
  // replace "AI" with the variable name you defined.
  AI: Ai;
}


export default {
  async fetch(request, env): Promise {
    // Specify the gateway label and other options here
    const response = await env.AI.run(
      "@cf/meta/llama-3.1-8b-instruct-fast",
      {
        prompt: "What is the origin of the phrase Hello, World",
      },
      {
        gateway: {
          id: "GATEWAYID", // Use your gateway label here
          skipCache: true, // Optional: Skip cache if needed
        },
      },
    );


    // Return the AI response as a JSON object
    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" },
    });
  },
} satisfies ExportedHandler ;
```

Up to this point, you have created an AI binding for your Worker and configured your Worker to be able to execute the Llama 3.1 model. You can now test your project locally before you deploy globally.

## 4. Develop locally with Wrangler

While in your project directory, test Workers AI locally by running [`wrangler dev`](https://developers.cloudflare.com/workers/wrangler/commands/#dev):

```bash
npx wrangler dev
```

Workers AI local development usage charges

Using Workers AI always accesses your Cloudflare account in order to run AI models and will incur usage charges even in local development.

You will be prompted to log in after you run `wrangler dev`. When you run `npx wrangler dev`, Wrangler will give you a URL (most likely `localhost:8787`) to review your Worker. After you go to the URL Wrangler provides, you will see a message that resembles the following example:

````json
{
  "response": "A fascinating question!\n\nThe phrase \"Hello, World!\" originates from a simple computer program written in the early days of programming. It is often attributed to Brian Kernighan, a Canadian computer scientist and a pioneer in the field of computer programming.\n\nIn the early 1970s, Kernighan, along with his colleague Dennis Ritchie, were working on the C programming language. They wanted to create a simple program that would output a message to the screen to demonstrate the basic structure of a program. They chose the phrase \"Hello, World!\" because it was a simple and recognizable message that would illustrate how a program could print text to the screen.\n\nThe exact code was written in the 5th edition of Kernighan and Ritchie's book \"The C Programming Language,\" published in 1988. The code, literally known as \"Hello, World!\" is as follows:\n\n```
main()
{
  printf(\"Hello, World!\");
}
```\n\nThis code is still often used as a starting point for learning programming languages, as it demonstrates how to output a simple message to the console.\n\nThe phrase \"Hello, World!\" has since become a catch-all phrase to indicate the start of a new program or a small test program, and is widely used in computer science and programming education.\n\nSincerely, I'm glad I could help clarify the origin of this iconic phrase for you!"
}
````

## 5. Deploy your AI Worker

Before deploying your AI Worker globally, log in with your Cloudflare account by running:

```bash
npx wrangler login
```

You will be directed to a web page asking you to log in to the Cloudflare dashboard. After you have logged in, you will be asked if Wrangler can make changes to your Cloudflare account. Scroll down and select **Allow** to continue.

Finally, deploy your Worker to make your project accessible on the Internet. To deploy your Worker, run:

```bash
npx wrangler deploy
```

Once deployed, your Worker will be available at a URL like:

```bash
https://hello-ai. .workers.dev
```

Your Worker will be deployed to your custom [`workers.dev`](https://developers.cloudflare.com/workers/configuration/routing/workers-dev/) subdomain. You can now visit the URL to run your AI Worker.

By completing this tutorial, you have created a Worker, connected it to Workers AI through an AI Gateway binding, and successfully ran an inference task using the Llama 3.1 model. ---
title: Vercel AI SDK · Cloudflare AI Gateway docs
description: The Vercel AI SDK is a TypeScript library for building AI
  applications. The SDK supports many different AI providers, tools for
  streaming completions, and more.
lastUpdated: 2025-04-28T10:11:39.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/integrations/vercel-ai-sdk/
  md: https://developers.cloudflare.com/ai-gateway/integrations/vercel-ai-sdk/index.md
---

The [Vercel AI SDK](https://sdk.vercel.ai/) is a TypeScript library for building AI applications. The SDK supports many different AI providers, tools for streaming completions, and more.

To use Cloudflare AI Gateway inside of the AI SDK, you can configure a custom "Gateway URL" for most supported providers. Below are a few examples of how it works.

## Examples

### OpenAI

If you're using the `openai` provider in AI SDK, you can create a customized setup with `createOpenAI`, passing your OpenAI-compatible AI Gateway URL:

```typescript
import { createOpenAI } from "@ai-sdk/openai";


const openai = createOpenAI({
  baseURL: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai`,
});
```

### Anthropic

If you're using the `anthropic` provider in AI SDK, you can create a customized setup with `createAnthropic`, passing your Anthropic-compatible AI Gateway URL:

```typescript
import { createAnthropic } from "@ai-sdk/anthropic";


const anthropic = createAnthropic({
  baseURL: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/anthropic`,
});
```

### Google AI Studio

If you're using the Google AI Studio provider in AI SDK, you need to append `/v1beta` to your Google AI Studio-compatible AI Gateway URL to avoid errors. The `/v1beta` path is required because Google AI Studio's API includes this in its endpoint structure, and the AI SDK sets the model name separately. This ensures compatibility with Google's API versioning.

```typescript
import { createGoogleGenerativeAI } from "@ai-sdk/google";


const google = createGoogleGenerativeAI({
  baseURL: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-ai-studio/v1beta`,
});
```

### Retrieve `log id` from AI SDK

You can access the AI Gateway `log id` from the response headers when invoking the SDK.

```typescript
const result = await generateText({
  model: anthropic("claude-3-sonnet-20240229"),
  messages: [],
});
console.log(result.response.headers["cf-aig-log-id"]);
```

### Other providers

For other providers that are not listed above, you can follow a similar pattern by creating a custom instance for any AI provider, and passing your AI Gateway URL. For help finding your provider-specific AI Gateway URL, refer to the [Supported providers page](https://developers.cloudflare.com/ai-gateway/providers). ---
title: AI Gateway Binding Methods · Cloudflare AI Gateway docs
description: This guide provides an overview of how to use the latest Cloudflare
  Workers AI Gateway binding methods. You will learn how to set up an AI Gateway
  binding, access new methods, and integrate them into your Workers.
lastUpdated: 2025-05-13T16:21:30.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/integrations/worker-binding-methods/
  md: https://developers.cloudflare.com/ai-gateway/integrations/worker-binding-methods/index.md
---

This guide provides an overview of how to use the latest Cloudflare Workers AI Gateway binding methods. You will learn how to set up an AI Gateway binding, access new methods, and integrate them into your Workers.

## 1. Add an AI Binding to your Worker

To connect your Worker to Workers AI, add the following to your [Wrangler configuration file](https://developers.cloudflare.com/workers/wrangler/configuration/):

* wrangler.jsonc

  ```jsonc
  {
    "ai": {
      "binding": "AI"
    }
  }
  ```

* wrangler.toml

  ```toml
  [ai]
  binding = "AI"
  ```

This configuration sets up the AI binding accessible in your Worker code as `env.AI`.

If you're using TypeScript, run [`wrangler types`](https://developers.cloudflare.com/workers/wrangler/commands/#types) whenever you modify your Wrangler configuration file. This generates types for the `env` object based on your bindings, as well as [runtime types](https://developers.cloudflare.com/workers/languages/typescript/).

## 2. Basic Usage with Workers AI + Gateway

To perform an inference task using Workers AI and an AI Gateway, you can use the following code:

```typescript
const resp = await env.AI.run(
  "@cf/meta/llama-3.1-8b-instruct",
  {
    prompt: "tell me a joke",
  },
  {
    gateway: {
      id: "my-gateway",
    },
  },
);
```

Additionally, you can access the latest request log ID with:

```typescript
const myLogId = env.AI.aiGatewayLogId;
```

## 3. Access the Gateway Binding

You can access your AI Gateway binding using the following code:

```typescript
const gateway = env.AI.gateway("my-gateway");
```

Once you have the gateway instance, you can use the following methods:

### 3.1. `patchLog`: Send Feedback

The `patchLog` method allows you to send feedback, score, and metadata for a specific log ID. All object properties are optional, so you can include any combination of the parameters:

```typescript
gateway.patchLog("my-log-id", {
  feedback: 1,
  score: 100,
  metadata: {
    user: "123",
  },
});
```

* **Returns**: `Promise ` (Make sure to `await` the request.)
* **Example Use Case**: Update a log entry with user feedback or additional metadata.

### 3.2. `getLog`: Read Log Details

The `getLog` method retrieves details of a specific log ID. It returns an object of type `Promise `. If this type is missing, ensure you have run [`wrangler types`](https://developers.cloudflare.com/workers/languages/typescript/#generate-types).

```typescript
const log = await gateway.getLog("my-log-id");
```

* **Returns**: `Promise `
* **Example Use Case**: Retrieve log information for debugging or analytics.

### 3.3. `getUrl`: Get Gateway URLs

The `getUrl` method allows you to retrieve the base URL for your AI Gateway, optionally specifying a provider to get the provider-specific endpoint.

```typescript
// Get the base gateway URL
const baseUrl = await gateway.getUrl();
// Output: https://gateway.ai.cloudflare.com/v1/my-account-id/my-gateway/


// Get a provider-specific URL
const openaiUrl = await gateway.getUrl("openai");
// Output: https://gateway.ai.cloudflare.com/v1/my-account-id/my-gateway/openai
```

* **Parameters**: Optional `provider` (string or `AIGatewayProviders` enum)
* **Returns**: `Promise `
* **Example Use Case**: Dynamically construct URLs for direct API calls or debugging configurations.

#### SDK Integration Examples

The `getUrl` method is particularly useful for integrating with popular AI SDKs:

**OpenAI SDK:**

```typescript
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: "my api key", // defaults to process.env["OPENAI_API_KEY"]
  baseURL: await env.AI.gateway("my-gateway").getUrl("openai"),
});
```

**Vercel AI SDK with OpenAI:**

```typescript
import { createOpenAI } from "@ai-sdk/openai";


const openai = createOpenAI({
  baseURL: await env.AI.gateway("my-gateway").getUrl("openai"),
});
```

**Vercel AI SDK with Anthropic:**

```typescript
import { createAnthropic } from "@ai-sdk/anthropic";


const anthropic = createAnthropic({
  baseURL: await env.AI.gateway("my-gateway").getUrl("anthropic"),
});
```

### 3.4. `run`: Universal Requests

The `run` method allows you to execute universal requests. Users can pass either a single universal request object or an array of them. This method supports all AI Gateway providers.

Refer to the [Universal endpoint documentation](https://developers.cloudflare.com/ai-gateway/universal/) for details about the available inputs.

```typescript
const resp = await gateway.run({
  provider: "workers-ai",
  endpoint: "@cf/meta/llama-3.1-8b-instruct",
  headers: {
    authorization: "Bearer my-api-token",
  },
  query: {
    prompt: "tell me a joke",
  },
});
```

* **Returns**: `Promise `
* **Example Use Case**: Perform a [universal request](https://developers.cloudflare.com/ai-gateway/universal/) to any supported provider.

## Conclusion

With these AI Gateway binding methods, you can now:

* Send feedback and update metadata with `patchLog`.
* Retrieve detailed log information using `getLog`.
* Get gateway URLs for direct API access with `getUrl`, making it easy to integrate with popular AI SDKs.
* Execute universal requests to any AI Gateway provider with `run`.

These methods offer greater flexibility and control over your AI integrations, empowering you to build more sophisticated applications on the Cloudflare Workers platform. ---
title: Analytics · Cloudflare AI Gateway docs
description: >-
  Your AI Gateway dashboard shows metrics on requests, tokens, caching, errors,
  and cost. You can filter these metrics by time.

  These analytics help you understand traffic patterns, token consumption, and

  potential issues across AI providers. You can

  view the following analytics:
lastUpdated: 2024-11-20T23:19:13.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/observability/analytics/
  md: https://developers.cloudflare.com/ai-gateway/observability/analytics/index.md
---

Your AI Gateway dashboard shows metrics on requests, tokens, caching, errors, and cost. You can filter these metrics by time. These analytics help you understand traffic patterns, token consumption, and potential issues across AI providers. You can view the following analytics:

* **Requests**: Track the total number of requests processed by AI Gateway.
* **Token Usage**: Analyze token consumption across requests, giving insight into usage patterns.
* **Costs**: Gain visibility into the costs associated with using different AI providers, allowing you to track spending, manage budgets, and optimize resources.
* **Errors**: Monitor the number of errors across the gateway, helping to identify and troubleshoot issues.
* **Cached Responses**: View the percentage of responses served from cache, which can help reduce costs and improve speed.

## View analytics

* Dashboard

  To view analytics in the dashboard:

  1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com) and select your account.
  2. Go to **AI** > **AI Gateway**.
  3. Make sure you have your gateway selected.

* graphql

  You can use GraphQL to query your usage data outside of the AI Gateway dashboard. See the example query below. You will need to use your Cloudflare token when making the request, and change `{account_id}` to match your account tag.

  ```bash
  curl https://api.cloudflare.com/client/v4/graphql \
    --header 'Authorization: Bearer TOKEN \
    --header 'Content-Type: application/json' \
    --data '{
      "query": "query{\n  viewer {\n  accounts(filter: { accountTag: \"{account_id}\" }) {\n  requests: aiGatewayRequestsAdaptiveGroups(\n      limit: $limit\n      filter: { datetimeHour_geq: $start, datetimeHour_leq: $end }\n      orderBy: [datetimeMinute_ASC]\n    ) {\n      count,\n      dimensions {\n          model,\n          provider,\n          gateway,\n          ts: datetimeMinute\n      }\n      \n    }\n      \n  }\n  }\n}",
      "variables": {
        "limit": 1000,
        "start": "2023-09-01T10:00:00.000Z",
        "end": "2023-09-30T10:00:00.000Z",
        "orderBy": "date_ASC"
      }
  }'
  ``` ---
title: Costs · Cloudflare AI Gateway docs
description: Cost metrics are only available for endpoints where the models
  return token data and the model name in their responses.
lastUpdated: 2025-05-15T16:26:01.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/observability/costs/
  md: https://developers.cloudflare.com/ai-gateway/observability/costs/index.md
---

Cost metrics are only available for endpoints where the models return token data and the model name in their responses.

## Track costs across AI providers

AI Gateway makes it easier to monitor and estimate token based costs across all your AI providers. This can help you:

* Understand and compare usage costs between providers.
* Monitor trends and estimate spend using consistent metrics.
* Apply custom pricing logic to match negotiated rates.

Note

The cost metric is an **estimation** based on the number of tokens sent and received in requests. While this metric can help you monitor and predict cost trends, refer to your provider's dashboard for the most **accurate** cost details.

Caution

Providers may introduce new models or change their pricing. If you notice outdated cost data or are using a model not yet supported by our cost tracking, please [submit a request](https://forms.gle/8kRa73wRnvq7bxL48)

## Custom costs

AI Gateway allows users to set custom costs when operating under special pricing agreements or negotiated rates. Custom costs can be applied at the request level, and when applied, they will override the default or public model costs. For more information on configuration of custom costs, please visit the [Custom Costs](https://developers.cloudflare.com/ai-gateway/configuration/custom-costs/) configuration page. ---
title: Logging · Cloudflare AI Gateway docs
description: Logging is a fundamental building block for application
  development. Logs provide insights during the early stages of development and
  are often critical to understanding issues occurring in production.
lastUpdated: 2025-05-14T14:20:47.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/observability/logging/
  md: https://developers.cloudflare.com/ai-gateway/observability/logging/index.md
---

Logging is a fundamental building block for application development. Logs provide insights during the early stages of development and are often critical to understanding issues occurring in production.

Your AI Gateway dashboard shows logs of individual requests, including the user prompt, model response, provider, timestamp, request status, token usage, cost, and duration. These logs persist, giving you the flexibility to store them for your preferred duration and do more with valuable request data.

By default, each gateway can store up to 10 million logs. You can customize this limit per gateway in your gateway settings to align with your specific requirements. If your storage limit is reached, new logs will stop being saved. To continue saving logs, you must delete older logs to free up space for new logs. To learn more about your plan limits, refer to [Limits](https://developers.cloudflare.com/ai-gateway/reference/limits/).

We recommend using an authenticated gateway when storing logs to prevent unauthorized access and protects against invalid requests that can inflate log storage usage and make it harder to find the data you need. Learn more about setting up an [authenticated gateway](https://developers.cloudflare.com/ai-gateway/configuration/authentication/).

## Default configuration

Logs, which include metrics as well as request and response data, are enabled by default for each gateway. This logging behavior will be uniformly applied to all requests in the gateway. If you are concerned about privacy or compliance and want to turn log collection off, you can go to settings and opt out of logs. If you need to modify the log settings for specific requests, you can override this setting on a per-request basis.

To change the default log configuration in the dashboard:

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
2. Go to **AI** > **AI Gateway**.
3. Select **Settings**.
4. Change the **Logs** setting to your preference.

## Per-request logging

To override the default logging behavior set in the settings tab, you can define headers on a per-request basis.

### Collect logs (`cf-aig-collect-log`)

The `cf-aig-collect-log` header allows you to bypass the default log setting for the gateway. If the gateway is configured to save logs, the header will exclude the log for that specific request. Conversely, if logging is disabled at the gateway level, this header will save the log for that request.

In the example below, we use `cf-aig-collect-log` to bypass the default setting to avoid saving the log.

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \
  --header "Authorization: Bearer $TOKEN" \
  --header 'Content-Type: application/json' \
  --header 'cf-aig-collect-log: false \
  --data ' {
        "model": "gpt-4o-mini",
        "messages": [
          {
            "role": "user",
            "content": "What is the email address and phone number of user123?"
          }
        ]
      }
'
```

## Managing log storage

To manage your log storage effectively, you can:

* Set Storage Limits: Configure a limit on the number of logs stored per gateway in your gateway settings to ensure you only pay for what you need.
* Enable Automatic Log Deletion: Activate the Automatic Log Deletion feature in your gateway settings to automatically delete the oldest logs once the log limit you've set or the default storage limit of 10 million logs is reached. This ensures new logs are always saved without manual intervention.

## How to delete logs

To manage your log storage effectively and ensure continuous logging, you can delete logs using the following methods:

### Automatic Log Deletion

​To maintain continuous logging within your gateway's storage constraints, enable Automatic Log Deletion in your Gateway settings. This feature automatically deletes the oldest logs once the log limit you've set or the default storage limit of 10 million logs is reached, ensuring new logs are saved without manual intervention.

### Manual deletion

To manually delete logs through the dashboard, navigate to the Logs tab in the dashboard. Use the available filters such as status, cache, provider, cost, or any other options in the dropdown to refine the logs you wish to delete. Once filtered, select Delete logs to complete the action.

See full list of available filters and their descriptions below:

| Filter category | Filter options | Filter by description |
| - | - | - |
| Status | error, status | error type or status. |
| Cache | cached, not cached | based on whether they were cached or not. |
| Provider | specific providers | the selected AI provider. |
| AI Models | specific models | the selected AI model. |
| Cost | less than, greater than | cost, specifying a threshold. |
| Request type | Universal, Workers AI Binding, WebSockets | the type of request. |
| Tokens | Total tokens, Tokens In, Tokens Out | token count (less than or greater than). |
| Duration | less than, greater than | request duration. |
| Feedback | equals, does not equal (thumbs up, thumbs down, no feedback) | feedback type. |
| Metadata Key | equals, does not equal | specific metadata keys. |
| Metadata Value | equals, does not equal | specific metadata values. |
| Log ID | equals, does not equal | a specific Log ID. |
| Event ID | equals, does not equal | a specific Event ID. |

### API deletion

You can programmatically delete logs using the AI Gateway API. For more comprehensive information on the `DELETE` logs endpoint, check out the [Cloudflare API documentation](https://developers.cloudflare.com/api/resources/ai_gateway/subresources/logs/methods/delete/). ---
title: Anthropic · Cloudflare AI Gateway docs
description: Anthropic helps build reliable, interpretable, and steerable AI systems.
lastUpdated: 2025-05-28T19:49:34.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/anthropic/
  md: https://developers.cloudflare.com/ai-gateway/providers/anthropic/index.md
---

[Anthropic](https://www.anthropic.com/) helps build reliable, interpretable, and steerable AI systems.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/anthropic
```

## Prerequisites

When making requests to Anthropic, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Anthropic API token.
* The name of the Anthropic model you want to use.

## Examples

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/anthropic/v1/messages \
 --header 'x-api-key: {anthropic_api_key}' \
 --header 'anthropic-version: 2023-06-01' \
 --header 'Content-Type: application/json' \
 --data  '{
    "model": "claude-3-opus-20240229",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "What is Cloudflare?"}
    ]
  }'
```

### Use Anthropic SDK with JavaScript

If you are using the `@anthropic-ai/sdk`, you can set your endpoint like this:

```js
import Anthropic from "@anthropic-ai/sdk";


const apiKey = env.ANTHROPIC_API_KEY;
const accountId = "{account_id}";
const gatewayId = "{gateway_id}";
const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/anthropic`;


const anthropic = new Anthropic({
  apiKey,
  baseURL,
});


const model = "claude-3-opus-20240229";
const messages = [{ role: "user", content: "What is Cloudflare?" }];
const maxTokens = 1024;


const message = await anthropic.messages.create({
  model,
  messages,
  max_tokens: maxTokens,
});
```

## OpenAI-Compatible Endpoint

You can also use the [OpenAI-compatible endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) (`/ai-gateway/chat-completion/`) to access Anthropic models using the OpenAI API schema. To do so, send your requests to:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```json
{
"model": "anthropic/{model}"
}
``` ---
title: Azure OpenAI · Cloudflare AI Gateway docs
description: Azure OpenAI allows you apply natural language algorithms on your data.
lastUpdated: 2025-01-21T19:36:10.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/azureopenai/
  md: https://developers.cloudflare.com/ai-gateway/providers/azureopenai/index.md
---

[Azure OpenAI](https://azure.microsoft.com/en-gb/products/ai-services/openai-service/) allows you apply natural language algorithms on your data.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/azure-openai/{resource_name}/{deployment_name}
```

## Prerequisites

When making requests to Azure OpenAI, you will need:

* AI Gateway account ID
* AI Gateway gateway name
* Azure OpenAI API key
* Azure OpenAI resource name
* Azure OpenAI deployment name (aka model name)

## URL structure

Your new base URL will use the data above in this structure: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/azure-openai/{resource_name}/{deployment_name}`. Then, you can append your endpoint and api-version at the end of the base URL, like `.../chat/completions?api-version=2023-05-15`.

## Examples

### cURL

```bash
curl 'https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/azure-openai/{resource_name}/{deployment_name}/chat/completions?api-version=2023-05-15' \
  --header 'Content-Type: application/json' \
  --header 'api-key: {azure_api_key}' \
  --data '{
  "messages": [
    {
      "role": "user",
      "content": "What is Cloudflare?"
    }
  ]
}'
```

### Use `openai-node` with JavaScript

If you are using the `openai-node` library, you can set your endpoint like this:

```js
import OpenAI from "openai";


const resource = "xxx";
const model = "xxx";
const apiVersion = "xxx";
const apiKey = env.AZURE_OPENAI_API_KEY;
const accountId = "{account_id}";
const gatewayId = "{gateway_id}";
const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/azure-openai/${resource}/${model}`;


const azure_openai = new OpenAI({
  apiKey,
  baseURL,
  defaultQuery: { "api-version": apiVersion },
  defaultHeaders: { "api-key": apiKey },
});
``` ---
title: Amazon Bedrock · Cloudflare AI Gateway docs
description: Amazon Bedrock allows you to build and scale generative AI
  applications with foundation models.
lastUpdated: 2025-06-18T16:18:39.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/bedrock/
  md: https://developers.cloudflare.com/ai-gateway/providers/bedrock/index.md
---

[Amazon Bedrock](https://aws.amazon.com/bedrock/) allows you to build and scale generative AI applications with foundation models.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/aws-bedrock`
```

## Prerequisites

When making requests to Amazon Bedrock, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Amazon Bedrock API token.
* The name of the Amazon Bedrock model you want to use.

## Make a request

When making requests to Amazon Bedrock, replace `https://bedrock-runtime.us-east-1.amazonaws.com/` in the URL you're currently using with `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/aws-bedrock/bedrock-runtime/us-east-1/`, then add the model you want to run at the end of the URL.

With Bedrock, you will need to sign the URL before you make requests to AI Gateway. You can try using the [`aws4fetch`](https://github.com/mhart/aws4fetch) SDK.

## Examples

### Use `aws4fetch` SDK with TypeScript

```typescript
import { AwsClient } from "aws4fetch";


interface Env {
  accessKey: string;
  secretAccessKey: string;
}


export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise {
    // replace with your configuration
    const cfAccountId = "{account_id}";
    const gatewayName = "{gateway_id}";
    const region = "us-east-1";


    // added as secrets (https://developers.cloudflare.com/workers/configuration/secrets/)
    const accessKey = env.accessKey;
    const secretKey = env.secretAccessKey;


    const awsClient = new AwsClient({
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
      region: region,
      service: "bedrock",
    });


    const requestBodyString = JSON.stringify({
      inputText: "What does ethereal mean?",
    });


    const stockUrl = new URL(
      `https://bedrock-runtime.${region}.amazonaws.com/model/amazon.titan-embed-text-v1/invoke`,
    );


    const headers = {
      "Content-Type": "application/json",
    };


    // sign the original request
    const presignedRequest = await awsClient.sign(stockUrl.toString(), {
      method: "POST",
      headers: headers,
      body: requestBodyString,
    });


    // Gateway Url
    const gatewayUrl = new URL(
      `https://gateway.ai.cloudflare.com/v1/${cfAccountId}/${gatewayName}/aws-bedrock/bedrock-runtime/${region}/model/amazon.titan-embed-text-v1/invoke`,
    );


    // make the request through the gateway url
    const response = await fetch(gatewayUrl, {
      method: "POST",
      headers: presignedRequest.headers,
      body: requestBodyString,
    });


    if (
      response.ok &&
      response.headers.get("content-type")?.includes("application/json")
    ) {
      const data = await response.json();
      return new Response(JSON.stringify(data));
    }


    return new Response("Invalid response", { status: 500 });
  },
};
``` ---
title: Cartesia · Cloudflare AI Gateway docs
description: Cartesia provides advanced text-to-speech services with
  customizable voice models.
lastUpdated: 2025-06-18T16:18:39.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/cartesia/
  md: https://developers.cloudflare.com/ai-gateway/providers/cartesia/index.md
---

[Cartesia](https://docs.cartesia.ai/) provides advanced text-to-speech services with customizable voice models.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cartesia
```

## URL Structure

When making requests to Cartesia, replace `https://api.cartesia.ai/v1` in the URL you are currently using with `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cartesia`.

## Prerequisites

When making requests to Cartesia, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Cartesia API token.
* The model ID and voice ID for the Cartesia voice model you want to use.

## Example

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cartesia/tts/bytes \
  --header 'Content-Type: application/json' \
  --header 'Cartesia-Version: 2024-06-10' \
  --header 'X-API-Key: {cartesia_api_token}' \
  --data '{
    "transcript": "Welcome to Cloudflare - AI Gateway!",
    "model_id": "sonic-english",
    "voice": {
        "mode": "id",
        "id": "694f9389-aac1-45b6-b726-9d9369183238"
    },
    "output_format": {
        "container": "wav",
        "encoding": "pcm_f32le",
        "sample_rate": 44100
    }
}
``` ---
title: Cerebras · Cloudflare AI Gateway docs
description: Cerebras offers developers a low-latency solution for AI model inference.
lastUpdated: 2025-06-18T16:18:39.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/cerebras/
  md: https://developers.cloudflare.com/ai-gateway/providers/cerebras/index.md
---

[Cerebras](https://inference-docs.cerebras.ai/) offers developers a low-latency solution for AI model inference.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cerebras-ai
```

## Prerequisites

When making requests to Cerebras, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Cerebras API token.
* The name of the Cerebras model you want to use.

## Examples

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/ACCOUNT_TAG/GATEWAY/cerebras/chat/completions \
 --header 'content-type: application/json' \
 --header 'Authorization: Bearer CEREBRAS_TOKEN' \
 --data '{
    "model": "llama3.1-8b",
    "messages": [
        {
            "role": "user",
            "content": "What is Cloudflare?"
        }
    ]
}'
```

## OpenAI-Compatible Endpoint

You can also use the [OpenAI-compatible endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) (`/ai-gateway/chat-completion/`) to access Cerebras models using the OpenAI API schema. To do so, send your requests to:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```json
{
"model": "cerebras/{model}"
}
``` ---
title: Cohere · Cloudflare AI Gateway docs
description: Cohere build AI models designed to solve real-world business challenges.
lastUpdated: 2025-05-28T19:49:34.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/cohere/
  md: https://developers.cloudflare.com/ai-gateway/providers/cohere/index.md
---

[Cohere](https://cohere.com/) build AI models designed to solve real-world business challenges.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cohere
```

## URL structure

When making requests to [Cohere](https://cohere.com/), replace `https://api.cohere.ai/v1` in the URL you're currently using with `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cohere`.

## Prerequisites

When making requests to Cohere, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Cohere API token.
* The name of the Cohere model you want to use.

## Examples

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cohere/v1/chat \
  --header 'Authorization: Token {cohere_api_token}' \
  --header 'Content-Type: application/json' \
  --data '{
  "chat_history": [
    {"role": "USER", "message": "Who discovered gravity?"},
    {"role": "CHATBOT", "message": "The man who is widely credited with discovering gravity is Sir Isaac Newton"}
  ],
  "message": "What year was he born?",
  "connectors": [{"id": "web-search"}]
}'
```

### Use Cohere SDK with Python

If using the [`cohere-python-sdk`](https://github.com/cohere-ai/cohere-python), set your endpoint like this:

```js
import cohere
import os


api_key = os.getenv('API_KEY')
account_id = '{account_id}'
gateway_id = '{gateway_id}'
base_url = f"https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/cohere/v1"


co = cohere.Client(
  api_key=api_key,
  base_url=base_url,
)


message = "hello world!"
model = "command-r-plus"


chat = co.chat(
  message=message,
  model=model
)


print(chat)
```

## OpenAI-Compatible Endpoint

You can also use the [OpenAI-compatible endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) (`/ai-gateway/chat-completion/`) to access Cohere models using the OpenAI API schema. To do so, send your requests to:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```json
{
"model": "cohere/{model}"
}
``` ---
title: DeepSeek · Cloudflare AI Gateway docs
description: DeepSeek helps you build quickly with DeepSeek's advanced AI models.
lastUpdated: 2025-06-18T16:18:39.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/deepseek/
  md: https://developers.cloudflare.com/ai-gateway/providers/deepseek/index.md
---

[DeepSeek](https://www.deepseek.com/) helps you build quickly with DeepSeek's advanced AI models.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/deepseek
```

## Prerequisites

When making requests to DeepSeek, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active DeepSeek AI API token.
* The name of the DeepSeek AI model you want to use.

## URL structure

Your new base URL will use the data above in this structure:

`https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/deepseek/`.

You can then append the endpoint you want to hit, for example: `chat/completions`.

So your final URL will come together as:

`https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/deepseek/chat/completions`.

## Examples

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/deepseek/chat/completions \
 --header 'content-type: application/json' \
 --header 'Authorization: Bearer DEEPSEEK_TOKEN' \
 --data '{
    "model": "deepseek-chat",
    "messages": [
        {
            "role": "user",
            "content": "What is Cloudflare?"
        }
    ]
}'
```

### Use DeepSeek with JavaScript

If you are using the OpenAI SDK, you can set your endpoint like this:

```js
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: env.DEEPSEEK_TOKEN,
  baseURL:
    "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/deepseek",
});


try {
  const chatCompletion = await openai.chat.completions.create({
    model: "deepseek-chat",
    messages: [{ role: "user", content: "What is Cloudflare?" }],
  });


  const response = chatCompletion.choices[0].message;


  return new Response(JSON.stringify(response));
} catch (e) {
  return new Response(e);
}
```

## OpenAI-Compatible Endpoint

You can also use the [OpenAI-compatible endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) (`/ai-gateway/chat-completion/`) to access DeepSeek models using the OpenAI API schema. To do so, send your requests to:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```json
{
"model": "deepseek/{model}"
}
``` ---
title: ElevenLabs · Cloudflare AI Gateway docs
description: ElevenLabs offers advanced text-to-speech services, enabling
  high-quality voice synthesis in multiple languages.
lastUpdated: 2025-06-18T16:18:39.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/elevenlabs/
  md: https://developers.cloudflare.com/ai-gateway/providers/elevenlabs/index.md
---

[ElevenLabs](https://elevenlabs.io/) offers advanced text-to-speech services, enabling high-quality voice synthesis in multiple languages.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/elevenlabs
```

## Prerequisites

When making requests to ElevenLabs, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active ElevenLabs API token.
* The model ID of the ElevenLabs voice model you want to use.

## Example

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/elevenlabs/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb?output_format=mp3_44100_128 \
  --header 'Content-Type: application/json' \
  --header 'xi-api-key: {elevenlabs_api_token}' \
  --data '{
    "text": "Welcome to Cloudflare - AI Gateway!",
    "model_id": "eleven_multilingual_v2"
}'
``` ---
title: Google AI Studio · Cloudflare AI Gateway docs
description: Google AI Studio helps you build quickly with Google Gemini models.
lastUpdated: 2025-05-28T19:49:34.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/google-ai-studio/
  md: https://developers.cloudflare.com/ai-gateway/providers/google-ai-studio/index.md
---

[Google AI Studio](https://ai.google.dev/aistudio) helps you build quickly with Google Gemini models.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-ai-studio
```

## Prerequisites

When making requests to Google AI Studio, you will need:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Google AI Studio API token.
* The name of the Google AI Studio model you want to use.

## URL structure

Your new base URL will use the data above in this structure: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-ai-studio/`.

Then you can append the endpoint you want to hit, for example: `v1/models/{model}:{generative_ai_rest_resource}`

So your final URL will come together as: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-ai-studio/v1/models/{model}:{generative_ai_rest_resource}`.

## Examples

### cURL

```bash
curl "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_name}/google-ai-studio/v1/models/gemini-1.0-pro:generateContent" \
 --header 'content-type: application/json' \
 --header 'x-goog-api-key: {google_studio_api_key}' \
 --data '{
      "contents": [
          {
            "role":"user",
            "parts": [
              {"text":"What is Cloudflare?"}
            ]
          }
        ]
      }'
```

### Use `@google/generative-ai` with JavaScript

If you are using the `@google/generative-ai` package, you can set your endpoint like this:

```js
import { GoogleGenerativeAI } from "@google/generative-ai";


const api_token = env.GOOGLE_AI_STUDIO_TOKEN;
const account_id = "";
const gateway_name = "";


const genAI = new GoogleGenerativeAI(api_token);
const model = genAI.getGenerativeModel(
  { model: "gemini-1.5-flash" },
  {
    baseUrl: `https://gateway.ai.cloudflare.com/v1/${account_id}/${gateway_name}/google-ai-studio`,
  },
);


await model.generateContent(["What is Cloudflare?"]);
```

## OpenAI-Compatible Endpoint

You can also use the [OpenAI-compatible endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) (`/ai-gateway/chat-completion/`) to access Google AI Studio models using the OpenAI API schema. To do so, send your requests to:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```json
{
"model": "google-ai-studio/{model}"
}
``` ---
title: Grok · Cloudflare AI Gateway docs
description: Grok is a general purpose model that can be used for a variety of
  tasks, including generating and understanding text, code, and function
  calling.
lastUpdated: 2025-06-19T13:27:22.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/grok/
  md: https://developers.cloudflare.com/ai-gateway/providers/grok/index.md
---

[Grok](https://docs.x.ai/docs#getting-started) is a general purpose model that can be used for a variety of tasks, including generating and understanding text, code, and function calling.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok
```

## URL structure

When making requests to [Grok](https://docs.x.ai/docs#getting-started), replace `https://api.x.ai/v1` in the URL you are currently using with `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok`.

## Prerequisites

When making requests to Grok, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Grok API token.
* The name of the Grok model you want to use.

## Examples

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok/v1/chat/completions \
  --header 'content-type: application/json' \
  --header 'Authorization: Bearer {grok_api_token}' \
  --data '{
    "model": "grok-beta",
    "messages": [
        {
            "role": "user",
            "content": "What is Cloudflare?"
        }
    ]
}'
```

### Use OpenAI SDK with JavaScript

If you are using the OpenAI SDK with JavaScript, you can set your endpoint like this:

```js
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: " ",
  baseURL:
    "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok",
});


const completion = await openai.chat.completions.create({
  model: "grok-beta",
  messages: [
    {
      role: "system",
      content:
        "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",
    },
    {
      role: "user",
      content: "What is the meaning of life, the universe, and everything?",
    },
  ],
});


console.log(completion.choices[0].message);
```

### Use OpenAI SDK with Python

If you are using the OpenAI SDK with Python, you can set your endpoint like this:

```python
import os
from openai import OpenAI


XAI_API_KEY = os.getenv("XAI_API_KEY")
client = OpenAI(
    api_key=XAI_API_KEY,
    base_url="https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok",
)


completion = client.chat.completions.create(
    model="grok-beta",
    messages=[
        {"role": "system", "content": "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy."},
        {"role": "user", "content": "What is the meaning of life, the universe, and everything?"},
    ],
)


print(completion.choices[0].message)
```

### Use Anthropic SDK with JavaScript

If you are using the Anthropic SDK with JavaScript, you can set your endpoint like this:

```js
import Anthropic from "@anthropic-ai/sdk";


const anthropic = new Anthropic({
  apiKey: " ",
  baseURL:
    "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok",
});


const msg = await anthropic.messages.create({
  model: "grok-beta",
  max_tokens: 128,
  system:
    "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",
  messages: [
    {
      role: "user",
      content: "What is the meaning of life, the universe, and everything?",
    },
  ],
});


console.log(msg);
```

### Use Anthropic SDK with Python

If you are using the Anthropic SDK with Python, you can set your endpoint like this:

```python
import os
from anthropic import Anthropic


XAI_API_KEY = os.getenv("XAI_API_KEY")
client = Anthropic(
    api_key=XAI_API_KEY,
    base_url="https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/grok",
)


message = client.messages.create(
    model="grok-beta",
    max_tokens=128,
    system="You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",
    messages=[
        {
            "role": "user",
            "content": "What is the meaning of life, the universe, and everything?",
        },
    ],
)


print(message.content)
```

## OpenAI-Compatible Endpoint

You can also use the [OpenAI-compatible endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) (`/ai-gateway/chat-completion/`) to access Grok models using the OpenAI API schema. To do so, send your requests to:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```json
{
"model": "grok/{model}"
}
``` ---
title: Groq · Cloudflare AI Gateway docs
description: Groq delivers high-speed processing and low-latency performance.
lastUpdated: 2025-05-28T19:49:34.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/groq/
  md: https://developers.cloudflare.com/ai-gateway/providers/groq/index.md
---

[Groq](https://groq.com/) delivers high-speed processing and low-latency performance.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/groq
```

## URL structure

When making requests to [Groq](https://groq.com/), replace `https://api.groq.com/openai/v1` in the URL you're currently using with `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/groq`.

## Prerequisites

When making requests to Groq, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Groq API token.
* The name of the Groq model you want to use.

## Examples

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/groq/chat/completions \
  --header 'Authorization: Bearer {groq_api_key}' \
  --header 'Content-Type: application/json' \
  --data '{
    "messages": [
      {
        "role": "user",
        "content": "What is Cloudflare?"
      }
    ],
    "model": "llama3-8b-8192"
}'
```

### Use Groq SDK with JavaScript

If using the [`groq-sdk`](https://www.npmjs.com/package/groq-sdk), set your endpoint like this:

```js
import Groq from "groq-sdk";


const apiKey = env.GROQ_API_KEY;
const accountId = "{account_id}";
const gatewayId = "{gateway_id}";
const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/groq`;


const groq = new Groq({
  apiKey,
  baseURL,
});


const messages = [{ role: "user", content: "What is Cloudflare?" }];
const model = "llama3-8b-8192";


const chatCompletion = await groq.chat.completions.create({
  messages,
  model,
});
```

## OpenAI-Compatible Endpoint

You can also use the [OpenAI-compatible endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) (`/ai-gateway/chat-completion/`) to access Groq models using the OpenAI API schema. To do so, send your requests to:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```json
{
"model": "groq/{model}"
}
``` ---
title: HuggingFace · Cloudflare AI Gateway docs
description: HuggingFace helps users build, deploy and train machine learning models.
lastUpdated: 2025-05-14T14:14:22.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/huggingface/
  md: https://developers.cloudflare.com/ai-gateway/providers/huggingface/index.md
---

[HuggingFace](https://huggingface.co/) helps users build, deploy and train machine learning models.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/huggingface
```

## URL structure

When making requests to HuggingFace Inference API, replace `https://api-inference.huggingface.co/models/` in the URL you're currently using with `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/huggingface`. Note that the model you're trying to access should come right after, for example `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/huggingface/bigcode/starcoder`.

## Prerequisites

When making requests to HuggingFace, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active HuggingFace API token.
* The name of the HuggingFace model you want to use.

## Examples

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/huggingface/bigcode/starcoder \
  --header 'Authorization: Bearer {hf_api_token}' \
  --header 'Content-Type: application/json' \
  --data '{
    "inputs": "console.log"
}'
```

### Use HuggingFace.js library with JavaScript

If you are using the HuggingFace.js library, you can set your inference endpoint like this:

```js
import { HfInferenceEndpoint } from "@huggingface/inference";


const accountId = "{account_id}";
const gatewayId = "{gateway_id}";
const model = "gpt2";
const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/huggingface/${model}`;
const apiToken = env.HF_API_TOKEN;


const hf = new HfInferenceEndpoint(baseURL, apiToken);
``` ---
title: Mistral AI · Cloudflare AI Gateway docs
description: Mistral AI helps you build quickly with Mistral's advanced AI models.
lastUpdated: 2025-05-28T19:49:34.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/mistral/
  md: https://developers.cloudflare.com/ai-gateway/providers/mistral/index.md
---

[Mistral AI](https://mistral.ai) helps you build quickly with Mistral's advanced AI models.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/mistral
```

## Prerequisites

When making requests to the Mistral AI, you will need:

* AI Gateway Account ID
* AI Gateway gateway name
* Mistral AI API token
* Mistral AI model name

## URL structure

Your new base URL will use the data above in this structure: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/mistral/`.

Then you can append the endpoint you want to hit, for example: `v1/chat/completions`

So your final URL will come together as: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/mistral/v1/chat/completions`.

## Examples

### cURL

```bash
curl -X POST https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/mistral/v1/chat/completions \
 --header 'content-type: application/json' \
 --header 'Authorization: Bearer MISTRAL_TOKEN' \
 --data '{
    "model": "mistral-large-latest",
    "messages": [
        {
            "role": "user",
            "content": "What is Cloudflare?"
        }
    ]
}'
```

### Use `@mistralai/mistralai` package with JavaScript

If you are using the `@mistralai/mistralai` package, you can set your endpoint like this:

```js
import { Mistral } from "@mistralai/mistralai";


const client = new Mistral({
  apiKey: MISTRAL_TOKEN,
  serverURL: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/mistral`,
});


await client.chat.create({
  model: "mistral-large-latest",
  messages: [
    {
      role: "user",
      content: "What is Cloudflare?",
    },
  ],
});
```

## OpenAI-Compatible Endpoint

You can also use the [OpenAI-compatible endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) (`/ai-gateway/chat-completion/`) to access Mistral models using the OpenAI API schema. To do so, send your requests to:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```json
{
"model": "mistral/{model}"
}
``` ---
title: OpenAI · Cloudflare AI Gateway docs
description: OpenAI helps you build with ChatGPT.
lastUpdated: 2025-04-17T10:58:09.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/openai/
  md: https://developers.cloudflare.com/ai-gateway/providers/openai/index.md
---

[OpenAI](https://openai.com/about/) helps you build with ChatGPT.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai
```

### Chat completions endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \
```

### Responses endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/responses \
```

## URL structure

When making requests to OpenAI, replace `https://api.openai.com/v1` in the URL you are currently using with `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai`.

## Prerequisites

When making requests to OpenAI, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active OpenAI API token.
* The name of the OpenAI model you want to use.

## Chat completions endpoint

### cURL example

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \
--header 'Authorization: Bearer {openai_token}' \
--header 'Content-Type: application/json' \
--data '{
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "user",
      "content": "What is Cloudflare?"
    }
  ]
}'
```

### JavaScript SDK example

```js
import OpenAI from "openai";


const apiKey = "my api key"; // or process.env["OPENAI_API_KEY"]
const accountId = "{account_id}";
const gatewayId = "{gateway_id}";
const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/openai`;


const openai = new OpenAI({
  apiKey,
  baseURL,
});


try {
  const model = "gpt-3.5-turbo-0613";
  const messages = [{ role: "user", content: "What is a neuron?" }];
  const maxTokens = 100;
  const chatCompletion = await openai.chat.completions.create({
    model,
    messages,
    max_tokens: maxTokens,
  });
  const response = chatCompletion.choices[0].message;
  console.log(response);
} catch (e) {
  console.error(e);
}
```

## OpenAI Responses endpoint

### cURL example

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/responses \
--header 'Authorization: Bearer {openai_token}' \
--header 'Content-Type: application/json' \
--data '{
  "model": "gpt-4.1",
  "input": [
    {
      "role": "user",
      "content": "Write a one-sentence bedtime story about a unicorn."
    }
  ]
}'
```

### JavaScript SDK example

```js
import OpenAI from "openai";


const apiKey = "my api key"; // or process.env["OPENAI_API_KEY"]
const accountId = "{account_id}";
const gatewayId = "{gateway_id}";
const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/openai`;


const openai = new OpenAI({
  apiKey,
  baseURL,
});


try {
  const model = "gpt-4.1";
  const input = [
    {
      role: "user",
      content: "Write a one-sentence bedtime story about a unicorn.",
    },
  ];
  const response = await openai.responses.create({
    model,
    input,
  });
  console.log(response.output_text);
} catch (e) {
  console.error(e);
}
``` ---
title: OpenRouter · Cloudflare AI Gateway docs
description: OpenRouter is a platform that provides a unified interface for
  accessing and using large language models (LLMs).
lastUpdated: 2025-06-18T16:18:39.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/openrouter/
  md: https://developers.cloudflare.com/ai-gateway/providers/openrouter/index.md
---

[OpenRouter](https://openrouter.ai/) is a platform that provides a unified interface for accessing and using large language models (LLMs).

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openrouter
```

## URL structure

When making requests to [OpenRouter](https://openrouter.ai/), replace `https://openrouter.ai/api/v1/chat/completions` in the URL you are currently using with `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openrouter`.

## Prerequisites

When making requests to OpenRouter, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active OpenRouter API token or a token from the original model provider.
* The name of the OpenRouter model you want to use.

## Examples

### cURL

```bash
curl -X POST https://gateway.ai.cloudflare.com/v1/ACCOUNT_TAG/GATEWAY/openrouter/v1/chat/completions \
 --header 'content-type: application/json' \
 --header 'Authorization: Bearer OPENROUTER_TOKEN' \
 --data '{
    "model": "openai/gpt-3.5-turbo",
    "messages": [
        {
            "role": "user",
            "content": "What is Cloudflare?"
        }
    ]
}'
```

### Use OpenAI SDK with JavaScript

If you are using the OpenAI SDK with JavaScript, you can set your endpoint like this:

```js
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: env.OPENROUTER_TOKEN,
  baseURL:
    "https://gateway.ai.cloudflare.com/v1/ACCOUNT_TAG/GATEWAY/openrouter",
});


try {
  const chatCompletion = await openai.chat.completions.create({
    model: "openai/gpt-3.5-turbo",
    messages: [{ role: "user", content: "What is Cloudflare?" }],
  });


  const response = chatCompletion.choices[0].message;


  return new Response(JSON.stringify(response));
} catch (e) {
  return new Response(e);
}
``` ---
title: Perplexity · Cloudflare AI Gateway docs
description: Perplexity is an AI powered answer engine.
lastUpdated: 2025-05-28T19:49:34.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/perplexity/
  md: https://developers.cloudflare.com/ai-gateway/providers/perplexity/index.md
---

[Perplexity](https://www.perplexity.ai/) is an AI powered answer engine.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/perplexity-ai
```

## Prerequisites

When making requests to Perplexity, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Perplexity API token.
* The name of the Perplexity model you want to use.

## Examples

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/perplexity-ai/chat/completions \
     --header 'accept: application/json' \
     --header 'content-type: application/json' \
     --header 'Authorization: Bearer {perplexity_token}' \
     --data '{
      "model": "mistral-7b-instruct",
      "messages": [
        {
          "role": "user",
          "content": "What is Cloudflare?"
        }
      ]
    }'
```

### Use Perplexity through OpenAI SDK with JavaScript

Perplexity does not have their own SDK, but they have compatibility with the OpenAI SDK. You can use the OpenAI SDK to make a Perplexity call through AI Gateway as follows:

```js
import OpenAI from "openai";


const apiKey = env.PERPLEXITY_API_KEY;
const accountId = "{account_id}";
const gatewayId = "{gateway_id}";
const baseURL = `https://gateway.ai.cloudflare.com/v1/${accountId}/${gatewayId}/perplexity-ai`;


const perplexity = new OpenAI({
  apiKey,
  baseURL,
});


const model = "mistral-7b-instruct";
const messages = [{ role: "user", content: "What is Cloudflare?" }];
const maxTokens = 20;


const chatCompletion = await perplexity.chat.completions.create({
  model,
  messages,
  max_tokens: maxTokens,
});
```

## OpenAI-Compatible Endpoint

You can also use the [OpenAI-compatible endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) (`/ai-gateway/chat-completion/`) to access Perplexity models using the OpenAI API schema. To do so, send your requests to:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```json
{
"model": "perplexity/{model}"
}
``` ---
title: Replicate · Cloudflare AI Gateway docs
description: Replicate runs and fine tunes open-source models.
lastUpdated: 2025-05-14T14:14:22.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/replicate/
  md: https://developers.cloudflare.com/ai-gateway/providers/replicate/index.md
---

[Replicate](https://replicate.com/) runs and fine tunes open-source models.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/replicate
```

## URL structure

When making requests to Replicate, replace `https://api.replicate.com/v1` in the URL you're currently using with `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/replicate`.

## Prerequisites

When making requests to Replicate, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Replicate API token.
* The name of the Replicate model you want to use.

## Example

### cURL

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/replicate/predictions \
  --header 'Authorization: Token {replicate_api_token}' \
  --header 'Content-Type: application/json' \
  --data '{
    "input":
      {
        "prompt": "What is Cloudflare?"
      }
    }'
``` ---
title: Google Vertex AI · Cloudflare AI Gateway docs
description: Google Vertex AI enables developers to easily build and deploy
  enterprise ready generative AI experiences.
lastUpdated: 2025-01-21T19:36:10.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/vertex/
  md: https://developers.cloudflare.com/ai-gateway/providers/vertex/index.md
---

[Google Vertex AI](https://cloud.google.com/vertex-ai) enables developers to easily build and deploy enterprise ready generative AI experiences.

Below is a quick guide on how to set your Google Cloud Account:

1. Google Cloud Platform (GCP) Account

   * Sign up for a [GCP account](https://cloud.google.com/vertex-ai). New users may be eligible for credits (valid for 90 days).

2. Enable the Vertex AI API

   * Navigate to [Enable Vertex AI API](https://console.cloud.google.com/marketplace/product/google/aiplatform.googleapis.com) and activate the API for your project.

3. Apply for access to desired models.

## Endpoint

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-vertex-ai
```

## Prerequisites

When making requests to Google Vertex, you will need:

* AI Gateway account tag
* AI Gateway gateway name
* Google Vertex API key
* Google Vertex Project Name
* Google Vertex Region (for example, us-east4)
* Google Vertex model

## URL structure

Your new base URL will use the data above in this structure: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-vertex-ai/v1/projects/{project_name}/locations/{region}`.

Then you can append the endpoint you want to hit, for example: `/publishers/google/models/{model}:{generative_ai_rest_resource}`

So your final URL will come together as: `https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-vertex-ai/v1/projects/{project_name}/locations/{region}/publishers/google/models/gemini-1.0-pro-001:generateContent`

## Example

### cURL

```bash
curl "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/google-vertex-ai/v1/projects/{project_name}/locations/{region}/publishers/google/models/gemini-1.0-pro-001:generateContent" \
    -H "Authorization: Bearer {vertex_api_key}" \
    -H 'Content-Type: application/json' \
    -d '{
        "contents": {
          "role": "user",
          "parts": [
            {
              "text": "Tell me more about Cloudflare"
            }
          ]
        }'
``` ---
title: Workers AI · Cloudflare AI Gateway docs
description: Use AI Gateway for analytics, caching, and security on requests to
  Workers AI. Workers AI integrates seamlessly with AI Gateway, allowing you to
  execute AI inference via API requests or through an environment binding for
  Workers scripts. The binding simplifies the process by routing requests
  through your AI Gateway with minimal setup.
lastUpdated: 2025-06-26T18:43:59.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/providers/workersai/
  md: https://developers.cloudflare.com/ai-gateway/providers/workersai/index.md
---

Use AI Gateway for analytics, caching, and security on requests to [Workers AI](https://developers.cloudflare.com/workers-ai/). Workers AI integrates seamlessly with AI Gateway, allowing you to execute AI inference via API requests or through an environment binding for Workers scripts. The binding simplifies the process by routing requests through your AI Gateway with minimal setup.

## Prerequisites

When making requests to Workers AI, ensure you have the following:

* Your AI Gateway Account ID.
* Your AI Gateway gateway name.
* An active Workers AI API token.
* The name of the Workers AI model you want to use.

## REST API

To interact with a REST API, update the URL used for your request:

* **Previous**:

```txt
https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/{model_id}
```

* **New**:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/{model_id}
```

For these parameters:

* `{account_id}` is your Cloudflare [account ID](https://developers.cloudflare.com/workers-ai/get-started/rest-api/#1-get-api-token-and-account-id).
* `{gateway_id}` refers to the name of your existing [AI Gateway](https://developers.cloudflare.com/ai-gateway/get-started/#create-gateway).
* `{model_id}` refers to the model ID of the [Workers AI model](https://developers.cloudflare.com/workers-ai/models/).

## Examples

First, generate an [API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) with `Workers AI Read` access and use it in your request.

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/@cf/meta/llama-3.1-8b-instruct \
 --header 'Authorization: Bearer {cf_api_token}' \
 --header 'Content-Type: application/json' \
 --data '{"prompt": "What is Cloudflare?"}'
```

```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/@cf/huggingface/distilbert-sst-2-int8 \
  --header 'Authorization: Bearer {cf_api_token}' \
  --header 'Content-Type: application/json' \
  --data '{ "text": "Cloudflare docs are amazing!" }'
```

### OpenAI compatible endpoints

Workers AI supports OpenAI compatible endpoints for [text generation](https://developers.cloudflare.com/workers-ai/models/) (`/v1/chat/completions`) and [text embedding models](https://developers.cloudflare.com/workers-ai/models/) (`/v1/embeddings`). This allows you to use the same code as you would for your OpenAI commands, but swap in Workers AI easily.



```bash
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/v1/chat/completions \
 --header 'Authorization: Bearer {cf_api_token}' \
 --header 'Content-Type: application/json' \
 --data '{
      "model": "@cf/meta/llama-3.1-8b-instruct",
      "messages": [
        {
          "role": "user",
          "content": "What is Cloudflare?"
        }
      ]
    }
'
```

## Workers Binding

You can integrate Workers AI with AI Gateway using an environment binding. To include an AI Gateway within your Worker, add the gateway as an object in your Workers AI request.

* JavaScript

  ```js
  export default {
    async fetch(request, env) {
      const response = await env.AI.run(
        "@cf/meta/llama-3.1-8b-instruct",
        {
          prompt: "Why should you use Cloudflare for your AI inference?",
        },
        {
          gateway: {
            id: "{gateway_id}",
            skipCache: false,
            cacheTtl: 3360,
          },
        },
      );
      return new Response(JSON.stringify(response));
    },
  };
  ```

* TypeScript

  ```ts
  export interface Env {
    AI: Ai;
  }


  export default {
    async fetch(request: Request, env: Env): Promise {
      const response = await env.AI.run(
        "@cf/meta/llama-3.1-8b-instruct",
        {
          prompt: "Why should you use Cloudflare for your AI inference?",
        },
        {
          gateway: {
            id: "{gateway_id}",
            skipCache: false,
            cacheTtl: 3360,
          },
        },
      );
      return new Response(JSON.stringify(response));
    },
  } satisfies ExportedHandler ;
  ```

For a detailed step-by-step guide on integrating Workers AI with AI Gateway using a binding, see [Integrations in AI Gateway](https://developers.cloudflare.com/ai-gateway/integrations/aig-workers-ai-binding/).

Workers AI supports the following parameters for AI gateways:

* `id` string
  * Name of your existing [AI Gateway](https://developers.cloudflare.com/ai-gateway/get-started/#create-gateway). Must be in the same account as your Worker.
* `skipCache` boolean(default: false)
  * Controls whether the request should [skip the cache](https://developers.cloudflare.com/ai-gateway/configuration/caching/#skip-cache-cf-aig-skip-cache).
* `cacheTtl` number
  * Controls the [Cache TTL](https://developers.cloudflare.com/ai-gateway/configuration/caching/#cache-ttl-cf-aig-cache-ttl).

## OpenAI-Compatible Endpoint

You can also use the [OpenAI-compatible endpoint](https://developers.cloudflare.com/ai-gateway/chat-completion/) (`/ai-gateway/chat-completion/`) to access Workers AI models using the OpenAI API schema. To do so, send your requests to:

```txt
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/compat/chat/completions
```

Specify:

```json
{
"model": "workers-ai/{model}"
}
``` ---
title: Audit logs · Cloudflare AI Gateway docs
description: Audit logs provide a comprehensive summary of changes made within
  your Cloudflare account, including those made to gateways in AI Gateway. This
  functionality is available on all plan types, free of charge, and is enabled
  by default.
lastUpdated: 2025-05-29T18:16:56.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/reference/audit-logs/
  md: https://developers.cloudflare.com/ai-gateway/reference/audit-logs/index.md
---

[Audit logs](https://developers.cloudflare.com/fundamentals/account/account-security/review-audit-logs/) provide a comprehensive summary of changes made within your Cloudflare account, including those made to gateways in AI Gateway. This functionality is available on all plan types, free of charge, and is enabled by default.

## Viewing Audit Logs

To view audit logs for AI Gateway:

1. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/login) and select your account.
2. Go to **Manage Account** > **Audit Log**.

For more information on how to access and use audit logs, refer to [review audit logs documentation](https://developers.cloudflare.com/fundamentals/account/account-security/review-audit-logs/).

## Logged Operations

The following configuration actions are logged:

| Operation | Description |
| - | - |
| gateway created | Creation of a new gateway. |
| gateway deleted | Deletion of an existing gateway. |
| gateway updated | Edit of an existing gateway. |

## Example Log Entry

Below is an example of an audit log entry showing the creation of a new gateway:

```json
{
 "action": {
     "info": "gateway created",
     "result": true,
     "type": "create"
 },
 "actor": {
     "email": " ",
     "id": "3f7b730e625b975bc1231234cfbec091",
     "ip": "fe32:43ed:12b5:526::1d2:13",
     "type": "user"
 },
 "id": "5eaeb6be-1234-406a-87ab-1971adc1234c",
 "interface": "UI",
 "metadata": {},
 "newValue": "",
 "newValueJson": {
     "cache_invalidate_on_update": false,
     "cache_ttl": 0,
     "collect_logs": true,
     "id": "test",
     "rate_limiting_interval": 0,
     "rate_limiting_limit": 0,
     "rate_limiting_technique": "fixed"
 },
 "oldValue": "",
 "oldValueJson": {},
 "owner": {
     "id": "1234d848c0b9e484dfc37ec392b5fa8a"
 },
 "resource": {
     "id": "89303df8-1234-4cfa-a0f8-0bd848e831ca",
     "type": "ai_gateway.gateway"
 },
 "when": "2024-07-17T14:06:11.425Z"
}
``` ---
title: Limits · Cloudflare AI Gateway docs
description: The following limits apply to gateway configurations, logs, and
  related features in Cloudflare's platform.
lastUpdated: 2025-04-23T11:31:30.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/reference/limits/
  md: https://developers.cloudflare.com/ai-gateway/reference/limits/index.md
---

The following limits apply to gateway configurations, logs, and related features in Cloudflare's platform.

| Feature | Limit |
| - | - |
| [Cacheable request size](https://developers.cloudflare.com/ai-gateway/configuration/caching/) | 25 MB per request |
| [Cache TTL](https://developers.cloudflare.com/ai-gateway/configuration/caching/#cache-ttl-cf-aig-cache-ttl) | 1 month |
| [Custom metadata](https://developers.cloudflare.com/ai-gateway/configuration/custom-metadata/) | 5 entries per request |
| [Datasets](https://developers.cloudflare.com/ai-gateway/evaluations/set-up-evaluations/) | 10 per gateway |
| Gateways free plan | 10 per account |
| Gateways paid plan | 20 per account |
| Gateway name length | 64 characters |
| Log storage rate limit | 500 logs per second per gateway |
| Logs stored [paid plan](https://developers.cloudflare.com/ai-gateway/reference/pricing/) | 10 million per gateway 1 |
| Logs stored [free plan](https://developers.cloudflare.com/ai-gateway/reference/pricing/) | 100,000 per account 2 |
| [Log size stored](https://developers.cloudflare.com/ai-gateway/observability/logging/) | 10 MB per log 3 |
| [Logpush jobs](https://developers.cloudflare.com/ai-gateway/observability/logging/logpush/) | 4 per account |
| [Logpush size limit](https://developers.cloudflare.com/ai-gateway/observability/logging/logpush/) | 1MB per log |

1 If you have reached 10 million logs stored per gateway, new logs will stop being saved. To continue saving logs, you must delete older logs in that gateway to free up space or create a new gateway. Refer to [Auto Log Cleanup](https://developers.cloudflare.com/ai-gateway/observability/logging/#auto-log-cleanup) for more details on how to automatically delete logs.

2 If you have reached 100,000 logs stored per account, across all gateways, new logs will stop being saved. To continue saving logs, you must delete older logs. Refer to [Auto Log Cleanup](https://developers.cloudflare.com/ai-gateway/observability/logging/#auto-log-cleanup) for more details on how to automatically delete logs.

3 Logs larger than 10 MB will not be stored.

Need a higher limit?

To request an increase to a limit, complete the [Limit Increase Request Form](https://forms.gle/cuXu1QnQCrSNkkaS8). If the limit can be increased, Cloudflare will contact you with next steps. ---
title: Pricing · Cloudflare AI Gateway docs
description: AI Gateway is available to use on all plans.
lastUpdated: 2025-04-09T18:09:52.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/reference/pricing/
  md: https://developers.cloudflare.com/ai-gateway/reference/pricing/index.md
---

AI Gateway is available to use on all plans.

AI Gateway's core features available today are offered for free, and all it takes is a Cloudflare account and one line of code to [get started](https://developers.cloudflare.com/ai-gateway/get-started/). Core features include: dashboard analytics, caching, and rate limiting.

We will continue to build and expand AI Gateway. Some new features may be additional core features that will be free while others may be part of a premium plan. We will announce these as they become available.

You can monitor your usage in the AI Gateway dashboard.

## Persistent logs

Note

Billing for persistent logs has not yet started. Users on paid plans can store logs beyond the included volume of 200,000 logs stored a month without being charged during this period. (Users on the free plan remain limited to the 100,000 logs cap for their plan.) We will provide plenty of advanced notice before charging begins for persistent log storage.

Persistent logs are available on all plans, with a free allocation for both free and paid plans. Charges for additional logs beyond those limits are based on the number of logs stored per month.

### Free allocation and overage pricing

| Plan | Free logs stored | Overage pricing |
| - | - | - |
| Workers Free | 100,000 logs total | N/A - Upgrade to Workers Paid |
| Workers Paid | 200,000 logs total | $8 per 100,000 logs stored per month |

Allocations are based on the total logs stored across all gateways. For guidance on managing or deleting logs, please see our [documentation](https://developers.cloudflare.com/ai-gateway/observability/logging).

For example, if you are a Workers Paid plan user storing 300,000 logs, you will be charged for the excess 100,000 logs (300,000 total logs - 200,000 free logs), resulting in an $8/month charge.

## Logpush

Logpush is only available on the Workers Paid plan.

| | Paid plan |
| - | - |
| Requests | 10 million / month, +$0.05/million |

## Fine print

Prices subject to change. If you are an Enterprise customer, reach out to your account team to confirm pricing details. ---
title: Create your first AI Gateway using Workers AI · Cloudflare AI Gateway docs
description: This tutorial guides you through creating your first AI Gateway
  using Workers AI on the Cloudflare dashboard. The intended audience is
  beginners who are new to AI Gateway and Workers AI. Creating an AI Gateway
  enables the user to efficiently manage and secure AI requests, allowing them
  to utilize AI models for tasks such as content generation, data processing, or
  predictive analysis with enhanced control and performance.
lastUpdated: 2025-03-13T16:14:30.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/tutorials/create-first-aig-workers/
  md: https://developers.cloudflare.com/ai-gateway/tutorials/create-first-aig-workers/index.md
---

This tutorial guides you through creating your first AI Gateway using Workers AI on the Cloudflare dashboard. The intended audience is beginners who are new to AI Gateway and Workers AI. Creating an AI Gateway enables the user to efficiently manage and secure AI requests, allowing them to utilize AI models for tasks such as content generation, data processing, or predictive analysis with enhanced control and performance.

## Sign up and log in

1. **Sign up**: If you do not have a Cloudflare account, [sign up](https://cloudflare.com/sign-up).
2. **Log in**: Access the Cloudflare dashboard by logging in to the [Cloudflare dashboard](https://dash.cloudflare.com/login).

## Create gateway

Then, create a new AI Gateway.

* Dashboard

  To set up an AI Gateway in the dashboard:

  1. Log into the [Cloudflare dashboard](https://dash.cloudflare.com/) and select your account.
  2. Go to **AI** > **AI Gateway**.
  3. Select **Create Gateway**.
  4. Enter your **Gateway name**. Note: Gateway name has a 64 character limit.
  5. Select **Create**.

* API

  To set up an AI Gateway using the API:

  1. [Create an API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) with the following permissions:

     * `AI Gateway - Read`
     * `AI Gateway - Edit`

  2. Get your [Account ID](https://developers.cloudflare.com/fundamentals/account/find-account-and-zone-ids/).

  3. Using that API token and Account ID, send a [`POST` request](https://developers.cloudflare.com/api/resources/ai_gateway/methods/create/) to the Cloudflare API.

## Connect Your AI Provider

1. In the AI Gateway section, select the gateway you created.
2. Select **Workers AI** as your provider to set up an endpoint specific to Workers AI. You will receive an endpoint URL for sending requests.

## Configure Your Workers AI

1. Go to **AI** > **Workers AI** in the Cloudflare dashboard.

2. Select **Use REST API** and follow the steps to create and copy the API token and Account ID.

3. **Send Requests to Workers AI**: Use the provided API endpoint. For example, you can run a model via the API using a curl command. Replace `{account_id}`, `{gateway_id}` and `{cf_api_token}` with your actual account ID and API token:

   ```bash
   curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/@cf/meta/llama-3.1-8b-instruct \
   --header 'Authorization: Bearer {cf_api_token}' \
   --header 'Content-Type: application/json' \
   --data '{"prompt": "What is Cloudflare?"}'
   ```

The expected output would be similar to :

```bash
{"result":{"response":"I'd be happy to explain what Cloudflare is.\n\nCloudflare is a cloud-based service that provides a range of features to help protect and improve the performance, security, and reliability of websites, applications, and other online services. Think of it as a shield for your online presence!\n\nHere are some of the key things Cloudflare does:\n\n1. **Content Delivery Network (CDN)**: Cloudflare has a network of servers all over the world. When you visit a website that uses Cloudflare, your request is sent to the nearest server, which caches a copy of the website's content. This reduces the time it takes for the content to load, making your browsing experience faster.\n2. **DDoS Protection**: Cloudflare protects against Distributed Denial-of-Service (DDoS) attacks. This happens when a website is overwhelmed with traffic from multiple sources to make it unavailable. Cloudflare filters out this traffic, ensuring your site remains accessible.\n3. **Firewall**: Cloudflare acts as an additional layer of security, filtering out malicious traffic and hacking attempts, such as SQL injection or cross-site scripting (XSS) attacks.\n4. **SSL Encryption**: Cloudflare offers free SSL encryption, which secure sensitive information (like passwords, credit card numbers, and browsing data) with an HTTPS connection (the \"S\" stands for Secure).\n5. **Bot Protection**: Cloudflare has an AI-driven system that identifies and blocks bots trying to exploit vulnerabilities or scrape your content.\n6. **Analytics**: Cloudflare provides insights into website traffic, helping you understand your audience and make informed decisions.\n7. **Cybersecurity**: Cloudflare offers advanced security features, such as intrusion protection, DNS filtering, and Web Application Firewall (WAF) protection.\n\nOverall, Cloudflare helps protect against cyber threats, improves website performance, and enhances security for online businesses, bloggers, and individuals who need to establish a strong online presence.\n\nWould you like to know more about a specific aspect of Cloudflare?"},"success":true,"errors":[],"messages":[]}%
```

## View Analytics

Monitor your AI Gateway to view usage metrics.

1. Go to **AI** > **AI Gateway** in the dashboard.
2. Select your gateway to view metrics such as request counts, token usage, caching efficiency, errors, and estimated costs. You can also turn on additional configurations like logging and rate limiting.

## Optional - Next steps

To build more with Workers, refer to [Tutorials](https://developers.cloudflare.com/workers/tutorials/).

If you have any questions, need assistance, or would like to share your project, join the Cloudflare Developer community on [Discord](https://discord.cloudflare.com) to connect with other developers and the Cloudflare team. ---
title: Deploy a Worker that connects to OpenAI via AI Gateway · Cloudflare AI
  Gateway docs
description: Learn how to deploy a Worker that makes calls to OpenAI through AI Gateway
lastUpdated: 2025-07-11T16:03:39.000Z
chatbotDeprioritize: false
tags: AI
source_url:
  html: https://developers.cloudflare.com/ai-gateway/tutorials/deploy-aig-worker/
  md: https://developers.cloudflare.com/ai-gateway/tutorials/deploy-aig-worker/index.md
---

In this tutorial, you will learn how to deploy a Worker that makes calls to OpenAI through AI Gateway. AI Gateway helps you better observe and control your AI applications with more analytics, caching, rate limiting, and logging.

This tutorial uses the most recent v4 OpenAI node library, an update released in August 2023.

## Before you start

All of the tutorials assume you have already completed the [Get started guide](https://developers.cloudflare.com/workers/get-started/guide/), which gets you set up with a Cloudflare Workers account, [C3](https://github.com/cloudflare/workers-sdk/tree/main/packages/create-cloudflare), and [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/).

## 1. Create an AI Gateway and OpenAI API key

On the AI Gateway page in the Cloudflare dashboard, create a new AI Gateway by clicking the plus button on the top right. You should be able to name the gateway as well as the endpoint. Click on the API Endpoints button to copy the endpoint. You can choose from provider-specific endpoints such as OpenAI, HuggingFace, and Replicate. Or you can use the universal endpoint that accepts a specific schema and supports model fallback and retries.

For this tutorial, we will be using the OpenAI provider-specific endpoint, so select OpenAI in the dropdown and copy the new endpoint.

You will also need an OpenAI account and API key for this tutorial. If you do not have one, create a new OpenAI account and create an API key to continue with this tutorial. Make sure to store your API key somewhere safe so you can use it later.

## 2. Create a new Worker

Create a Worker project in the command line:

* npm

  ```sh
  npm create cloudflare@latest -- openai-aig
  ```

* yarn

  ```sh
  yarn create cloudflare openai-aig
  ```

* pnpm

  ```sh
  pnpm create cloudflare@latest openai-aig
  ```

For setup, select the following options:

* For *What would you like to start with?*, choose `Hello World example`.
* For *Which template would you like to use?*, choose `Worker only`.
* For *Which language do you want to use?*, choose `JavaScript`.
* For *Do you want to use git for version control?*, choose `Yes`.
* For *Do you want to deploy your application?*, choose `No` (we will be making some changes before deploying).

Go to your new open Worker project:

```sh
cd openai-aig
```

Inside of your new openai-aig directory, find and open the `src/index.js` file. You will configure this file for most of the tutorial.

Initially, your generated `index.js` file should look like this:

```js
export default {
  async fetch(request, env, ctx) {
    return new Response("Hello World!");
  },
};
```

## 3. Configure OpenAI in your Worker

With your Worker project created, we can learn how to make your first request to OpenAI. You will use the OpenAI node library to interact with the OpenAI API. Install the OpenAI node library with `npm`:

* npm

  ```sh
  npm i openai
  ```

* yarn

  ```sh
  yarn add openai
  ```

* pnpm

  ```sh
  pnpm add openai
  ```

In your `src/index.js` file, add the import for `openai` above `export default`:

```js
import OpenAI from "openai";
```

Within your `fetch` function, set up the configuration and instantiate your `OpenAIApi` client with the AI Gateway endpoint you created:

```js
import OpenAI from "openai";


export default {
  async fetch(request, env, ctx) {
    const openai = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
      baseURL:
        "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai", // paste your AI Gateway endpoint here
    });
  },
};
```

To make this work, you need to use [`wrangler secret put`](https://developers.cloudflare.com/workers/wrangler/commands/#put) to set your `OPENAI_API_KEY`. This will save the API key to your environment so your Worker can access it when deployed. This key is the API key you created earlier in the OpenAI dashboard:

* npm

  ```sh
  npx wrangler secret put OPENAI_API_KEY
  ```

* yarn

  ```sh
  yarn wrangler secret put OPENAI_API_KEY
  ```

* pnpm

  ```sh
  pnpm wrangler secret put OPENAI_API_KEY
  ```

To make this work in local development, create a new file `.dev.vars` in your Worker project and add this line. Make sure to replace `OPENAI_API_KEY` with your own OpenAI API key:

```txt
OPENAI_API_KEY = " "
```

## 4. Make an OpenAI request

Now we can make a request to the OpenAI [Chat Completions API](https://platform.openai.com/docs/guides/gpt/chat-completions-api).

You can specify what model you'd like, the role and prompt, as well as the max number of tokens you want in your total request.

```js
import OpenAI from "openai";


export default {
  async fetch(request, env, ctx) {
    const openai = new OpenAI({
      apiKey: env.OPENAI_API_KEY,
      baseURL:
        "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai",
    });


    try {
      const chatCompletion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: "What is a neuron?" }],
        max_tokens: 100,
      });


      const response = chatCompletion.choices[0].message;


      return new Response(JSON.stringify(response));
    } catch (e) {
      return new Response(e);
    }
  },
};
```

## 5. Deploy your Worker application

To deploy your application, run the `npx wrangler deploy` command to deploy your Worker application:

* npm

  ```sh
  npx wrangler deploy
  ```

* yarn

  ```sh
  yarn wrangler deploy
  ```

* pnpm

  ```sh
  pnpm wrangler deploy
  ```

You can now preview your Worker at \ .\ .workers.dev.

## 6. Review your AI Gateway

When you go to AI Gateway in your Cloudflare dashboard, you should see your recent request being logged. You can also [tweak your settings](https://developers.cloudflare.com/ai-gateway/configuration/) to manage your logs, caching, and rate limiting settings. ---
title: Non-realtime WebSockets API · Cloudflare AI Gateway docs
description: The Non-realtime WebSockets API allows you to establish persistent
  connections for AI requests without requiring repeated handshakes. This
  approach is ideal for applications that do not require real-time interactions
  but still benefit from reduced latency and continuous communication.
lastUpdated: 2025-05-07T14:47:06.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/websockets-api/non-realtime-api/
  md: https://developers.cloudflare.com/ai-gateway/websockets-api/non-realtime-api/index.md
---

The Non-realtime WebSockets API allows you to establish persistent connections for AI requests without requiring repeated handshakes. This approach is ideal for applications that do not require real-time interactions but still benefit from reduced latency and continuous communication.

## Set up WebSockets API

1. Generate an AI Gateway token with appropriate AI Gateway Run and opt in to using an authenticated gateway.

2. Modify your Universal Endpoint URL by replacing `https://` with `wss://` to initiate a WebSocket connection:

   ```plaintext
   wss://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}
   ```

3. Open a WebSocket connection authenticated with a Cloudflare token with the AI Gateway Run permission.

Note

Alternatively, we also support authentication via the `sec-websocket-protocol` header if you are using a browser WebSocket.

## Example request

```javascript
import WebSocket from "ws";


const ws = new WebSocket(
  "wss://gateway.ai.cloudflare.com/v1/my-account-id/my-gateway/",
  {
    headers: {
      "cf-aig-authorization": "Bearer AI_GATEWAY_TOKEN",
    },
  },
);


ws.send(
  JSON.stringify({
    type: "universal.create",
    request: {
      eventId: "my-request",
      provider: "workers-ai",
      endpoint: "@cf/meta/llama-3.1-8b-instruct",
      headers: {
        Authorization: "Bearer WORKERS_AI_TOKEN",
        "Content-Type": "application/json",
      },
      query: {
        prompt: "tell me a joke",
      },
    },
  }),
);


ws.on("message", function incoming(message) {
  console.log(message.toString());
});
```

## Example response

```json
{
  "type": "universal.created",
  "metadata": {
    "cacheStatus": "MISS",
    "eventId": "my-request",
    "logId": "01JC3R94FRD97JBCBX3S0ZAXKW",
    "step": "0",
    "contentType": "application/json"
  },
  "response": {
    "result": {
      "response": "Why was the math book sad? Because it had too many problems. Would you like to hear another one?"
    },
    "success": true,
    "errors": [],
    "messages": []
  }
}
```

## Example streaming request

For streaming requests, AI Gateway sends an initial message with request metadata indicating the stream is starting:

```json
{
  "type": "universal.created",
  "metadata": {
    "cacheStatus": "MISS",
    "eventId": "my-request",
    "logId": "01JC40RB3NGBE5XFRZGBN07572",
    "step": "0",
    "contentType": "text/event-stream"
  }
}
```

After this initial message, all streaming chunks are relayed in real-time to the WebSocket connection as they arrive from the inference provider. Only the `eventId` field is included in the metadata for these streaming chunks. The `eventId` allows AI Gateway to include a client-defined ID with each message, even in a streaming WebSocket environment.

```json
{
  "type": "universal.stream",
  "metadata": {
    "eventId": "my-request"
  },
  "response": {
    "response": "would"
  }
}
```

Once all chunks for a request have been streamed, AI Gateway sends a final message to signal the completion of the request. For added flexibility, this message includes all the metadata again, even though it was initially provided at the start of the streaming process.

```json
{
  "type": "universal.done",
  "metadata": {
    "cacheStatus": "MISS",
    "eventId": "my-request",
    "logId": "01JC40RB3NGBE5XFRZGBN07572",
    "step": "0",
    "contentType": "text/event-stream"
  }
}
``` ---
title: Realtime WebSockets API · Cloudflare AI Gateway docs
description: Some AI providers support real-time, low-latency interactions over
  WebSockets. AI Gateway allows seamless integration with these APIs, supporting
  multimodal interactions such as text, audio, and video.
lastUpdated: 2025-05-07T14:47:06.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/websockets-api/realtime-api/
  md: https://developers.cloudflare.com/ai-gateway/websockets-api/realtime-api/index.md
---

Some AI providers support real-time, low-latency interactions over WebSockets. AI Gateway allows seamless integration with these APIs, supporting multimodal interactions such as text, audio, and video.

## Supported Providers

* [OpenAI](https://platform.openai.com/docs/guides/realtime-websocket)
* [Google AI Studio](https://ai.google.dev/gemini-api/docs/multimodal-live)
* [Cartesia](https://docs.cartesia.ai/api-reference/tts/tts)
* [ElevenLabs](https://elevenlabs.io/docs/conversational-ai/api-reference/conversational-ai/websocket)

## Authentication

For real-time WebSockets, authentication can be done using:

* Headers (for non-browser environments)
* `sec-websocket-protocol` (for browsers)

## Examples

### OpenAI

```javascript
import WebSocket from "ws";


const url =
  "wss://gateway.ai.cloudflare.com/v1/ / /openai?model=gpt-4o-realtime-preview-2024-12-17";
const ws = new WebSocket(url, {
  headers: {
    "cf-aig-authorization": process.env.CLOUDFLARE_API_KEY,
    Authorization: "Bearer " + process.env.OPENAI_API_KEY,
    "OpenAI-Beta": "realtime=v1",
  },
});


ws.on("open", () => console.log("Connected to server."));
ws.on("message", (message) => console.log(JSON.parse(message.toString())));


ws.send(
  JSON.stringify({
    type: "response.create",
    response: { modalities: ["text"], instructions: "Tell me a joke" },
  }),
);
```

### Google AI Studio

```javascript
const ws = new WebSocket(
  "wss://gateway.ai.cloudflare.com/v1/ / /google?api_key= ",
  ["cf-aig-authorization. "],
);


ws.on("open", () => console.log("Connected to server."));
ws.on("message", (message) => console.log(message.data));


ws.send(
  JSON.stringify({
    setup: {
      model: "models/gemini-2.0-flash-exp",
      generationConfig: { responseModalities: ["TEXT"] },
    },
  }),
);
```

### Cartesia

```javascript
const ws = new WebSocket(
  "wss://gateway.ai.cloudflare.com/v1/ / /cartesia?cartesia_version=2024-06-10&api_key= ",
  ["cf-aig-authorization. "],
);


ws.on("open", function open() {
  console.log("Connected to server.");
});


ws.on("message", function incoming(message) {
  console.log(message.data);
});


ws.send(
  JSON.stringify({
    model_id: "sonic",
    transcript: "Hello, world! I'm generating audio on ",
    voice: { mode: "id", id: "a0e99841-438c-4a64-b679-ae501e7d6091" },
    language: "en",
    context_id: "happy-monkeys-fly",
    output_format: {
      container: "raw",
      encoding: "pcm_s16le",
      sample_rate: 8000,
    },
    add_timestamps: true,
    continue: true,
  }),
);
```

### ElevenLabs

```javascript
const ws = new WebSocket(
  "wss://gateway.ai.cloudflare.com/v1/ / /elevenlabs?agent_id= ",
  [
    "xi-api-key. ",
    "cf-aig-authorization. ",
  ],
);


ws.on("open", function open() {
  console.log("Connected to server.");
});


ws.on("message", function incoming(message) {
  console.log(message.data);
});


ws.send(
  JSON.stringify({
    text: "This is a sample text ",
    voice_settings: { stability: 0.8, similarity_boost: 0.8 },
    generation_config: { chunk_length_schedule: [120, 160, 250, 290] },
  }),
);
``` ---
title: Workers Logpush · Cloudflare AI Gateway docs
description: >-
  AI Gateway allows you to securely export logs to an external storage location,
  where you can decrypt and process them.

  You can toggle Workers Logpush on and off in the Cloudflare dashboard
  settings. This product is available on the Workers Paid plan. For pricing
  information, refer to Pricing.
lastUpdated: 2025-05-14T14:14:22.000Z
chatbotDeprioritize: false
source_url:
  html: https://developers.cloudflare.com/ai-gateway/observability/logging/logpush/
  md: https://developers.cloudflare.com/ai-gateway/observability/logging/logpush/index.md
---

AI Gateway allows you to securely export logs to an external storage location, where you can decrypt and process them. You can toggle Workers Logpush on and off in the [Cloudflare dashboard](https://dash.cloudflare.com) settings. This product is available on the Workers Paid plan. For pricing information, refer to [Pricing](https://developers.cloudflare.com/ai-gateway/reference/pricing).

This guide explains how to set up Workers Logpush for AI Gateway, generate an RSA key pair for encryption, and decrypt the logs once they are received.

You can store up to 10 million logs per gateway. If your limit is reached, new logs will stop being saved and will not be exported through Workers Logpush. To continue saving and exporting logs, you must delete older logs to free up space for new logs. Workers Logpush has a limit of 4 jobs and a maximum request size of 1 MB per log.

Note

To export logs using Workers Logpush, you must have logs turned on for the gateway.

Need a higher limit?

To request an increase to a limit, complete the [Limit Increase Request Form](https://forms.gle/cuXu1QnQCrSNkkaS8). If the limit can be increased, Cloudflare will contact you with next steps.

## How logs are encrypted

We employ a hybrid encryption model efficiency and security. Initially, an AES key is generated for each log. This AES key is what actually encrypts the bulk of your data, chosen for its speed and security in handling large datasets efficiently.

Now, for securely sharing this AES key, we use RSA encryption. Here's what happens: the AES key, although lightweight, needs to be transmitted securely to the recipient. We encrypt this key with the recipient's RSA public key. This step leverages RSA's strength in secure key distribution, ensuring that only someone with the corresponding RSA private key can decrypt and use the AES key.

Once encrypted, both the AES-encrypted data and the RSA-encrypted AES key are sent together. Upon arrival, the recipient's system uses the RSA private key to decrypt the AES key. With the AES key now accessible, it is straightforward to decrypt the main data payload.

This method combines the best of both worlds: the efficiency of AES for data encryption with the secure key exchange capabilities of RSA, ensuring data integrity, confidentiality, and performance are all optimally maintained throughout the data lifecycle.

## Setting up Workers Logpush

To configure Workers Logpush for AI Gateway, follow these steps:

## 1. Generate an RSA key pair locally

You need to generate a key pair to encrypt and decrypt the logs. This script will output your RSA privateKey and publicKey. Keep the private key secure, as it will be used to decrypt the logs. Below is a sample script to generate the keys using Node.js and OpenSSL.

* JavaScript

  ```js
  const crypto = require("crypto");


  const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });


  console.log(publicKey);
  console.log(privateKey);
  ```

  Run the script by executing the below code on your terminal. Replace `file name` with the name of your JavaScript file.

  ```bash
  node {file name}
  ```

* OpenSSL

  1. Generate private key: Use the following command to generate a RSA private key:

     ```bash
     openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:4096
     ```

  2. Generate public key: After generating the private key, you can extract the corresponding public key using:

     ```bash
     openssl rsa -pubout -in private_key.pem -out public_key.pem
     ```

## 2. Upload public key to gateway settings

Once you have generated the key pair, upload the public key to your AI Gateway settings. This key will be used to encrypt your logs. In order to enable Workers Logpush, you will need logs enabled for that gateway.

## 3. Set up Logpush

To set up Logpush, refer to [Logpush Get Started](https://developers.cloudflare.com/logs/get-started/).

## 4. Receive encrypted logs

After configuring Workers Logpush, logs will be sent encrypted using the public key you uploaded. To access the data, you will need to decrypt it using your private key. The logs will be sent to the object storage provider that you have selected.

## 5. Decrypt logs

To decrypt the encrypted log bodies and metadata from AI Gateway, you can use the following Node.js script or OpenSSL:

* JavaScript

  To decrypt the encrypted log bodies and metadata from AI Gateway, download the logs to a folder, in this case its named `my_log.log.gz`.

  Then copy this JavaScript file into the same folder and place your private key in the top variable.

  ```js
  const privateKeyStr = `-----BEGIN RSA PRIVATE KEY-----
  ....
  -----END RSA PRIVATE KEY-----`;


  const crypto = require("crypto");
  const privateKey = crypto.createPrivateKey(privateKeyStr);


  const fs = require("fs");
  const zlib = require("zlib");
  const readline = require("readline");


  async function importAESGCMKey(keyBuffer) {
    try {
      // Ensure the key length is valid for AES
      if ([128, 192, 256].includes(256)) {
        return await crypto.webcrypto.subtle.importKey(
          "raw",
          keyBuffer,
          {
            name: "AES-GCM",
            length: 256,
          },
          true, // Whether the key is extractable (true in this case to allow for export later if needed)
          ["encrypt", "decrypt"], // Use for encryption and decryption
        );
      } else {
        throw new Error("Invalid AES key length. Must be 128, 12, or 256 bits.");
      }
    } catch (error) {
      console.error("Failed to import key:", error);
      throw error;
    }
  }


  async function decryptData(encryptedData, aesKey, iv) {
    const decryptedData = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: iv },
      aesKey,
      encryptedData,
    );
    return new TextDecoder().decode(decryptedData);
  }


  async function decryptBase64(privateKey, data) {
    if (data.key === undefined) {
      return data;
    }


    const aesKeyBuf = crypto.privateDecrypt(
      {
        key: privateKey,
        oaepHash: "SHA256",
      },
      Buffer.from(data.key, "base64"),
    );
    const aesKey = await importAESGCMKey(aesKeyBuf);


    const decryptedData = await decryptData(
      Buffer.from(data.data, "base64"),
      aesKey,
      Buffer.from(data.iv, "base64"),
    );


    return decryptedData.toString();
  }


  async function run() {
    let lineReader = readline.createInterface({
      input: fs.createReadStream("my_log.log.gz").pipe(zlib.createGunzip()),
    });


    lineReader.on("line", async (line) => {
      line = JSON.parse(line);


      const { Metadata, RequestBody, ResponseBody, ...remaining } = line;


      console.log({
        ...remaining,
        Metadata: await decryptBase64(privateKey, Metadata),
        RequestBody: await decryptBase64(privateKey, RequestBody),
        ResponseBody: await decryptBase64(privateKey, ResponseBody),
      });
      console.log("--");
    });
  }


  run();
  ```

  Run the script by executing the below code on your terminal. Replace `file name` with the name of your JavaScript file.

  ```bash
  node {file name}
  ```

  The script reads the encrypted log file `(my_log.log.gz)`, decrypts the metadata, request body, and response body, and prints the decrypted data. Ensure you replace the `privateKey` variable with your actual private RSA key that you generated in step 1.

* OpenSSL

  1. Decrypt the encrypted log file using the private key.

  Assuming that the logs were encrypted with the public key (for example `public_key.pem`), you can use the private key (`private_key.pem`) to decrypt the log file.

  For example, if the encrypted logs are in a file named `encrypted_logs.bin`, you can decrypt it like this:

  ```bash
  openssl rsautl -decrypt -inkey private_key.pem -in encrypted_logs.bin -out decrypted_logs.txt
  ```

  * `-decrypt` tells OpenSSL that we want to decrypt the file.
  * `-inkey private_key.pem` specifies the private key that will be used to decrypt the logs.
  * `-in encrypted_logs.bin` is the encrypted log file.
  * `-out decrypted_logs.txt`decrypted logs will be saved into this file.

  1. View the decrypted logs Once decrypted, you can view the logs by simply running:

  ```bash
  cat decrypted_logs.txt
  ```

  This command will output the decrypted logs to the terminal.

---

## Provider Native

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers/](https://developers.cloudflare.com/ai-gateway/usage/providers/)

Page options # Provider Native

Here is a quick list of the providers we support:

- Amazon Bedrock
- Anthropic
- Azure OpenAI
- Cartesia
- Cerebras
- Cohere
- DeepSeek
- ElevenLabs
- Google AI Studio
- Google Vertex AI
- Groq
- HuggingFace
- Mistral AI
- OpenAI
- OpenRouter
- Perplexity
- Replicate
- xAI
- Workers AI

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Deploy a Worker that connects to OpenAI via AI Gateway

**來源**: [https://developers.cloudflare.com/ai-gateway/tutorials/deploy-aig-worker/](https://developers.cloudflare.com/ai-gateway/tutorials/deploy-aig-worker/)

Page options # Deploy a Worker that connects to OpenAI via AI Gateway

Last reviewed: almost 2 years ago In this tutorial, you will learn how to deploy a Worker that makes calls to OpenAI through AI Gateway. AI Gateway helps you better observe and control your AI applications with more analytics, caching, rate limiting, and logging.

This tutorial uses the most recent v4 OpenAI node library, an update released in August 2023.

## Before you start

All of the tutorials assume you have already completed the Get started guide, which gets you set up with a Cloudflare Workers account, C3 ↗, and Wrangler.

## 1. Create an AI Gateway and OpenAI API key

On the AI Gateway page in the Cloudflare dashboard, create a new AI Gateway by clicking the plus button on the top right. You should be able to name the gateway as well as the endpoint. Click on the API Endpoints button to copy the endpoint. You can choose from provider-specific endpoints such as OpenAI, HuggingFace, and Replicate. Or you can use the universal endpoint that accepts a specific schema and supports model fallback and retries.

For this tutorial, we will be using the OpenAI provider-specific endpoint, so select OpenAI in the dropdown and copy the new endpoint.

You will also need an OpenAI account and API key for this tutorial. If you do not have one, create a new OpenAI account and create an API key to continue with this tutorial. Make sure to store your API key somewhere safe so you can use it later.

## 2. Create a new Worker

Create a Worker project in the command line:

- npm
- yarn
- pnpm

Terminal window ```
npm create cloudflare@latest -- openai-aig
```

Terminal window ```
yarn create cloudflare openai-aig
```

Terminal window ```
pnpm create cloudflare@latest openai-aig
```

For setup, select the following options:

- For What would you like to start with?, choose Hello World example.
- For Which template would you like to use?, choose Worker only.
- For Which language do you want to use?, choose JavaScript.
- For Do you want to use git for version control?, choose Yes.
- For Do you want to deploy your application?, choose No (we will be making some changes before deploying).

Go to your new open Worker project:

Open your new project directory ```
cd openai-aig
```

Inside of your new openai-aig directory, find and open the src/index.js file. You will configure this file for most of the tutorial.

Initially, your generated index.js file should look like this:

```
export default {  async fetch(request, env, ctx) {    return new Response("Hello World!");  },};
```

## 3. Configure OpenAI in your Worker

With your Worker project created, we can learn how to make your first request to OpenAI. You will use the OpenAI node library to interact with the OpenAI API. Install the OpenAI node library with npm:

- npm
- yarn
- pnpm

Terminal window ```
npm i openai
```

Terminal window ```
yarn add openai
```

Terminal window ```
pnpm add openai
```

In your src/index.js file, add the import for openai above export default:

```
import OpenAI from "openai";
```

Within your fetch function, set up the configuration and instantiate your OpenAIApi client with the AI Gateway endpoint you created:

```
import OpenAI from "openai";
export default {  async fetch(request, env, ctx) {    const openai = new OpenAI({      apiKey: env.OPENAI_API_KEY,      baseURL:        "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai", // paste your AI Gateway endpoint here    });  },};
```

To make this work, you need to use wrangler secret put to set your OPENAI_API_KEY. This will save the API key to your environment so your Worker can access it when deployed. This key is the API key you created earlier in the OpenAI dashboard:

- npm
- yarn
- pnpm

Terminal window ```
npx wrangler secret put OPENAI_API_KEY
```

Terminal window ```
yarn wrangler secret put OPENAI_API_KEY
```

Terminal window ```
pnpm wrangler secret put OPENAI_API_KEY
```

To make this work in local development, create a new file .dev.vars in your Worker project and add this line. Make sure to replace OPENAI_API_KEY with your own OpenAI API key:

Save your API key locally ```
OPENAI_API_KEY = "<YOUR_OPENAI_API_KEY_HERE>"
```

## 4. Make an OpenAI request

Now we can make a request to the OpenAI Chat Completions API ↗.

You can specify what model you'd like, the role and prompt, as well as the max number of tokens you want in your total request.

```
import OpenAI from "openai";
export default {  async fetch(request, env, ctx) {    const openai = new OpenAI({      apiKey: env.OPENAI_API_KEY,      baseURL:        "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai",    });
    try {      const chatCompletion = await openai.chat.completions.create({        model: "gpt-4o-mini",        messages: [{ role: "user", content: "What is a neuron?" }],        max_tokens: 100,      });
      const response = chatCompletion.choices[0].message;
      return new Response(JSON.stringify(response));    } catch (e) {      return new Response(e);    }  },};
```

## 5. Deploy your Worker application

To deploy your application, run the npx wrangler deploy command to deploy your Worker application:

- npm
- yarn
- pnpm

Terminal window ```
npx wrangler deploy
```

Terminal window ```
yarn wrangler deploy
```

Terminal window ```
pnpm wrangler deploy
```

You can now preview your Worker at <YOUR_WORKER>.<YOUR_SUBDOMAIN>.workers.dev.

## 6. Review your AI Gateway

When you go to AI Gateway in your Cloudflare dashboard, you should see your recent request being logged. You can also tweak your settings to manage your logs, caching, and rate limiting settings.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Using AI Gateway

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/](https://developers.cloudflare.com/ai-gateway/usage/)

Page options # Using AI Gateway

## 

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Configuration

**來源**: [https://developers.cloudflare.com/ai-gateway/configuration/](https://developers.cloudflare.com/ai-gateway/configuration/)

Page options # Configuration

Configure your AI Gateway with multiple options and customizations.

- BYOK (Store Keys)
- Custom costs
- Manage gateways
- Request handling
- Fallbacks
- Authenticated Gateway

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Universal Endpoint

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/universal/](https://developers.cloudflare.com/ai-gateway/usage/universal/)

Page options # Universal Endpoint

Note

It is recommended to use the Dynamic Routes to implement model fallback feature

You can use the Universal Endpoint to contact every provider.

```
https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}
```

AI Gateway offers multiple endpoints for each Gateway you create - one endpoint per provider, and one Universal Endpoint. The Universal Endpoint requires some adjusting to your schema, but supports additional features. Some of these features are, for example, retrying a request if it fails the first time, or configuring a fallback model/provider.

You can use the Universal endpoint to contact every provider. The payload is expecting an array of message, and each message is an object with the following parameters:

- provider : the name of the provider you would like to direct this message to. Can be OpenAI, workers-ai, or any of our supported providers.
- endpoint: the pathname of the provider API you’re trying to reach. For example, on OpenAI it can be chat/completions, and for Workers AI this might be @cf/meta/llama-3.1-8b-instruct. See more in the sections that are specific to each provider.
- authorization: the content of the Authorization HTTP Header that should be used when contacting this provider. This usually starts with 'Token' or 'Bearer'.
- query: the payload as the provider expects it in their official API.

## cURL example

Request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id} \  --header 'Content-Type: application/json' \  --data '[  {    "provider": "workers-ai",    "endpoint": "@cf/meta/llama-3.1-8b-instruct",    "headers": {      "Authorization": "Bearer {cloudflare_token}",      "Content-Type": "application/json"    },    "query": {      "messages": [        {          "role": "system",          "content": "You are a friendly assistant"        },        {          "role": "user",          "content": "What is Cloudflare?"        }      ]    }  },  {    "provider": "openai",    "endpoint": "chat/completions",    "headers": {      "Authorization": "Bearer {open_ai_token}",      "Content-Type": "application/json"    },    "query": {      "model": "gpt-4o-mini",      "stream": true,      "messages": [        {          "role": "user",          "content": "What is Cloudflare?"        }      ]    }  }]'
```

The above will send a request to Workers AI Inference API, if it fails it will proceed to OpenAI. You can add as many fallbacks as you need, just by adding another JSON in the array.

## WebSockets API beta

The Universal Endpoint can also be accessed via a WebSockets API which provides a single persistent connection, enabling continuous communication. This API supports all AI providers connected to AI Gateway, including those that do not natively support WebSockets.

## WebSockets example

```
import WebSocket from "ws";const ws = new WebSocket(  "wss://gateway.ai.cloudflare.com/v1/my-account-id/my-gateway/",  {    headers: {      "cf-aig-authorization": "Bearer AI_GATEWAY_TOKEN",    },  },);
ws.send(  JSON.stringify({    type: "universal.create",    request: {      eventId: "my-request",      provider: "workers-ai",      endpoint: "@cf/meta/llama-3.1-8b-instruct",      headers: {        Authorization: "Bearer WORKERS_AI_TOKEN",        "Content-Type": "application/json",      },      query: {        prompt: "tell me a joke",      },    },  }),);
ws.on("message", function incoming(message) {  console.log(message.toString());});
```

## Workers Binding example

- wrangler.jsonc
- wrangler.toml

```
{  "ai": {    "binding": "AI"  }}
```

```
[ai]binding = "AI"
```

src/index.ts ```
type Env = {  AI: Ai;};
export default {  async fetch(request: Request, env: Env) {    return env.AI.gateway("my-gateway").run({      provider: "workers-ai",      endpoint: "@cf/meta/llama-3.1-8b-instruct",      headers: {        authorization: "Bearer my-api-token",      },      query: {        prompt: "tell me a joke",      },    });  },};
```

## Header configuration hierarchy

The Universal Endpoint allows you to set fallback models or providers and customize headers for each provider or request. You can configure headers at three levels:

1. Provider level: Headers specific to a particular provider.
2. Request level: Headers included in individual requests.
3. Gateway settings: Default headers configured in your gateway dashboard.

Since the same settings can be configured in multiple locations, AI Gateway applies a hierarchy to determine which configuration takes precedence:

- Provider-level headers override all other configurations.
- Request-level headers are used if no provider-level headers are set.
- Gateway-level settings are used only if no headers are configured at the provider or request levels.

This hierarchy ensures consistent behavior, prioritizing the most specific configurations. Use provider-level and request-level headers for fine-tuned control, and gateway settings for general defaults.

## Hierarchy example

This example demonstrates how headers set at different levels impact caching behavior:

- Request-level header: The cf-aig-cache-ttl is set to 3600 seconds, applying this caching duration to the request by default.
- Provider-level header: For the fallback provider (OpenAI), cf-aig-cache-ttl is explicitly set to 0 seconds, overriding the request-level header and disabling caching for responses when OpenAI is used as the provider.

This shows how provider-level headers take precedence over request-level headers, allowing for granular control of caching behavior.

Terminal window ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id} \  --header 'Content-Type: application/json' \  --header 'cf-aig-cache-ttl: 3600' \  --data '[    {      "provider": "workers-ai",      "endpoint": "@cf/meta/llama-3.1-8b-instruct",      "headers": {        "Authorization": "Bearer {cloudflare_token}",        "Content-Type": "application/json"      },      "query": {        "messages": [          {            "role": "system",            "content": "You are a friendly assistant"          },          {            "role": "user",            "content": "What is Cloudflare?"          }        ]      }    },    {      "provider": "openai",      "endpoint": "chat/completions",      "headers": {        "Authorization": "Bearer {open_ai_token}",        "Content-Type": "application/json",        "cf-aig-cache-ttl": "0"      },      "query": {        "model": "gpt-4o-mini",        "stream": true,        "messages": [          {            "role": "user",            "content": "What is Cloudflare?"          }        ]      }    }  ]'
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Observability

**來源**: [https://developers.cloudflare.com/ai-gateway/observability/](https://developers.cloudflare.com/ai-gateway/observability/)

Page options # Observability

Observability is the practice of instrumenting systems to collect metrics, and logs enabling better monitoring, troubleshooting, and optimization of applications.

- Analytics
- Costs
- Custom metadata
- Logging

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Pricing

**來源**: [https://developers.cloudflare.com/ai-gateway/reference/pricing](https://developers.cloudflare.com/ai-gateway/reference/pricing)

Page options # Pricing

AI Gateway is available to use on all plans.

AI Gateway's core features available today are offered for free, and all it takes is a Cloudflare account and one line of code to get started. Core features include: dashboard analytics, caching, and rate limiting.

We will continue to build and expand AI Gateway. Some new features may be additional core features that will be free while others may be part of a premium plan. We will announce these as they become available.

You can monitor your usage in the AI Gateway dashboard.

## Persistent logs

Note

Billing for persistent logs has not yet started. Users on paid plans can store logs beyond the included volume of 200,000 logs stored a month without being charged during this period. (Users on the free plan remain limited to the 100,000 logs cap for their plan.) We will provide plenty of advanced notice before charging begins for persistent log storage.

Persistent logs are available on all plans, with a free allocation for both free and paid plans. Charges for additional logs beyond those limits are based on the number of logs stored per month.

### Free allocation and overage pricing

| Plan | Free logs stored | Overage pricing |
| --- | --- | --- |
| Workers Free | 100,000 logs total | N/A - Upgrade to Workers Paid |
| Workers Paid | 200,000 logs total | $8 per 100,000 logs stored per month |

Allocations are based on the total logs stored across all gateways. For guidance on managing or deleting logs, please see our documentation.

For example, if you are a Workers Paid plan user storing 300,000 logs, you will be charged for the excess 100,000 logs (300,000 total logs - 200,000 free logs), resulting in an $8/month charge.

## Logpush

Logpush is only available on the Workers Paid plan.

|  | Paid plan |
| --- | --- |
| Requests | 10 million / month, +$0.05/million |

## Fine print

Prices subject to change. If you are an Enterprise customer, reach out to your account team to confirm pricing details.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Integrations

**來源**: [https://developers.cloudflare.com/ai-gateway/integrations/](https://developers.cloudflare.com/ai-gateway/integrations/)

Page options # Integrations

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Provider Native

**來源**: [https://developers.cloudflare.com/ai-gateway/usage/providers](https://developers.cloudflare.com/ai-gateway/usage/providers)

Page options # Provider Native

Here is a quick list of the providers we support:

- Amazon Bedrock
- Anthropic
- Azure OpenAI
- Cartesia
- Cerebras
- Cohere
- DeepSeek
- ElevenLabs
- Google AI Studio
- Google Vertex AI
- Groq
- HuggingFace
- Mistral AI
- OpenAI
- OpenRouter
- Perplexity
- Replicate
- xAI
- Workers AI

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Create your first AI Gateway using Workers AI

**來源**: [https://developers.cloudflare.com/ai-gateway/tutorials/create-first-aig-workers/](https://developers.cloudflare.com/ai-gateway/tutorials/create-first-aig-workers/)

Page options # Create your first AI Gateway using Workers AI

Last reviewed: about 1 year ago This tutorial guides you through creating your first AI Gateway using Workers AI on the Cloudflare dashboard. The intended audience is beginners who are new to AI Gateway and Workers AI. Creating an AI Gateway enables the user to efficiently manage and secure AI requests, allowing them to utilize AI models for tasks such as content generation, data processing, or predictive analysis with enhanced control and performance.

## Sign up and log in

1. Sign up: If you do not have a Cloudflare account, sign up ↗.
2. Log in: Access the Cloudflare dashboard by logging in to the Cloudflare dashboard ↗.

## Create gateway

Then, create a new AI Gateway.

- Dashboard
- API

Create a Gateway

1. Log into the Cloudflare dashboard ↗ and select your account.
2. Go to AI > AI Gateway.
3. Select Create Gateway.
4. Enter your Gateway name. Note: Gateway name has a 64 character limit.
5. Select Create.

To set up an AI Gateway using the API:

1. Create an API token with the following permissions:

AI Gateway - Read
AI Gateway - Edit
2. AI Gateway - Read
3. AI Gateway - Edit
4. Get your Account ID.
5. Using that API token and Account ID, send a POST request to the Cloudflare API.

## Connect Your AI Provider

1. In the AI Gateway section, select the gateway you created.
2. Select Workers AI as your provider to set up an endpoint specific to Workers AI.
You will receive an endpoint URL for sending requests.

## Configure Your Workers AI

1. Go to AI > Workers AI in the Cloudflare dashboard.
2. Select Use REST API and follow the steps to create and copy the API token and Account ID.
3. Send Requests to Workers AI: Use the provided API endpoint. For example, you can run a model via the API using a curl command. Replace {account_id}, {gateway_id} and {cf_api_token} with your actual account ID and API token:
Terminal windowcurl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/workers-ai/@cf/meta/llama-3.1-8b-instruct \--header 'Authorization: Bearer {cf_api_token}' \--header 'Content-Type: application/json' \--data '{"prompt": "What is Cloudflare?"}'

The expected output would be similar to :

Terminal window ```
{"result":{"response":"I'd be happy to explain what Cloudflare is.\n\nCloudflare is a cloud-based service that provides a range of features to help protect and improve the performance, security, and reliability of websites, applications, and other online services. Think of it as a shield for your online presence!\n\nHere are some of the key things Cloudflare does:\n\n1. **Content Delivery Network (CDN)**: Cloudflare has a network of servers all over the world. When you visit a website that uses Cloudflare, your request is sent to the nearest server, which caches a copy of the website's content. This reduces the time it takes for the content to load, making your browsing experience faster.\n2. **DDoS Protection**: Cloudflare protects against Distributed Denial-of-Service (DDoS) attacks. This happens when a website is overwhelmed with traffic from multiple sources to make it unavailable. Cloudflare filters out this traffic, ensuring your site remains accessible.\n3. **Firewall**: Cloudflare acts as an additional layer of security, filtering out malicious traffic and hacking attempts, such as SQL injection or cross-site scripting (XSS) attacks.\n4. **SSL Encryption**: Cloudflare offers free SSL encryption, which secure sensitive information (like passwords, credit card numbers, and browsing data) with an HTTPS connection (the \"S\" stands for Secure).\n5. **Bot Protection**: Cloudflare has an AI-driven system that identifies and blocks bots trying to exploit vulnerabilities or scrape your content.\n6. **Analytics**: Cloudflare provides insights into website traffic, helping you understand your audience and make informed decisions.\n7. **Cybersecurity**: Cloudflare offers advanced security features, such as intrusion protection, DNS filtering, and Web Application Firewall (WAF) protection.\n\nOverall, Cloudflare helps protect against cyber threats, improves website performance, and enhances security for online businesses, bloggers, and individuals who need to establish a strong online presence.\n\nWould you like to know more about a specific aspect of Cloudflare?"},"success":true,"errors":[],"messages":[]}%
```

## View Analytics

Monitor your AI Gateway to view usage metrics.

1. Go to AI > AI Gateway in the dashboard.
2. Select your gateway to view metrics such as request counts, token usage, caching efficiency, errors, and estimated costs. You can also turn on additional configurations like logging and rate limiting.

## Optional - Next steps

To build more with Workers, refer to Tutorials.

If you have any questions, need assistance, or would like to share your project, join the Cloudflare Developer community on Discord ↗ to connect with other developers and the Cloudflare team.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Set up Evaluations

**來源**: [https://developers.cloudflare.com/ai-gateway/evaluations/set-up-evaluations/](https://developers.cloudflare.com/ai-gateway/evaluations/set-up-evaluations/)

Page options # Set up Evaluations

This guide walks you through the process of setting up an evaluation in AI Gateway. These steps are done in the Cloudflare dashboard ↗.

## 1. Select or create a dataset

Datasets are collections of logs stored for analysis that can be used in an evaluation. You can create datasets by applying filters in the Logs tab. Datasets will update automatically based on the set filters.

### Set up a dataset from the Logs tab

1. Apply filters to narrow down your logs. Filter options include provider, number of tokens, request status, and more.
2. Select Create Dataset to store the filtered logs for future analysis.

You can manage datasets by selecting Manage datasets from the Logs tab.

Note

Please keep in mind that datasets currently use AND joins, so there can only be one item per filter (for example, one model or one provider). Future updates will allow more flexibility in dataset creation.

### List of available filters

| Filter category | Filter options | Filter by description |
| --- | --- | --- |
| Status | error, status | error type or status. |
| Cache | cached, not cached | based on whether they were cached or not. |
| Provider | specific providers | the selected AI provider. |
| AI Models | specific models | the selected AI model. |
| Cost | less than, greater than | cost, specifying a threshold. |
| Request type | Universal, Workers AI Binding, WebSockets | the type of request. |
| Tokens | Total tokens, Tokens In, Tokens Out | token count (less than or greater than). |
| Duration | less than, greater than | request duration. |
| Feedback | equals, does not equal (thumbs up, thumbs down, no feedback) | feedback type. |
| Metadata Key | equals, does not equal | specific metadata keys. |
| Metadata Value | equals, does not equal | specific metadata values. |
| Log ID | equals, does not equal | a specific Log ID. |
| Event ID | equals, does not equal | a specific Event ID. |

## 2. Select evaluators

After creating a dataset, choose the evaluation parameters:

- Cost: Calculates the average cost of inference requests within the dataset (only for requests with cost data).
- Speed: Calculates the average duration of inference requests within the dataset.
- Performance:

Human feedback: measures performance based on human feedback, calculated by the % of thumbs up on the logs, annotated from the Logs tab.
- Human feedback: measures performance based on human feedback, calculated by the % of thumbs up on the logs, annotated from the Logs tab.

Note

Additional evaluators will be introduced in future updates to expand performance analysis capabilities.

## 3. Name, review, and run the evaluation

1. Create a unique name for your evaluation to reference it in the dashboard.
2. Review the selected dataset and evaluators.
3. Select Run to start the process.

## 4. Review and analyze results

Evaluation results will appear in the Evaluations tab. The results show the status of the evaluation (for example, in progress, completed, or error). Metrics for the selected evaluators will be displayed, excluding any logs with missing fields. You will also see the number of logs used to calculate each metric.

While datasets automatically update based on filters, evaluations do not. You will have to create a new evaluation if you want to evaluate new logs.

Use these insights to optimize based on your application's priorities. Based on the results, you may choose to:

- Change the model or provider
- Adjust your prompts
- Explore further optimizations, such as setting up Retrieval Augmented Generation (RAG)

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Logging

**來源**: [https://developers.cloudflare.com/ai-gateway/observability/logging](https://developers.cloudflare.com/ai-gateway/observability/logging)

Page options # Logging

Logging is a fundamental building block for application development. Logs provide insights during the early stages of development and are often critical to understanding issues occurring in production.

Your AI Gateway dashboard shows logs of individual requests, including the user prompt, model response, provider, timestamp, request status, token usage, cost, and duration. These logs persist, giving you the flexibility to store them for your preferred duration and do more with valuable request data.

By default, each gateway can store up to 10 million logs. You can customize this limit per gateway in your gateway settings to align with your specific requirements. If your storage limit is reached, new logs will stop being saved. To continue saving logs, you must delete older logs to free up space for new logs.
To learn more about your plan limits, refer to Limits.

We recommend using an authenticated gateway when storing logs to prevent unauthorized access and protects against invalid requests that can inflate log storage usage and make it harder to find the data you need. Learn more about setting up an authenticated gateway.

## Default configuration

Logs, which include metrics as well as request and response data, are enabled by default for each gateway. This logging behavior will be uniformly applied to all requests in the gateway. If you are concerned about privacy or compliance and want to turn log collection off, you can go to settings and opt out of logs. If you need to modify the log settings for specific requests, you can override this setting on a per-request basis.

To change the default log configuration in the dashboard:

1. In the Cloudflare dashboard, go to the AI Gateway page.
  Go to AI Gateway
2. Select Settings.
3. Change the Logs setting to your preference.

## Per-request logging

To override the default logging behavior set in the settings tab, you can define headers on a per-request basis.

### Collect logs (cf-aig-collect-log)

The cf-aig-collect-log header allows you to bypass the default log setting for the gateway. If the gateway is configured to save logs, the header will exclude the log for that specific request. Conversely, if logging is disabled at the gateway level, this header will save the log for that request.

In the example below, we use cf-aig-collect-log to bypass the default setting to avoid saving the log.

Terminal window ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  --header "Authorization: Bearer $TOKEN" \  --header 'Content-Type: application/json' \  --header 'cf-aig-collect-log: false \  --data ' {        "model": "gpt-4o-mini",        "messages": [          {            "role": "user",            "content": "What is the email address and phone number of user123?"          }        ]      }'
```

## Managing log storage

To manage your log storage effectively, you can:

- Set Storage Limits: Configure a limit on the number of logs stored per gateway in your gateway settings to ensure you only pay for what you need.
- Enable Automatic Log Deletion: Activate the Automatic Log Deletion feature in your gateway settings to automatically delete the oldest logs once the log limit you've set or the default storage limit of 10 million logs is reached. This ensures new logs are always saved without manual intervention.

## How to delete logs

To manage your log storage effectively and ensure continuous logging, you can delete logs using the following methods:

### Automatic Log Deletion

​To maintain continuous logging within your gateway's storage constraints, enable Automatic Log Deletion in your Gateway settings. This feature automatically deletes the oldest logs once the log limit you've set or the default storage limit of 10 million logs is reached, ensuring new logs are saved without manual intervention.

### Manual deletion

To manually delete logs through the dashboard, navigate to the Logs tab in the dashboard. Use the available filters such as status, cache, provider, cost, or any other options in the dropdown to refine the logs you wish to delete. Once filtered, select Delete logs to complete the action.

See full list of available filters and their descriptions below:

| Filter category | Filter options | Filter by description |
| --- | --- | --- |
| Status | error, status | error type or status. |
| Cache | cached, not cached | based on whether they were cached or not. |
| Provider | specific providers | the selected AI provider. |
| AI Models | specific models | the selected AI model. |
| Cost | less than, greater than | cost, specifying a threshold. |
| Request type | Universal, Workers AI Binding, WebSockets | the type of request. |
| Tokens | Total tokens, Tokens In, Tokens Out | token count (less than or greater than). |
| Duration | less than, greater than | request duration. |
| Feedback | equals, does not equal (thumbs up, thumbs down, no feedback) | feedback type. |
| Metadata Key | equals, does not equal | specific metadata keys. |
| Metadata Value | equals, does not equal | specific metadata values. |
| Log ID | equals, does not equal | a specific Log ID. |
| Event ID | equals, does not equal | a specific Event ID. |

### API deletion

You can programmatically delete logs using the AI Gateway API. For more comprehensive information on the DELETE logs endpoint, check out the Cloudflare API documentation.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Custom metadata

**來源**: [https://developers.cloudflare.com/ai-gateway/configuration/custom-metadata/](https://developers.cloudflare.com/ai-gateway/configuration/custom-metadata/)

Page options # Custom metadata

Custom metadata in AI Gateway allows you to tag requests with user IDs or other identifiers, enabling better tracking and analysis of your requests. Metadata values can be strings, numbers, or booleans, and will appear in your logs, making it easy to search and filter through your data.

## Key Features

- Custom Tagging: Add user IDs, team names, test indicators, and other relevant information to your requests.
- Enhanced Logging: Metadata appears in your logs, allowing for detailed inspection and troubleshooting.
- Search and Filter: Use metadata to efficiently search and filter through logged requests.

Note

AI Gateway allows you to pass up to five custom metadata entries per request. If more than five entries are provided, only the first five will be saved; additional entries will be ignored. Ensure your custom metadata is limited to five entries to avoid unprocessed or lost data.

## Supported Metadata Types

- String
- Number
- Boolean

Note

Objects are not supported as metadata values.

## Implementations

### Using cURL

To include custom metadata in your request using cURL:

Terminal window ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai/chat/completions \  --header 'Authorization: Bearer {api_token}' \  --header 'Content-Type: application/json' \  --header 'cf-aig-metadata: {"team": "AI", "user": 12345, "test":true}' \  --data '{"model": "gpt-4o", "messages": [{"role": "user", "content": "What should I eat for lunch?"}]}'
```

### Using SDK

To include custom metadata in your request using the OpenAI SDK:

```
import OpenAI from "openai";
export default { async fetch(request, env, ctx) {   const openai = new OpenAI({     apiKey: env.OPENAI_API_KEY,     baseURL: "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai",   });
   try {     const chatCompletion = await openai.chat.completions.create(       {         model: "gpt-4o",         messages: [{ role: "user", content: "What should I eat for lunch?" }],         max_tokens: 50,       },       {         headers: {           "cf-aig-metadata": JSON.stringify({             user: "JaneDoe",             team: 12345,             test: true           }),         },       }     );
     const response = chatCompletion.choices[0].message;     return new Response(JSON.stringify(response));   } catch (e) {     console.log(e);     return new Response(e);   } },};
```

### Using Binding

To include custom metadata in your request using Bindings:

```
export default { async fetch(request, env, ctx) {   const aiResp = await env.AI.run(       '@cf/mistral/mistral-7b-instruct-v0.1',       { prompt: 'What should I eat for lunch?' },       { gateway: { id: 'gateway_id', metadata: { "team": "AI", "user": 12345, "test": true} } }   );
   return new Response(aiResp); },};
```

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Fallbacks

**來源**: [https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/](https://developers.cloudflare.com/ai-gateway/configuration/fallbacks/)

Page options # Fallbacks

Specify model or provider fallbacks with your Universal endpoint to handle request failures and ensure reliability.

Cloudflare can trigger your fallback provider in response to request errors or predetermined request timeouts. The response header cf-aig-step indicates which step successfully processed the request.

## Request failures

By default, Cloudflare triggers your fallback if a model request returns an error.

### Example

In the following example, a request first goes to the Workers AI Inference API. If the request fails, it falls back to OpenAI. The response header cf-aig-step indicates which provider successfully processed the request.

1. Sends a request to Workers AI Inference API.
2. If that request fails, proceeds to OpenAI.

```
graph TD
    A[AI Gateway] --> B[Request to Workers AI Inference API]
    B -->|Success| C[Return Response]
    B -->|Failure| D[Request to OpenAI API]
    D --> E[Return Response]
```

You can add as many fallbacks as you need, just by adding another object in the array.

Request ```
curl https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id} \  --header 'Content-Type: application/json' \  --data '[  {    "provider": "workers-ai",    "endpoint": "@cf/meta/llama-3.1-8b-instruct",    "headers": {      "Authorization": "Bearer {cloudflare_token}",      "Content-Type": "application/json"    },    "query": {      "messages": [        {          "role": "system",          "content": "You are a friendly assistant"        },        {          "role": "user",          "content": "What is Cloudflare?"        }      ]    }  },  {    "provider": "openai",    "endpoint": "chat/completions",    "headers": {      "Authorization": "Bearer {open_ai_token}",      "Content-Type": "application/json"    },    "query": {      "model": "gpt-4o-mini",      "stream": true,      "messages": [        {          "role": "user",          "content": "What is Cloudflare?"        }      ]    }  }]'
```

## Response header(cf-aig-step)

When using the Universal endpoint with fallbacks, the response header cf-aig-step indicates which model successfully processed the request by returning the step number. This header provides visibility into whether a fallback was triggered and which model ultimately processed the response.

- cf-aig-step:0 – The first (primary) model was used successfully.
- cf-aig-step:1 – The request fell back to the second model.
- cf-aig-step:2 – The request fell back to the third model.
- Subsequent steps – Each fallback increments the step number by 1.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

## Evaluations

**來源**: [https://developers.cloudflare.com/ai-gateway/evaluations/](https://developers.cloudflare.com/ai-gateway/evaluations/)

Page options # Evaluations

Understanding your application's performance is essential for optimization. Developers often have different priorities, and finding the optimal solution involves balancing key factors such as cost, latency, and accuracy. Some prioritize low-latency responses, while others focus on accuracy or cost-efficiency.

AI Gateway's Evaluations provide the data needed to make informed decisions on how to optimize your AI application. Whether it is adjusting the model, provider, or prompt, this feature delivers insights into key metrics around performance, speed, and cost. It empowers developers to better understand their application's behavior, ensuring improved accuracy, reliability, and customer satisfaction.

Evaluations use datasets which are collections of logs stored for analysis. You can create datasets by applying filters in the Logs tab, which help narrow down specific logs for evaluation.

Our first step toward comprehensive AI evaluations starts with human feedback (currently in open beta). We will continue to build and expand AI Gateway with additional evaluators.

Learn how to set up an evaluation including creating datasets, selecting evaluators, and running the evaluation process.

## Was this helpful?

- Resources
- API
- New to Cloudflare?
- Directory
- Sponsorships
- Open Source

- Support
- Help Center
- System Status
- Compliance
- GDPR

- Company
- cloudflare.com
- Our team
- Careers

- Tools
- Cloudflare Radar
- Speed Test
- Is BGP Safe Yet?
- RPKI Toolkit
- Certificate Transparency

- Community
- X
- Discord
- YouTube
- GitHub

- © 2025 Cloudflare, Inc.
- Privacy Policy
- Terms of Use
- Report Security Issues
- Trademark
- Cookie Settings

---

