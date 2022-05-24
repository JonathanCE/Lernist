const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib
const nombrePersona = document.getElementById("NombrePersona")

async function nombreEnPdf() {
    // Fetch an existing PDF document
    const existingPdfBytes = await fetch("certificado-fracciones-div.pdf").then(res => res.arrayBuffer())
    // Fetch custom font
    const fontBytes = await fetch("Lora-Italic.ttf").then(res => res.arrayBuffer())

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    // Register the `fontkit` instance
    pdfDoc.registerFontkit(fontkit)

    // Embed our custom font in the document
    const customFont = await pdfDoc.embedFont(fontBytes)

    // Get the first page of the document
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]

    // Get the width and height of the first page
    const { width, height } = firstPage.getSize()

    // Create a string of text and measure its width and height in our custom font
    const text = nombrePersona.value
    const textSize = 58
    const textWidth = customFont.widthOfTextAtSize(text, textSize)
    const textHeight = customFont.heightAtSize(textSize)

    // Draw the string of text on the page
    firstPage.drawText(text, {
        x: ( width - textWidth ) / 2,
        y: 290,
        size: textSize,
        font: customFont,
        color: rgb(0, 0.53, 0.71),
    })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()

    // Trigger the browser to download the PDF document
    download(pdfBytes, "mi_certificado.pdf", "application/pdf");

    // Abre la pagina principal y cierra la actual, para evitar que se hagan más certificados
    setTimeout(function() {
        document.getElementById("boton-inicio").style.display = "initial";
        document.getElementById("NombrePersona").style.display = "none";
        document.getElementById("boton-reconocimiento").style.display = "none";
        document.getElementById("mensaje-usuario").style.display = "none";
    }, 5000)
}