module.exports = {
  createRNA: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { userId: user_id, dna: dna_seq, rna: rna_seq } = req.body;
      const genesArr = await db.get_genes(user_id);
      let matchDNAId = null;
      genesArr.forEach(gene => {
        if (gene.dna_seq === dna_seq) {
          matchDNAId = gene.dna_id;
        }
      });
      const newRNA = await db.create_rna({ user_id, rna_seq });
      var { rna_id } = newRNA[0];
      const updatedGene = await db.update_gene_with_rna({
        user_id,
        dna_id: matchDNAId,
        rna_id
      });
      res.status(200).send(updatedGene[0]);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
