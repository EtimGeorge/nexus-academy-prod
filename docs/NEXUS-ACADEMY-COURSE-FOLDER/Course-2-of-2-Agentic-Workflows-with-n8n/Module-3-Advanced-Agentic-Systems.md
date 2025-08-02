Of course. We will now proceed with the curriculum development for Module 3.

I have performed extensive research using my browsing capabilities to synthesize the most relevant and practical information for this advanced module. The lessons are structured to take the student beyond simple, linear agents and introduce them to the more complex, powerful concepts of long-term memory and self-correction, which are the hallmarks of truly sophisticated agentic systems.

---

### **Course 2: Agentic Workflows with n8n**

### **Module 3: Advanced Agentic Systems**

This module is where students graduate from building simple "tool-users" to designing true "knowledge workers." They will learn how to give their agents a persistent, long-term memory using vector databases and how to build systems that can handle errors and correct their own mistakes. This is the key to creating robust, production-ready agents.

**(Action: In your Admin Panel, go to the Course Editor for "Agentic Workflows with n8n", and add a new module titled "Advanced Agentic Systems". Then, add the four lessons below to this module.)**

---

#### **Curriculum: Module 3**

**Lesson 3.1**
*   **Lesson Title:** The Limits of the Scratchpad: Why We Need Long-Term Memory
*   **Secure Video URL:** `(placeholder)`
*   **Estimated Duration:** `15 minutes`
*   **Has Playground?** `false` (Conceptual)
*   **Lesson Content (HTML):**
    ```html
    <h2>Beyond a Single Task: Creating a Knowledge Worker</h2>
    <p>In our last module, we built a Research Agent that was brilliant at a single task. But as soon as the workflow finished, it experienced total amnesia. It forgot everything it had learned. To build agents that can learn, grow, and become true assistants, we need to give them a **long-term memory**.</p>
    
    <h3>The Problem with Context Windows</h3>
    <p>Our "scratchpad" memory works by stuffing the entire conversation history into the LLM's context window. This has two major limitations:</p>
    <ul>
      <li><strong>Limited Size:</strong> Context windows are finite. If a task involves too many steps or too much information, the history will eventually become too long to fit, and the agent will start to lose its memory of the beginning of the task.</li>
      <li><strong>No Persistence:</strong> The memory is lost forever the moment the workflow run ends. It cannot learn from one task to the next.</li>
    </ul>

    <h3>Introducing Vector Databases: A "Brain" for Your AI</h3>
    <p>To solve this, we use a special kind of database called a **Vector Database**. Think of it as a searchable, permanent library for your agent's knowledge. Here's how it works:</p>
    <ol>
      <li>We take a piece of text (like a search result or a document) and use an AI model to convert it into a "vector" - a list of numbers that represents the text's semantic meaning.</li>
      <li>We store this vector in the database.</li>
      <li>When our agent needs to find information, it converts its query ("What did I learn about the F1 race?") into a vector as well.</li>
      <li>It then performs a "similarity search" in the vector database to find the stored vectors that are most conceptually similar to its query.</li>
    </ol>
    <p>This allows the agent to retrieve relevant memories not just by keywords, but by **meaning**. In the next lesson, we will set up our own vector database and give our agent the ability to read and write to its new long-term memory.</p>
    ```

**Lesson 3.2**
*   **Lesson Title:** Creating RAG (Retrieval-Augmented Generation) Agents
*   **Secure Video URL:** `(placeholder)`
*   **Estimated Duration:** `25 minutes`
*   **Has Playground?** `false` (n8n Workflow Practical)
*   **Lesson Content (HTML):**
    ```html
    <h2>Giving Your Agent a Personal Library</h2>
    <p>Now that we understand the theory, let's build the most important and powerful agentic pattern in the industry today: **RAG (Retrieval-Augmented Generation)**. A RAG agent is one that can retrieve relevant information from its own knowledge base (long-term memory) *before* it tries to answer a question.</p>
    
    <h3>Setting Up Your Vector Database with Pinecone</h3>
    <p>There are many vector database providers, but one of the easiest to start with is **Pinecone**. It has a generous free tier that is perfect for our projects. In this lesson, we will:</p>
    <ul>
      <li>Sign up for a free Pinecone account.</li>
      <li>Create our first "index" (which is like a table in a traditional database).</li>
      <li>Get our Pinecone API key and create a new, secure credential for it in n8n.</li>
    </ul>

    <h3>The RAG Workflow in n8n</h3>
    <p>We will now upgrade our Research Agent to become a RAG Agent. We will give it a new tool: `search_personal_knowledge_base[query]`. Here's how the new workflow will operate:</p>
    <ol>
      <li>The user asks a question.</li>
      <li><strong>(Think)</strong> The agent's first thought is: "Do I already know the answer to this? I should check my personal knowledge base first."</li>
      <li><strong>(Act)</strong> The agent uses the `search_personal_knowledge_base` tool.</li>
      <li><strong>(Retrieve)</strong> Our n8n workflow takes the query, converts it to a vector using an OpenAI node, and searches our Pinecone index for the most relevant stored memories.</li>
      <li><strong>(Augment)</strong> We then assemble a new prompt for the LLM that includes both the original question AND the retrieved memories as context.</li>
      <li><strong>(Generate)</strong> The LLM uses this augmented information to generate a highly accurate, data-driven answer. If it still doesn't know, it can then decide to use the `web_search` tool.</li>
    </ol>
    <p>By the end of this lesson, you will have an agent that can learn. Every time it finds a new piece of information with web search, it can decide to save that information to its Pinecone memory, making it smarter and more effective for the next task.</p>
    ```

**Lesson 3.3**
*   **Lesson Title:** Error Handling and Self-Correction Loops
*   **Secure Video URL:** `(placeholder)`
*   **Estimated Duration:** `20 minutes`
*   **Has Playground?** `false` (n8n Workflow Practical)
*   **Lesson Content (HTML):**
    ```html
    <h2>What Happens When Things Go Wrong?</h2>
    <p>A production-ready agent isn't just smart; it's robust. It needs to be able to handle unexpected errors, from a tool failing to an invalid output from the LLM. In this lesson, you'll learn how to build self-correction and error-handling capabilities into your n8n workflows.</p>

    <h3>Handling Tool Errors in n8n</h3>
    <p>What if our `web_search` API is temporarily down? In a standard n8n workflow, this would cause the entire process to fail. However, every n8n node has a special "error output" that we can use.</p>
    <ul>
      <li>We will learn how to connect a "fallback" path from a node's error output.</li>
      <li>If the `web_search` node fails, our workflow will now automatically route the execution down this error path.</li>
      <li>On this path, we can create an "Observation" that tells the agent what went wrong, e.g., "Observation: The web_search tool failed to execute."</li>
      <li>We then feed this observation back into the agent's memory loop. A smart agent will then see this error and can decide to try again or use a different tool.</li>
    </ul>
    
    <h3>Handling LLM Output Errors</h3>
    <p>Sometimes, the LLM will generate an output that isn't a valid JSON or doesn't follow our ReAct format. We can build a self-correction loop to handle this.</p>
    <ul>
      <li>After our main LLM call, we will add a node to try and parse the JSON output.</li>
      <li>If this node fails, we will use its error output to trigger a *second* LLM call.</li>
      <li>The prompt for this second call will be a "correction prompt," e.g., "Your last response was not in the correct JSON format. Please analyze your previous response and provide it again, ensuring it is a valid JSON object with 'thought' and 'action' keys."</li>
    </ul>
    <p>By building these error-handling and self-correction loops, we transform our agent from a fragile prototype into a robust and resilient system that can handle the unpredictability of the real world.</p>
    ```

**Lesson 3.4**
*   **Lesson Title:** Deploying and Monitoring Your n8n Workflows
*   **Secure Video URL:** `(placeholder)`
*   **Estimated Duration:** `15 minutes`
*   **Has Playground?** `false` (Conceptual)
*   **Lesson Content (HTML):**
    ```html
    <h2>Taking Your Agent Live</h2>
    <p>An agent is only useful if it can run when you need it to. In this final lesson of the module, we'll cover the essential steps for deploying your n8n workflow and monitoring its performance.</p>
    
    <h3>Activating a Workflow</h3>
    <p>In n8n, a workflow is either "Active" or "Inactive". An inactive workflow can only be run manually from inside the editor. An **Active** workflow can be triggered by external events, which is what we need for a live agent.</p>
    
    <h3>Production Triggers: Webhooks</h3>
    <p>The most common way to trigger a live agent is with a **Webhook**. The "Webhook" node in n8n generates a unique, secure URL. When you activate your workflow, n8n will start listening for incoming HTTP requests to this URL.</p>
    <ul>
      <li>You can use this URL to start your agent from anywhere: a form on your website, a command in Slack, or even another automation service.</li>
      <li>This is the key to integrating your agent with other systems.</li>
    </ul>

    <h3>Monitoring and Debugging Live Executions</h3>
    <p>Once your workflow is active, you can't see the execution happen in real-time on the canvas. Instead, n8n provides a dedicated section to monitor its performance.</p>
    <ul>
      <li><strong>Executions Log:</strong> n8n keeps a detailed log of every time your workflow runs. You can see when it was triggered, whether it completed successfully or failed, and inspect the data that was processed at every single step.</li>
      <li><strong>Error Diagnosis:</strong> If a live execution fails, the Executions Log is the first place you will go. It will highlight the exact node that caused the error and show you the input data that led to the failure. This is essential for debugging and improving your live agents.</li>
    </ul>
    <p>By the end of this lesson, you will understand the full lifecycle of an agent, from building and testing in the editor to deploying it with a live trigger and monitoring its performance in a production environment.</p>
    ```

This completes the full, enhanced curriculum for Module 3.

Please review the content. When you are satisfied and have finished migrating it, prompt me to **continue**, and I will provide the curriculum for the final module, **Module 4: Multi-Agent Collaboration**.