# Structuring the Publications JSON Object

This guide explains how to structure a JSON object for publication data on your platform.

## JSON Structure Overview

A publication is part of the `publications` array. Example structure:

```json
{
  "publications": [
    {
      "id": "pub1",
      "title": "N/A",
      "authors": ["N/A"],
      "venue": "N/A",
      "year": 2024,
      "type": "journal",
      "doi": "#########",
      "abstract": "N/A",
      "keywords": ["N/A"],
      "citationCount": 0,
      "pdfUrl": "/",
      "projectUrl": "https://github.com/OTTERLab/quantum-ml"
    }
  ]
}
```

## Field-by-Field Explanation

- **id**: Unique identifier for the publication.
- **title**: Full title of the publication.
- **authors**: List of author names (array of strings).
- **venue**: Journal, conference, or workshop name.
- **year**: Year of publication (integer).
- **type**: Publication type (e.g., `journal`, `conference`).
- **doi**: Digital Object Identifier (DOI), or `#########` if unavailable.
- **abstract**: Brief summary of the publication.
- **keywords**: List of relevant keywords (array of strings).
- **citationCount**: Number of citations (integer).
- **pdfUrl**: URL to the full-text PDF, or `/` if not available.
- **projectUrl**: URL to the related project or repository.

## Example

```json
{
  "id": "pub1",
  "title": "Exploring Quantum Machine Learning",
  "authors": ["Pablo Cesar Bedolla Ortiz", "John Doe"],
  "venue": "Quantum Computing Journal",
  "year": 2024,
  "type": "journal",
  "doi": "10.1234/abcd1234",
  "abstract": "This paper explores the integration of quantum mechanics with machine learning algorithms.",
  "keywords": ["Quantum Computing", "Machine Learning", "AI"],
  "citationCount": 15,
  "pdfUrl": "https://example.com/publication.pdf",
  "projectUrl": "https://github.com/OTTERLab/quantum-ml"
}
```

## CSS for Publication Type Badges

Use the following CSS to style the publication type badges:

```css
.publication-type-badge.journal {
  background: rgba(0, 255, 157, 0.1);
  color: #00ff9d;
}

.publication-type-badge.conference {
  background: rgba(255, 171, 0, 0.1);
  color: #ffab00;
}

.publication-type-badge.workshop {
  background: rgba(131, 56, 236, 0.1);
  color: #8338ec;
}
```
