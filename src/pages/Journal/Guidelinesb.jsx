export default function ReviewerGuidelines() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Guidelines for Reviewers</h2>

      <p className="mb-6">
        Below are <strong>comprehensive and elaborated Reviewer Guidelines</strong> for the 
        <strong>Nepal Journal of Statistics and Data Science</strong>. 
        These guidelines ensure quality, fairness, academic integrity, and professionalism in the review process.
      </p>

      <p className="mb-6">
        The peer-review process is the foundation of academic publishing. Reviewers play a crucial role in evaluating 
        the quality, originality, and scientific validity of submitted manuscripts. The following guidelines outline 
        expectations, ethical principles, and detailed steps to ensure thorough, fair, and constructive reviews.
      </p>

      {/* SECTION 1 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Role and Responsibilities of Reviewers</h2>
      <h3 className="text-xl font-semibold mt-4 mb-2">1.1 Purpose of Peer Review</h3>
      <p>Reviewers evaluate manuscripts to determine:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>The originality and scholarly value of the research</li>
        <li>The methodological rigor and scientific validity</li>
        <li>The clarity, coherence, and completeness of the manuscript</li>
        <li>Whether the manuscript fits the aims and scope of the journal</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">1.2 Professional Conduct</h3>
      <p>Reviewers are expected to:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>Conduct reviews objectively and professionally</li>
        <li>Provide constructive feedback</li>
        <li>Avoid any personal criticism of authors</li>
        <li>Maintain confidentiality at all times</li>
      </ul>

      {/* SECTION 2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Confidentiality Obligations</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Manuscripts submitted for review must be treated as <strong>confidential documents</strong>.</li>
        <li>Reviewers must not share, discuss, copy, or store the manuscript without permission from the editorial board.</li>
        <li>Ideas or data obtained through peer review cannot be used for the reviewer’s personal research.</li>
        <li>Reviewers must delete the manuscript and related files after completing the review.</li>
      </ul>

      {/* SECTION 3 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Conflict of Interest Policy</h2>
      <p>Reviewers must immediately inform the Editorial Board if:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li>They have collaborated with the author(s) within the last five years</li>
        <li>They have a personal, academic, or financial relationship with the author(s)</li>
        <li>They feel they cannot provide an unbiased review</li>
      </ul>
      <p>If any conflict of interest exists, the reviewer must decline the invitation.</p>

      {/* SECTION 4 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Evaluation Criteria</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">4.1 Originality & Contribution</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Does the study address a new problem or offer new insights?</li>
        <li>Is the contribution significant to the field?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">4.2 Relevance to Journal Scope</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Does the topic align with the journal’s aims and disciplines?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">4.3 Scientific Rigor & Methodology</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Are the research methods appropriate and well explained?</li>
        <li>Is the study reproducible?</li>
        <li>Are statistical analyses correct and valid?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">4.4 Clarity and Quality of Writing</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Is the manuscript well structured?</li>
        <li>Is the language clear and academically sound?</li>
        <li>Are tables, figures, and graphs clear and properly referenced?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">4.5 Ethical Compliance</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Are ethical approvals mentioned (if applicable)?</li>
        <li>Is plagiarism within acceptable limits?</li>
        <li>Is AI-generated content within limits?</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">4.6 Quality of Discussion & Conclusions</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Are results interpreted logically?</li>
        <li>Do conclusions align with findings?</li>
        <li>Are limitations acknowledged?</li>
      </ul>

      {/* SECTION 5 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Structure of the Reviewer’s Report</h2>
      <p>A high-quality review should include:</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">5.1 Summary of the Manuscript (1–2 paragraphs)</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>The objective of the study</li>
        <li>Methodology</li>
        <li>Key findings</li>
        <li>Overall contribution</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">5.2 Major Comments</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Methodological flaws</li>
        <li>Misinterpretations</li>
        <li>Missing references</li>
        <li>Insufficient evidence</li>
        <li>Weak contributions</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">5.3 Minor Comments</h3>
      <ul className="list-disc ml-6 space-y-2">
        <li>Grammar and language corrections</li>
        <li>Clarity improvements</li>
        <li>Formatting issues</li>
        <li>Citation corrections</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">5.4 Recommendation</h3>
      <p>Reviewers must choose one of the following:</p>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Accept</strong></li>
        <li><strong>Accept with Minor Revisions</strong></li>
        <li><strong>Major Revisions Required</strong></li>
        <li><strong>Reject</strong></li>
      </ul>
      <p>Reasons for the recommendation must be clearly stated.</p>

{/* SECTION 6 */}
<h2 className="text-2xl font-semibold mt-8 mb-3">6. Ethical Standards for Reviewers</h2>
<p>Reviewers must:</p>

<h3 className="text-xl font-semibold mt-4 mb-2">6.1 Ensure Academic Honesty</h3>
<ul className="list-disc ml-6 space-y-2">
  <li>Avoid plagiarism in reviews</li>
  <li>Provide evidence-based comments</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2">6.2 Treat Authors with Respect</h3>
<ul className="list-disc ml-6 space-y-2">
  <li>Use professional and respectful language</li>
  <li>Avoid harsh, abusive, or biased comments</li>
  <li>Provide suggestions for improvement</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2">6.3 Decline Review If Unqualified</h3>
<ul className="list-disc ml-6 space-y-2">
  <li>If the reviewer lacks expertise in the manuscript’s subject</li>
  <li>If the reviewer cannot meet the deadline</li>
</ul>

{/* SECTION 7 */}
<h2 className="text-2xl font-semibold mt-8 mb-3">7. Reviewer Responsibilities Regarding Plagiarism & AI-generated Text</h2>
<ul className="list-disc ml-6 space-y-2">
  <li>Check for signs of plagiarism or excessive similarity</li>
  <li>Note any suspicious overlap with published literature</li>
  <li>For AI-generated content:
    <ul className="list-disc ml-6 space-y-2">
      <li>Ensure authors declare any AI assistance</li>
      <li>Confirm that generated content does not replace original research</li>
    </ul>
  </li>
  <li><em>The final plagiarism check will be performed by the editorial office.</em></li>
</ul>

{/* SECTION 8 */}
<h2 className="text-2xl font-semibold mt-8 mb-3">8. Timelines for Review</h2>
<ul className="list-disc ml-6 space-y-2">
  <li>Standard review period: 2–3 weeks</li>
  <li>If more time is needed, the reviewer must inform the editor</li>
  <li>Failure to submit a review on time may delay the publication process</li>
</ul>

{/* SECTION 9 */}
<h2 className="text-2xl font-semibold mt-8 mb-3">9. Anonymity and Double-Blind Review</h2>
<ul className="list-disc ml-6 space-y-2">
  <li>This journal follows a double-blind peer-review system</li>
  <li>Authors do not know the identity of reviewers</li>
  <li>Reviewers do not know the identity of authors</li>
  <li>Reviewers must avoid comments that could reveal their identity</li>
</ul>

{/* SECTION 10 */}
<h2 className="text-2xl font-semibold mt-8 mb-3">10. Constructive Feedback Expectations</h2>
<ul className="list-disc ml-6 space-y-2">
  <li>Provide actionable suggestions for improvement</li>
  <li>Highlight strengths as well as weaknesses</li>
  <li>Offer alternative interpretations or recommended analysis methods</li>
  <li>Suggest relevant literature that authors may have overlooked</li>
  <li><em>Constructive criticism helps authors improve their work.</em></li>
</ul>

{/* SECTION 11 */}
<h2 className="text-2xl font-semibold mt-8 mb-3">11. Reviewers' Contribution Acknowledgment</h2>
<ul className="list-disc ml-6 space-y-2">
  <li>Certificate of Appreciation (issued annually or per issue)</li>
  <li>Listing reviewer names in the journal’s acknowledgement section (optional)</li>
  <li>Considering reviewers for future editorial positions</li>
</ul>

{/* SECTION 12 */}
<h2 className="text-2xl font-semibold mt-8 mb-3">12. Withdrawal from Review</h2>
<ul className="list-disc ml-6 space-y-2">
  <li>They discover a conflict of interest</li>
  <li>They feel unqualified to evaluate the manuscript</li>
  <li>They realize they cannot complete the review in time</li>
  <li><em>Notify the editorial board as early as possible.</em></li>
</ul>

{/* SECTION 13 */}
<h2 className="text-2xl font-semibold mt-8 mb-3">13. Commitment to Maintaining Journal Quality</h2>
<ul className="list-disc ml-6 space-y-2">
  <li>Only high-quality, original, and ethical research is recommended</li>
  <li>Unethical, plagiarized, or poorly conducted research is rejected</li>
  <li>Articles that require improvement are guided constructively</li>
  <li>Their contribution directly influences the journal’s academic reputation and indexing potential</li>
</ul>

{/* SECTION 14 */}
<h2 className="text-2xl font-semibold mt-8 mb-3">14. Post-Review Responsibilities</h2>
<ul className="list-disc ml-6 space-y-2">
  <li>The reviewer must not retain manuscript files</li>
  <li>The reviewer must not contact the author directly</li>
  <li>All communication must strictly go through the editorial office</li>
</ul>

{/* SECTION 15 */}
<h2 className="text-2xl font-semibold mt-8 mb-3">15. Optional Additional Responsibilities</h2>
<ul className="list-disc ml-6 space-y-2">
  <li>Review revised versions of the same manuscript</li>
  <li>Provide suggestions for improving the review process</li>
  <li>Recommend external reviewers for specialized topics</li>
</ul>

{/* Reviewer Checklist */}
<h2 className="text-2xl font-semibold mt-8 mb-3">Reviewer Checklist (Comprehensive)</h2>
<p>Reviewer Name: __________________________________</p>
<p>Article ID / Manuscript No.: ________________________</p>
<p>Article Title: ______________________________________</p>
<p>Please check each item carefully:</p>

<h3 className="text-xl font-semibold mt-4 mb-2">A. Relevance & Contribution</h3>
<ul className="list-disc ml-6 space-y-2">
  <li>The manuscript fits within the Aim & Scope of the journal</li>
  <li>The research addresses a meaningful scientific or technological problem</li>
  <li>The study adds new insights, methods, or findings to the field</li>
  <li>The title accurately reflects the content</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2">B. Structure & Organization</h3>
<ul className="list-disc ml-6 space-y-2">
  <li>Abstract clearly summarizes background, methodology, results, and conclusion</li>
  <li>Introduction provides context, research gap, and objectives</li>
  <li>Methods are clearly described and reproducible</li>
  <li>Results are presented logically with proper tables/figures</li>
  <li>Discussion interprets findings in relation to existing literature</li>
  <li>Conclusion is clear, concise, and supported by data</li>
  <li>References are complete, relevant, and follow journal guidelines</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2">C. Scientific Quality</h3>
<ul className="list-disc ml-6 space-y-2">
  <li>Research design is appropriate and scientifically sound</li>
  <li>Data analysis is accurate and valid</li>
  <li>Findings are supported by evidence</li>
  <li>Arguments are coherent and logical</li>
  <li>Claims are not exaggerated</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2">D. Presentation Quality</h3>
<ul className="list-disc ml-6 space-y-2">
  <li>Manuscript is well written and easy to follow</li>
  <li>Grammar, spelling, and technical writing are satisfactory</li>
  <li>Figures and tables are clear and well-labeled</li>
  <li>Formatting follows the Author Guidelines and template</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2">E. Ethical Considerations</h3>
<ul className="list-disc ml-6 space-y-2">
  <li>Plagiarism appears absent or within acceptable limit (&lt;15%)</li>
  <li>Proper citation and acknowledgment of prior work exist</li>
  <li>No signs of data manipulation or unethical research practices</li>
  <li>Ethical approval is mentioned if human/animal subjects are involved</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2">F. Recommendation</h3>
<ul className="list-disc ml-6 space-y-2">
  <li>Accept</li>
  <li>Minor Revision</li>
  <li>Major Revision</li>
  <li>Reject</li>
</ul>

<p>Reviewer’s Signature/Initials: _____________________</p>
<p>Date: _____________________</p>

{/* Review Report Template */}
<h2 className="text-2xl font-semibold mt-8 mb-3">Review Report Template (Detailed)</h2>
<p>Review Report for Manuscript ID: _______________________</p>
<p>Title of Manuscript: ___________________________________</p>
<p>Reviewer Name (optional): _____________________________</p>
<p>Date: _______________________________________________</p>

<h3 className="text-xl font-semibold mt-4 mb-2">1. Summary of the Manuscript</h3>
<p>Provide a brief summary of the objective, methods, and major findings (5–8 sentences).</p>

<h3 className="text-xl font-semibold mt-4 mb-2">2. Strengths of the Paper</h3>
<p></p>

<h3 className="text-xl font-semibold mt-4 mb-2">3. Major Issues (To Be Addressed)</h3>
<p>(List major concerns related to scientific validity, methodology, analysis, or ethical issues.)</p>
<ol className="list-decimal ml-6 space-y-2">
  <li></li>
  <li></li>
  <li></li>
</ol>

<h3 className="text-xl font-semibold mt-4 mb-2">4. Minor Issues (To Be Corrected)</h3>
<p>(Grammar, clarity, formatting, missing references, ambiguous statements.)</p>
<ol className="list-decimal ml-6 space-y-2">
  <li></li>
  <li></li>
  <li></li>
</ol>

<h3 className="text-xl font-semibold mt-4 mb-2">5. Specific Comments to Authors (Line-by-line if needed)</h3>
<p>Example:</p>
<ul className="list-disc ml-6 space-y-2">
  <li>Line 45: Provide citation</li>
  <li>Page 3, Table 2: Caption incomplete</li>
  <li>Figure 4: Low resolution—replace with clearer version</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2">6. Recommendation</h3>
<ul className="list-disc ml-6 space-y-2">
  <li>Accept</li>
  <li>Accept with Minor Revisions</li>
  <li>Major Revisions Required</li>
  <li>Reject</li>
</ul>

<h3 className="text-xl font-semibold mt-4 mb-2">7. Confidential Comments to the Editor (Optional)</h3>
<p>(Will not be shared with the authors.)</p>













      <div className="mt-10 border-t pt-6 text-sm text-gray-600">
        Adhering to these guidelines ensures a fair, transparent, and rigorous peer review process that upholds 
        academic integrity and strengthens the quality of published research.
      </div>
    </div>
  );
}