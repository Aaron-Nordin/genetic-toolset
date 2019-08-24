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
  },

  createCDNA: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { userId: user_id, dna: dna_seq, rna: rna_seq } = req.body;
      const genesArr = await db.get_genes(user_id);
      let matchRNAId = null;
      genesArr.forEach(gene => {
        if (gene.rna_seq === rna_seq) {
          matchRNAId = gene.rna_id;
        }
      });
      const newCDNA = await db.create_dna({ user_id, dna_seq });
      const { dna_id } = newCDNA[0];
      const updatedGene = await db.update_gene_with_dna({
        user_id,
        rna_id: matchRNAId,
        dna_id
      });
      res.status(200).send(updatedGene[0]);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
