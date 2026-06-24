public class Main {
    public static void main(String[] args) {
        System.out.println("=== Running Factory Method Pattern Demo ===");

        // Step 1: Create concrete factories for each document type
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        // Step 2: Use the factories to create specific documents
        Document wordDoc = wordFactory.createDocument();
        Document pdfDoc = pdfFactory.createDocument();
        Document excelDoc = excelFactory.createDocument();

        // Step 3: Test the created documents
        wordDoc.open();
        pdfDoc.open();
        excelDoc.open();
    }
}
