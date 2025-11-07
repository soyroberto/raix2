---
title: Getting Started with Microsoft Copilot Studio
excerpt: Learn how to set up and configure Microsoft Copilot Studio for your business. A comprehensive guide for Australian organizations looking to leverage AI.
author: Roberto
date: 2025-01-15
category: Copilot Studio
image: /copilotpost.png
---

# Introduction

# The Microsoft Copilot Ecosystem

Microsoft has developed a comprehensive ecosystem of Copilot products, each tailored to specific use cases and audiences. Understanding these different versions is key to appreciating the unique role and power of Copilot Studio. The primary offerings in the Microsoft Copilot ecosystem include:

• **Microsoft 365 Copilot Chat:** An AI-powered chat experience integrated with Microsoft 365, offering enterprise-grade data protection and web-grounded responses \[2\].

• **Microsoft 365 Copilot:** The full enterprise version that embeds AI capabilities directly within Microsoft 365 applications like Word, Excel, PowerPoint, and Teams, accessing organizational data through the Microsoft Graph \[2\].

• **Microsoft Copilot** (Consumer): A free, consumer-focused version for personal tasks that draws information from the public internet \[2\].

• **Microsoft Security Copilot:** A specialized tool for security professionals that assists with incident response, threat hunting, and security posture management \[2\].

• **GitHub Copilot**: An AI coding assistant that helps developers write code faster by providing real-time suggestions and assistance \[2\].

•**Microsoft Copilot Studio**: A low-code platform for creating and customizing copilots and agents, which is the focus of this document \[2\]. **<mark>What this blog post is actually about</mark>**

# Copilot Studio

![Microsoft Copilot Studio Logo's PNG & Vector - BrandLogo](https://brandlogo.org/wp-content/uploads/2025/05/Microsoft-Copilot-Studio-Icon-2024-300x300.png align="right")

Copilot Studio stands out as the platform that empowers users to build, customize, and extend their own copilots. \*\*It is a graphical, low-code tool designed to create powerful AI agents and workflows without requiring extensive technical expertise \[\*\*3\]. Copilot Studio allows users to connect to various data sources, automate business processes, and deploy custom conversational AI experiences across multiple channels.

# Top Features of Copilot Studio

Copilot Studio offers a long rich set of features that make it a powerful tool for building custom AI solutions. Some of the top features:

• **Low-Code Development**: A graphical, intuitive interface that enables users to build and manage agents without writing extensive code, making AI development accessible to a broader audience \[3\].

## • **Data Connectivity and Plugins**:

The ability to connect to various data sources through pre-built and custom plugins, allowing agents to access and utilize enterprise data and external services \[3\].

## Microsoft Ecosystem Integration

Copilot Studio is deeply integrated with the broader Microsoft ecosystem (**obviously**), allowing agents to access and interact with data from a wide range of Microsoft services.

### Microsoft 365

• **SharePoint**: One of the most powerful integrations, SharePoint can be used as a knowledge source for generative answers. Agents can search SharePoint sites, pages, and documents to provide grounded, context-aware responses based on organizational content \[2\].

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758595309655/667cba4f-ed56-40b8-a0eb-1932597a40db.png align="center")

• **Microsoft Teams:** Agents can be published directly to Teams, allowing users to interact with them within their familiar collaboration environment. This enables use cases like HR bots, IT helpdesks, and project management assistants \[3\].

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758595354882/439af377-e5e4-4119-8d9c-dcdb2de5c2b2.png align="center")

• **Outlook**: While not a direct knowledge source, the Microsoft Graph API can be used via custom connectors to access and interact with Outlook email and calendar data, enabling agents to perform tasks like scheduling meetings or summarizing email threads \[4\]. I used the Outlook connector on an agent I created (I called it, ***Clouder***) to assist me to study for the AI-900 (**Azure AI Fundamentals) in which I asked the agent to create a daily plan with the topics and add it as an appointment on my calendar, images below:**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758598427395/c4dc3caf-d851-4988-9472-270a2543ea1a.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758598495481/dc621398-71d0-432d-8345-c8cce23399be.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758598503965/6e7680a6-1497-4ae5-b0e3-f75bb8ec1368.png align="center")

## How the prompt looks like:

`“create another appointment for the next 3 days starting tomorrow taking the guide from here:` [`https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-900`](https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-900) `. 30 minutes each day starting at 630pm melbourne local time`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758599072452/0afb13b7-b4cb-41f5-b8da-ac69737c2389.png align="center")

## It added them to Outlook:

**<mark>3 appointments of 30 minutes starting on Wednesday (today is tuesday 23/09)</mark>**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758599123674/09c420a1-f51a-479b-b2cf-732b762d9b27.png align="center")

### 365 and Power Platform

• **Dynamics 365**: Copilot Studio can connect to Dynamics 365 data, enabling agents to access and update CRM and ERP information. This allows for the creation of powerful sales, customer service, and operational agents.

I installed the Copilot agent for **Sales**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758600089873/96419b32-b13b-476f-93e6-f596536e8e2a.png align="center")

but given I have no instance of the CRM the features and usability is quite limited but it does some interesting things, such as:

## Summarise emails:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758599910378/94795726-eb2f-48e5-8520-408ebb7ea9fb.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758599995868/2b94c32e-01b4-43a6-8770-2c7fc89fd08d.png align="center")

This is useful saving me the time of finding the relevant information from a promotional email

• **Dataverse**: As the underlying data platform for Power Platform and Dynamics 365, Dataverse can be used as a structured knowledge source, allowing agents to retrieve information from custom business applications.

• **Power Automate**: Copilot Studio agents can trigger Power Automate flows, enabling complex workflow automation across hundreds of connected services.

# Other agents I built

The 1st one was very simple expense assistant provided by an existing template:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758600472016/38ccb201-87c1-45b7-a04f-2e5759f2d606.png align="center")

All the knowledge comes from the provided word file and it does search from the Web which is something that can be disabled to narrow the knowledge the agent has access to.

The low hanging easy question first:

## “`What's the expense limit i have per trip?`

That answer is provided in the 1st cell of the document:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758601882416/26d908dc-7172-4759-93fe-fe315de269f3.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758601760755/0bcc3228-0507-4f18-a8e3-2cbf41a23876.png align="center")

To make things interesting I started to ask questions with not explicit information in the document:

## `“i had to paid for a customers dinner above the limit it was 300 aud in total for 4 people what should i do?`

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758601997710/76739e57-d75b-45e2-8ce7-b86b25cdaf56.png align="center")

the concept nor the word customer is present in the document. How did it arrive to that conclusion? <mark>I need to find out because the agent has no access to the Internet</mark>

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758602018399/0aa96889-239f-4c85-8549-c90ef1a9da81.png align="center")

I asked the same questions 3 times and every time I received a different answer:

## `“i had to paid for a customers dinner above the limit it was 300 aud in total for 4 people what should i do?`

## 1st time:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758602380201/801eee0f-a221-43dd-bade-4a774c9a3f7a.png align="center")

## 2nd time:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758602391081/209fd9cf-887f-4d02-9ff9-8279309ef5c5.png align="center")

## 3rd time

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758602440243/75151714-63d0-40c8-b3bc-e81906677f37.png align="center")

This tells me the model **Copilot** is using is not deterministic. Let's not get fancy with lingo here. **Deterministic means**: Same question same answer every-time or **if this then that**.

**Non-deterministic** means the opposite. Non deterministic real life ***examples***: flipping a coin or rolling a dice 🎲

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758602778472/719fdc58-61fd-4f81-9c24-96d4ec98d666.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758602778472/719fdc58-61fd-4f81-9c24-96d4ec98d666.png align="center")

## Here the question comes:

### LLM (Large Language Models) are deterministic or non deterministic?

### Let's make this recursive and ask 2 LLMs the same question

## Manus’ answer:

Whether an LLM is deterministic or non-deterministic depends on a key setting called **temperature**.

* **Non-deterministic (Creative and Varied):** By default, most LLMs operate in a non-deterministic way. When you ask the same question multiple times, you will likely get slightly different answers. **This is because the model is designed to be creative and not sound robotic.** I<mark>t introduces a controlled amount of randomness to predict the next word</mark>, which is why it can generate diverse and natural-sounding text. This is the standard behavior for most chatbot applications.
    
* ![China’s latest AI agent Manus captures global attention following ...](https://www.globaltimes.cn/Portals/0/attachment/2025/2025-03-07/014838b3-6214-42f0-b36f-27b836368930.jpeg align="right")
    
* **Deterministic (Consistent and Repeatable):** It is possible to make an LLM's output deterministic. By setting a parameter called "temperature" to zero, you eliminate the randomness in its word selection. When the temperature is zero, the model will always choose the most likely next word. If you provide the same input, you will get the exact same output every single time. This mode is useful for tasks that require predictable and repeatable results.
    

## ChatGPT answer:

LLMs (Large Language Models) like GPT are **non-deterministic by default**, but they *can* be made deterministic depending on how you configure them.

Here’s the breakdown:

### 🔹 Why they’re *non-deterministic* by default

* During text generation, LLMs use **probability distributions** over the vocabulary to decide the next token.
    
* Parameters like **temperature**, **top-k**, and **top-p (nucleus sampling)** introduce randomness so outputs vary, even with the same prompt.
    
* This randomness makes responses feel more natural and less repetitive.
    

![Italy restores ChatGPT after OpenAI responds to regulator | Reuters](https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SFDGX2C26VOFVHSZWAJP63GUOQ.jpg align="left")

### 🔹 How to make them *deterministic*

* If you set **temperature = 0** (or very close to 0), the model always picks the most likely next token.
    
* If you also fix the **random seed** in the inference framework, you can get **identical outputs** across runs.
    
* Even then, some implementations (depending on hardware, parallelism, or floating-point operations) might still produce very slight variations.
    

### 🔹 In practice

* **Non-deterministic** = good for creativity, brainstorming, and variety.
    
* **Deterministic** = good for reproducibility, testing, or compliance (e.g., you always want the same answer for the same query).
    

I couldn't find a way to force Copilot to become deterministic this is not good not bad it's just a configuration option but was more around the answer formatting, **image**:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758605862744/acffd811-fa86-48fb-bc89-0c9fdd2b7d07.png align="center")

# Topics

In **Copilot Studio**, *topics* are the building blocks of a copilot’s conversational logic. Each topic defines how the copilot recognizes user intent (through trigger phrases) and how it should respond (via messages, actions, or data queries).

In one of the Agents I created I added a topic called ‘***Emergency***’ that provides the number to call in case of one:

## Before adding the topic:

When the agent has no knowledge it simply provides a generic answer:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758606843790/0278f3ba-3364-412a-8a31-5cb3122fae82.png align="center")

## After adding the topic:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758606995303/613d1d2d-7cca-44f7-99c7-0e5a6409c9a8.png align="center")

## Configuring the topic using Copilot (funny in a way)

Tell copilot what the topic is for and what action(s) is set to take

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758607085419/e884f8e7-5f3f-45e8-999e-f9b5ea0d854a.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758607073763/99129bd0-a1a6-4f27-a543-2e8f486baa03.png align="center")

## Testing the topic

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758608101397/be2ea13c-8672-4ed4-af18-224569ccd7d6.png align="center")

## Other things I can do when building the agent

Create conditions with copilot

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758613629114/3765131c-3049-41aa-bcbe-5ae7e8732fa8.png align="center")

Conditions created inside the Agent

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758613658782/7ce443aa-4fa6-470a-92aa-7b2c45fb7ed3.png align="center")

## Tools

There's a long list of features available to the agent let's add one simple one: **Temperature**

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758614875595/97efb216-06b9-471c-abe5-b59af1cc3c71.png align="center")

I was asked for the details: City and Unit, won't be doing this every time then I changed the inputs:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758614993560/5a3f0be9-b078-4030-b008-ab99753393fe.png align="center")

## To Melbourne where I live and Metric as the units:

**Prompt**: What's the weather between 10 today and 6 am tomorrow

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1758615046261/ae7352a6-9dcd-4482-9526-4ee56b76a5c5.png align="center")

## Other characteristics of copilot:

• **Generative AI and NLU:** Leverages advanced AI models, including those used in Bing and Azure OpenAI, to understand user intent, generate natural language responses, and even create conversational topics from simple descriptions \[3\].

• **Autonomous Agents:** The capability to build agents that can be triggered by events, run on a schedule, and perform tasks autonomously in the background, integrating with various applications and services \[4\].

• **Multi-Channel Deployment**: Seamlessly publish agents to a wide range of channels, including websites, mobile apps, Microsoft Teams, and other platforms supported by the Azure Bot Service \[3\].

• **Enterprise-Grade Governance**: Provides a central admin center for managing, securing, and governing agents, ensuring compliance and control over AI deployments \[4\].

• **Extensibility for Microsoft 365 Copilot**: Allows organizations to customize and extend the capabilities of Microsoft 365 Copilot with their own data, workflows, and business processes \[4\].

# **RAG (Retrieval-Augmented Generation) System**

Microsoft Copilot Studio is a prime example of a commercial, low-code platform that is built upon the RAG (Retrieval-Augmented Generation) framework.

### How Does RAG Work? A Step-by-Step Process

The entire process can be visualized in the following flowchart:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1760760206750/5ac5b743-b8e4-4b58-9694-3582f12cacbb.png align="center")

#### Step 1: **Retrieval**

* A user asks a question.
    
* This question is converted into a numerical representation (called a "vector embedding").
    
* This representation is used to search a knowledge base (a vector database) for document chunks with the most similar meaning.
    
* The most relevant chunks of text are retrieved.
    

> **Knowledge Base Examples:** Your company's internal wikis, PDF reports, product documentation, recent news articles, or any curated set of data you want the AI to use.

#### Step 2: **Augmentation**

* The retrieved text chunks are combined with the user's original question into a new, super-powered prompt.
    
* This prompt looks something like:
    
    > "Based **ONLY** on the following context, answer the question.
    > 
    > **Context:**
    > 
    > * \[Relevant text chunk #1\]
    >     
    > * \[Relevant text chunk #2\]
    >     
    > * \[Relevant text chunk #3\]
    >     
    > 
    > **Question:** \[The user's original question\]  
    > **Answer:**"
    

#### Step 3: **Generation**

* This augmented prompt is sent to the LLM (like GPT-4, Llama, etc.).
    
* The LLM now has a strict "open-book" exam. It doesn't need to rely on its memory; it just synthesizes the provided context to generate a coherent, direct, and well-supported answer.
    
* The final answer is delivered to the user.
    

### Why is RAG So Important? The Key Benefits

1. **<mark>Reduces Hallucinations:</mark>** By tethering the LLM to specific source documents, it's much less likely to invent facts. The answer is constrained by the provided context.
    
2. **<mark>Provides Up-to-Date Information</mark>:** The knowledge base can be updated independently of the LLM, which is expensive and slow to retrain. You can add today's news or last week's sales report to the database, and the RAG system will immediately use it.
    
3. **<mark>Source Citation &amp; Trust:</mark>** A RAG system can easily cite its sources (e.g., "According to the Q3 Financial Report, page 12..."). This builds user trust and allows for fact-checking.
    
4. **<mark>Handles Private or Domain-Specific Knowledge</mark>:** LLMs don't know your company's confidential data. RAG allows you to create AI assistants that are experts on your specific internal data without ever having to retrain a model.
    

Microsoft Copilot Studio is a prime example of a commercial, low-code platform that is built upon the RAG (Retrieval-Augmented Generation) framework:

Mapped to Copilot's features:

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1760760439464/1192783c-f35c-478f-b979-f5d997961348.png align="center")

#### A. **The Retrieval Phase: "Filling the Knowledge Base"**

In Copilot Studio, we provided the external knowledge sources through several methods:

* **Topics (Manual):** We manualley created and and curated "Topics"—which are essentially Q&A pairs. This is a structured, rule-based form of providing knowledge. When a user's question matches a Topic, it's retrieved and used as the context.
    
* **Generative Answers (Automated):** This is the most direct RAG feature. We **connected our own data sources**, a word document but many others are available: **SharePoint sites, PDFs, Word documents, internal websites, or public URLs**. Copilot Studio automatically processes this content, chunks it, and creates a searchable vector knowledge base in the background.
    
* **Connectors:** It can connect to external data via Power Automate flows or APIs, pulling in live data from other systems (like your CRM or ERP), which can also be used as context, in the case of Office 365 email and Outlook:
    
* 1. **Write email based on the topic:**
        
* ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1760760657568/3b4aa019-8f45-495b-9030-299be064101b.png align="center")
    
    2\. Set triggers, ex: Subject or body text
    
* ![](https://cdn.hashnode.com/res/hashnode/image/upload/v1760760728791/d3500e99-4edb-42c4-91ca-7044d3b51f44.png align="center")
    

#### **B. The Augmentation & Generation Phase: "The AI Brain"**

* When we asked question, Copilot Studio's engine first searches through all its connected knowledge—both the manually created Topics and the automatically indexed documents from "Generative Answers."
    
* It retrieves the most relevant pieces of information.
    
* It then **augments the prompt** for the underlying large language model (like GPT-4) with this retrieved context, along with system instructions you can set (e.g., "act as a helpful customer service agent").
    
* The LLM then **generates** a coherent, conversational answer based *<mark>only</mark>* <mark> or primarily on the provided context.</mark>
    
    ### Key RAG Features Visible in Copilot Studio
    
    1. **Grounding:** This is Copilot Studio's term for the core RAG benefit. It has a "Grounding" slider that, when enabled, forces the copilot to stick strictly to the provided data sources (Topics and connected documents) and not rely on the LLM's base knowledge. This is the ultimate guard against hallucinations for domain-specific queries.
        
    2. **Citations:** When the copilot generates an answer using the "Generative Answers" feature, it automatically provides citations. You can click these to see which specific source document the information was pulled from. This is a classic RAG benefit that provides transparency and trust.
        
    3. **Central Knowledge Source:** The entire value proposition is to prevent the LLM from using its generic knowledge and instead ground it in *your* central, approved company data.
        
    

# Conclusion

My initial exploration through Microsoft Copilot Studio has been a fascinating journey of the power and accessibility of modern AI development. From building a simple expense assistant to creating a personalized study buddy that integrates with my Outlook calendar, the hands-on experience has shown that Copilot Studio truly **democratizes** the creation of custom AI agents. The platform's low-code, graphical interface makes it possible for anyone, regardless of their technical background, to bring their ideas to life. From helloWorld to (almost) what your mind can imagine.

What stands out the most is the seamless integration with the Microsoft ecosystem. The ability to tap into SharePoint for knowledge, trigger Power Automate flows for complex tasks, and connect to Dataverse for structured data transforms a simple chatbot into a powerful business tool. My experiments with the non-deterministic nature of the underlying LLMs also provided a valuable lesson in the nuances of working with generative AI, reminding me that there's always an element of creativity and unpredictability to harness.

Whether you're a business user looking to automate a specific workflow or a developer aiming to build a sophisticated enterprise agent, Copilot Studio offers a rich and versatile canvas. The potential to extend and customize the Microsoft 365 Copilot experience opens up a new frontier for productivity and innovation. My hands-on experience has showed just a little of the massive surface of what's possible, and I'm excited to see what the community builds with these powerful tools. **Copilot Studio it is a *commercial product built on the RAG architecture.*** It takes the powerful but technical concept of RAG and packages it into an intuitive, no-code/low-code tool that allows businesses to easily deploy accurate and context-aware AI assistants for their specific needs. It is one of the most successful and widespread implementations of the RAG framework in the enterprise world today. Time to build yours.

## References

\[1\] Microsoft. (2025, June 2). Configure user authentication in Copilot Studio. Microsoft Learn. Retrieved from [https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication](https://learn.microsoft.com/en-us/microsoft-copilot-studio/configuration-end-user-authentication)

\[2\] Microsoft. (2025, August 4). Custom connectors overview. Microsoft Learn. Retrieved from [https://learn.microsoft.com/en-us/connectors/custom-connectors/](https://learn.microsoft.com/en-us/connectors/custom-connectors/)

\[3\] Microsoft. (n.d.). Configure data policies for agents. Microsoft Learn. Retrieved from [https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-data-loss-prevention)

\[4\] Microsoft. (2025, September 17). Geographic data residency in Copilot Studio. Microsoft Learn. Retrieved from [https://learn.microsoft.com/en-us/microsoft-copilot-studio/geo-data-residency](https://learn.microsoft.com/en-us/microsoft-copilot-studio/geo-data-residency)

\[5\] Microsoft. (2025, August 27). Copilot Studio security and governance. Microsoft Learn. Retrieved from [https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance](https://learn.microsoft.com/en-us/microsoft-copilot-studio/security-and-governance)

\[6\] Microsoft. (2025, January 9). Work with Power Platform environments in Copilot Studio. Microsoft Learn. Retrieved from [https://learn.microsoft.com/en-us/microsoft-copilot-studio/environments-first-run-experience](https://learn.microsoft.com/en-us/microsoft-copilot-studio/environments-first-run-experience)

\[7\] Microsoft. (2025, April 30). Control how agents are shared. Microsoft Learn. Retrieved from [https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-sharing-controls-limits](https://learn.microsoft.com/en-us/microsoft-copilot-studio/admin-sharing-controls-limits)

\[8\] Microsoft. (2025, April 1). Governance and security best practices overview. Microsoft Learn. Retrieved from [https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/sec-gov-intro](https://learn.microsoft.com/en-us/microsoft-copilot-studio/guidance/sec-gov-intro) ''

\[9\] Youtube, (2024). Copilot Studio: Complete Tutorial for Beginners from [https://youtu.be/vF2Z4T97xcQ?si=pqksuhTWGzFqVBwM](https://youtu.be/vF2Z4T97xcQ?si=pqksuhTWGzFqVBwM)