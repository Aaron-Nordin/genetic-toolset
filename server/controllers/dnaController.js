module.exports = {
  //axios.post in GeneLibSlidingPane.js
  createDNA: async (req, res) => {
    try {
      const db = req.app.get("db");
      let {
        userId: user_id,
        name: gene_name,
        desc: gene_desc,
        dna: dna_seq,
        rna: rna_seq
      } = req.body;
      if (!dna_seq) {
        dna_seq = "";
      }
      if (!rna_seq) {
        rna_seq = "";
      }
      let newDNAId = null;
      let newRNAId = null;
      if (dna_seq) {
        const newDNA = await db.create_dna({ user_id, dna_seq });
        newDNAId = newDNA[0].dna_id;
      }
      if (rna_seq) {
        const newRNA = await db.create_rna({ user_id, rna_seq });
        newRNAId = newRNA[0].rna_id;
      }
      const newGene = await db.create_gene({
        gene_name,
        gene_desc,
        user_id,
        dna_id: newDNAId,
        rna_id: newRNAId
      });
      res.status(200).send(newGene[0]);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
