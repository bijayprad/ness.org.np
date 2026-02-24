export default function Archieve() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Journal Archieve</h2>
      <p className="mb-4"> 
    Explore past issues and publications of the <strong>NJSDS Journal</strong>. 
        Each issue contains peer-reviewed articles and research papers, providing 
        valuable insights and knowledge across statistics and data sciences.
    </p>
      
      <ul className="list-disc ml-6">
        {/* Making not visible  
        <li>Volume 3, Issue 2 – December 2025</li>
        <li>Volume 3, Issue 1 – June 2025</li>
        <li>Volume 2, Issue 2 – December 2024</li>
        <li>Volume 2, Issue 1 – June 2024</li>
        <li>Volume 1, Issue 2 – December 2023</li>
        <li>Volume 1, Issue 1 – June 2023</li>
        */}
        <ul className="list-disc ml-6">
  <li>
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      Volume 1, Issue 1
    </a>
  </li>
  
</ul>

      </ul>
      <p className="mt-4">
        More archives will be added as new issues are published.
      </p>
    </div>
  );
}
