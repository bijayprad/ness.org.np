export default function Guidelinesa() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Guidelines for Authors</h2>

      <p className="mb-6">
        These guidelines are intended to ensure uniformity, academic rigor, and ethical standards in all submissions to the <strong>Nepal Jouranl of Statistics and Data Science</strong>.
      </p>

      {/* SECTION 1 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Manuscript Categories Accepted</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Original Research Articles</li>
        <li>Review Articles</li>
        <li>Case Studies (if relevant to science/technology)</li>
      </ul>

      {/* SECTION 2 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">2. General Manuscript Structure</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li><strong>Title Page:</strong> Title, author names, affiliations, email, ORCID (optional)</li>
        <li><strong>Abstract:</strong> 200–300 words summarizing objectives, methodology, key findings, conclusion</li>
        <li><strong>Keywords:</strong> 4–6 relevant terms, specific and searchable</li>
        <li><strong>Main Text (IMRaD):</strong> Introduction, Methodology, Results, Discussion, Conclusion</li>
        <li><strong>References:</strong> APA 7 format, at least 9 relevant citations</li>
      </ul>

      {/* SECTION 3 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Formatting Requirements</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Manuscript length: up to 8000 words (research articles)</li>
        <li>Font: Times New Roman, 12 pt</li>
        <li>Spacing: double</li>
        <li>Margins: 1 inch on all sides</li>
        <li>Figures: up to 5, Tables: up to 5; high resolution, properly labeled</li>
        <li>Submit manuscript as Microsoft Word (.docx) or LaTeX</li>
        <li>Follow CRedit Taxonomy for contributions</li>
      </ul>

      {/* SECTION 4 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Ethical Standards & Plagiarism</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Manuscripts must be original, unpublished, and not under consideration elsewhere</li>
        <li>Plagiarism limit: Maximum 20% (excluding references)</li>
        <li>AI-generated text limit: Maximum 20%</li>
        <li>Failure to comply may result in rejection</li>
      </ul>

      {/* SECTION 5 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Submission Process</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Submit via official journal email or submission portal (to be announced)</li>
        <li>Authors will receive acknowledgment within 48 hours</li>
        <li>Manuscript ID issued for tracking</li>
        <li>All required forms (Copyright, Conflict of Interest) must be submitted</li>
        <li>Supplementary materials (data, appendices, multimedia) must be labeled</li>
        <li>Corresponding author handles communication with the journal</li>
        <li>Non-adherence to guidelines may result in return without review</li>
        <li>Authors can check status via portal or email</li>
        <li>Update contact info immediately if changed after submission</li>
        <li>Final submission must include title page, abstract, keywords, main text, tables/figures, references</li>
      </ul>

      {/* SECTION 6 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Review Process</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>All submissions undergo double-blind peer review</li>
        <li>At least two reviewers evaluate each manuscript</li>
        <li>Review outcomes: Accept, Minor revisions, Major revisions, Reject</li>
        <li>Authors must revise within given timeframe and provide “Response to Reviewers”</li>
        <li>Editor reserves right for final decision</li>
      </ul>

      {/* SECTION 7 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Author Responsibilities</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Ensure accuracy of data and citations</li>
        <li>Declare conflicts of interest</li>
        <li>All authors must read and approve final manuscript</li>
        <li>Figures/tables must not violate copyright</li>
        <li>Maintain transparency in methodology and results</li>
      </ul>

      {/* SECTION 8 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Publication Charges</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>No publication charges for the first issue (decision may be revised later)</li>
      </ul>

      {/* SECTION 9 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">9. Copyright & Licensing</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Authors retain copyright</li>
        <li>Journal receives publication rights</li>
      </ul>

      {/* SECTION 10 */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">10. Final Proof & Publication</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Authors receive galley proofs for final checking</li>
        <li>Corrections must be returned within specified timeframe</li>
        <li>Minor typographical errors may be corrected by editorial team</li>
        <li>Final version published online and/or in print per journal schedule</li>
        <li>Published articles receive DOI for citation tracking</li>
      </ul>

      {/* FOOTER NOTE */}
      <div className="mt-10 border-t pt-6 text-sm text-gray-600">
        Following these guidelines helps ensure uniformity, academic rigor, and ethical standards in all submissions.
      </div>
    </div>
  );
}