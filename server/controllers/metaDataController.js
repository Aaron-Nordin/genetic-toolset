module.exports = {
  //axios get in GeneLib.js getGenes()
  getGenes: async (req, res) => {
    const db = req.app.get("db");
    const genes = await db.get_genes(req.params.userId);
    let genesNew = [];
    genes.forEach(g => {
      const {
        gene_id: geneId,
        user_id: userId,
        gene_name: geneName,
        gene_desc: geneDesc,
        dna_seq: dnaSeq,
        dna_id: dnaId,
        rna_seq: rnaSeq,
        amino_acid_seq: aaSeq
      } = g;
      genesNew = [
        ...genesNew,
        { geneId, userId, geneName, geneDesc, dnaSeq, dnaId, rnaSeq, aaSeq }
      ];
    });
    res.status(200).send(genesNew);
  },

  deleteGene: async (req, res) => {
    const db = req.app.get("db");
    const { geneId: gene_id } = req.params;
    const deletedGene = await db.delete_gene([+gene_id]);
    res.status(200).send(deletedGene);
  }
};
