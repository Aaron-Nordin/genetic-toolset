module.exports = {
  //axios.post in GeneLibSlidingPane.js
  createDNA: async (req, res) => {
    try {
      const db = req.app.get("db");
      const {
        userId: user_id,
        name: gene_name,
        desc: gene_desc,
        dna: dna_seq,
        rna: rna_seq
      } = req.body;
      let newDNAId = "";
      let newRNAId = "";
      if (dna_seq) {
        const newDNA = await db.create_dna({ user_id, dna_seq });
        newDNAId = newDNA.dna_id;
      }
      if (rna_seq) {
        const newRNA = await db.create_rna({ user_id, rna_seq });
        newRNAId = newRNA.rna_id;
      }
      const newGene = await db.create_gene({
        gene_name,
        gene_desc,
        user_id,
        dna_id: newDNAId,
        rna_id: newRNAId
      });
      res(200).send(newGene);
    } catch {
      res.sendStatus(500);
    }
  }
};
